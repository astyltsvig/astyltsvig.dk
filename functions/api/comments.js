// Cloudflare Pages Function: public comments + star ratings for the Clin d'Oeil 2026 program page.
// Requires a D1 database bound as `DB` on the Pages project.
// Optional: set ADMIN_TOKEN (env var) to enable comment deletion.

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

const SHOW_RE = /^[a-z0-9_]{1,32}$/;

async function ensureTable(env) {
  await env.DB.prepare(
    `CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      show TEXT NOT NULL,
      name TEXT NOT NULL DEFAULT '',
      text TEXT NOT NULL,
      created_at TEXT NOT NULL,
      ip_hash TEXT NOT NULL DEFAULT '',
      approved INTEGER NOT NULL DEFAULT 1,
      rating INTEGER NOT NULL DEFAULT 0
    )`
  ).run();
  // migrate tables created before the rating column existed
  try {
    await env.DB.prepare("ALTER TABLE comments ADD COLUMN rating INTEGER NOT NULL DEFAULT 0").run();
  } catch (e) { /* column already exists */ }
}

async function sha256(s) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function onRequestGet({ request, env }) {
  if (!env.DB) return json({ error: "not_configured" }, 503);
  const url = new URL(request.url);
  await ensureTable(env);

  if (url.searchParams.has("summary")) {
    const { results } = await env.DB.prepare(
      `SELECT show,
        SUM(CASE WHEN text != '' THEN 1 ELSE 0 END) AS cc,
        SUM(CASE WHEN rating > 0 THEN 1 ELSE 0 END) AS rc,
        AVG(CASE WHEN rating > 0 THEN rating END) AS avg
       FROM comments WHERE approved = 1 GROUP BY show`
    ).all();
    const shows = {};
    for (const r of results) shows[r.show] = { cc: r.cc, rc: r.rc, avg: r.avg ? Math.round(r.avg * 10) / 10 : null };
    return json({ shows });
  }

  const show = (url.searchParams.get("show") || "").toLowerCase();
  if (!SHOW_RE.test(show)) return json({ error: "bad_show" }, 400);
  const { results } = await env.DB.prepare(
    "SELECT id, name, text, rating, created_at FROM comments WHERE show = ?1 AND approved = 1 AND text != '' ORDER BY id DESC LIMIT 100"
  ).bind(show).all();
  const { results: agg } = await env.DB.prepare(
    "SELECT SUM(CASE WHEN rating > 0 THEN 1 ELSE 0 END) AS rc, AVG(CASE WHEN rating > 0 THEN rating END) AS avg FROM comments WHERE show = ?1 AND approved = 1"
  ).bind(show).all();
  return json({
    comments: results,
    rating: { rc: agg[0].rc || 0, avg: agg[0].avg ? Math.round(agg[0].avg * 10) / 10 : null },
  });
}

export async function onRequestPost({ request, env }) {
  if (!env.DB) return json({ error: "not_configured" }, 503);
  let body;
  try { body = await request.json(); } catch { return json({ error: "bad_json" }, 400); }

  const show = String(body.show || "").toLowerCase();
  const name = String(body.name || "").trim().slice(0, 40);
  const text = String(body.text || "").trim();
  const rating = Number.isInteger(body.rating) && body.rating >= 1 && body.rating <= 5 ? body.rating : 0;
  if (String(body.hp || "")) return json({ ok: true }, 201); // honeypot: silently accept
  if (!SHOW_RE.test(show)) return json({ error: "bad_show" }, 400);
  if (!text && !rating) return json({ error: "empty" }, 400);
  if (text && (text.length < 2 || text.length > 500)) return json({ error: "bad_text" }, 400);

  await ensureTable(env);

  const ipHash = await sha256(request.headers.get("cf-connecting-ip") || "");
  const since = new Date(Date.now() - 10 * 60 * 1000).toISOString();
  const { results } = await env.DB.prepare(
    "SELECT COUNT(*) AS n FROM comments WHERE ip_hash = ?1 AND created_at > ?2"
  ).bind(ipHash, since).all();
  if (results[0].n >= 8) return json({ error: "rate_limited" }, 429);

  await env.DB.prepare(
    "INSERT INTO comments (show, name, text, created_at, ip_hash, rating) VALUES (?1, ?2, ?3, ?4, ?5, ?6)"
  ).bind(show, name, text, new Date().toISOString(), ipHash, rating).run();
  return json({ ok: true }, 201);
}

export async function onRequestDelete({ request, env }) {
  if (!env.DB) return json({ error: "not_configured" }, 503);
  const auth = request.headers.get("authorization") || "";
  if (!env.ADMIN_TOKEN || auth !== `Bearer ${env.ADMIN_TOKEN}`) return json({ error: "forbidden" }, 403);
  const id = Number(new URL(request.url).searchParams.get("id"));
  if (!Number.isInteger(id) || id <= 0) return json({ error: "bad_id" }, 400);
  await ensureTable(env);
  await env.DB.prepare("DELETE FROM comments WHERE id = ?1").bind(id).run();
  return json({ ok: true });
}
