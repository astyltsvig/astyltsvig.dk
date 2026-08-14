# astyltsvig.dk

Personal consulting site for **AStyltsvig Consulting** (Andreas Sørbye Styltsvig) — [astyltsvig.dk](https://astyltsvig.dk).

## Stack

- [Astro 5](https://astro.build) — static output, native i18n (Danish default, English under `/en/`)
- [Tailwind CSS v4](https://tailwindcss.com) via the Vite plugin
- Self-hosted [Schibsted Grotesk](https://fontsource.org/fonts/schibsted-grotesk) variable font
- Deployed on **Cloudflare Pages** via `npm run deploy` (wrangler)

## Commands

| Command           | Action                                              |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Local dev server                                    |
| `npm run check`   | Type-check (`astro check`)                          |
| `npm run build`   | Production build to `dist/`                         |
| `npm run preview` | Preview the production build locally                |
| `npm run deploy`  | Build and deploy to Cloudflare Pages                |

## Structure

```
src/
  content.config.ts      Content-layer config: one `cases` collection
  content/cases/{da,en}/ Case studies as markdown (identical slugs across locales)
  copy/                  Typed per-page copy modules ({ da, en } — parity enforced by types)
  i18n/routes.ts         Locale type, route map, case URL helpers
  lib/cases.ts           Collection accessors (slugs derived from entry ids)
  lib/seo.ts             JSON-LD builders (person/org graph, breadcrumbs, WebPage)
  layouts/BaseLayout.astro  Head/SEO (canonical, hreflang, OG, JSON-LD)
  components/            Header, Footer, ProjectRow, ProjectMeta, Screenshot, …
  templates/             One shared page template per route
  pages/                 Thin locale wrappers around the templates
```

Routes are `/{,om,ydelser,projekter,projekter/[slug],kontakt}` and the English equivalents `/en/{,about,services,work,work/[slug],contact}`. Slugs are identical across locales — the language switcher and hreflang links rely on that.

## Live, do-not-break areas

- **`public/clin-doeil-2026-program/`** — a standalone, self-contained festival program page (own HTML/CSS/JS + 63 images). It is publicly used and not linked from the site itself.
- **`functions/api/comments.js`** — Cloudflare Pages Function backing the program page's comments and ratings, bound to a live **D1 database** (`DB` binding, optional `ADMIN_TOKEN`).

Leave both alone unless you are deliberately working on the program page.

## Assets

- `src/assets/cases/` — project screenshots (large PNGs, downscaled at build by `astro:assets`)
- `src/assets/clients/` — client logos for the front-page strip
- `export/` — email signature and logo kit (used outside the site)
