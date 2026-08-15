// Generates the Open Graph share images in public/og/ (plus public/og-default.png).
// Design mirrors the site's intro: ink background, large Schibsted Grotesk
// headline, spruce-green accent line, paper A-mark.
//
// Run manually after changing titles/cases:  node scripts/generate-og.mjs
// Requires playwright-core (devDependency) and the repo's installed fontsource package.
import { chromium } from 'playwright-core';
import { readFileSync, readdirSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outDir = path.join(root, 'public', 'og');
mkdirSync(outDir, { recursive: true });

const fontDir = path.join(root, 'node_modules', '@fontsource-variable', 'schibsted-grotesk', 'files');
// Inline as data URIs — pages created via setContent cannot load file:// subresources.
// Both subsets are needed: latin covers A-Z/æøå, latin-ext the extended glyphs.
const fontFaces = readdirSync(fontDir)
  .filter(f => f.endsWith('-wght-normal.woff2'))
  .map(f => {
    const data = readFileSync(path.join(fontDir, f)).toString('base64');
    return `@font-face { font-family: 'Schibsted Grotesk Variable'; src: url(data:font/woff2;base64,${data}) format('woff2'); font-weight: 300 900; }`;
  })
  .join('\n');

const staticPages = [
  { name: 'home', da: 'Softwarearkitekt &\nIT-konsulent', en: 'Software architect &\nIT consultant' },
  { name: 'work', da: 'Ti projekter.\nÉt ansvar.', en: 'Ten projects.\nOne responsibility.' },
  { name: 'services', da: 'Ydelser', en: 'Services' },
  { name: 'about', da: 'Andreas\nSørbye Styltsvig', en: 'Andreas\nSørbye Styltsvig' },
  { name: 'contact', da: 'Én mail er nok.', en: 'One email\nis enough.' },
];

const caseTitles = [];
for (const lang of ['da', 'en']) {
  const dir = path.join(root, 'src', 'content', 'cases', lang);
  for (const file of readdirSync(dir)) {
    const client = readFileSync(path.join(dir, file), 'utf8').match(/^client:\s*"(.+)"/m)?.[1];
    if (client) caseTitles.push({ name: `${file.replace('.md', '')}-${lang}`, title: client });
  }
}

const html = (title) => `<!doctype html><html><head><meta charset="utf-8"><style>
  ${fontFaces}
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background: #17181A; color: #FAFAF8;
    font-family: 'Schibsted Grotesk Variable', sans-serif;
    display: flex; flex-direction: column; justify-content: space-between;
    padding: 72px 80px 64px;
  }
  .kicker { font-family: ui-monospace, monospace; font-size: 22px; letter-spacing: 0.28em; color: rgba(250,250,248,.55); }
  .title { font-size: ${title.length > 26 ? 88 : 108}px; font-weight: 600; letter-spacing: -0.03em; line-height: 1.05; white-space: pre-line; }
  .line { width: 340px; height: 4px; background: #5CB08D; margin-top: 40px; }
  .bottom { display: flex; align-items: flex-end; justify-content: space-between; }
  .domain { font-family: ui-monospace, monospace; font-size: 26px; letter-spacing: 0.12em; color: rgba(250,250,248,.7); }
  svg { width: 96px; height: 96px; }
</style></head><body>
  <div class="kicker">ASTYLTSVIG CONSULTING</div>
  <div><div class="title">${title}</div><div class="line"></div></div>
  <div class="bottom">
    <div class="domain">astyltsvig.dk</div>
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="22" stroke="#FAFAF8" stroke-width="1.5"/>
      <path d="M13 35 L22 13 L26 13 L35 35" stroke="#FAFAF8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17 27 L31 27" stroke="#FAFAF8" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="40" cy="40" r="2" fill="#5CB08D"/>
    </svg>
  </div>
</body></html>`;

const jobs = [
  ...staticPages.flatMap(p => [
    { file: path.join(outDir, `${p.name}-da.png`), title: p.da },
    { file: path.join(outDir, `${p.name}-en.png`), title: p.en },
  ]),
  ...caseTitles.map(c => ({ file: path.join(outDir, `${c.name}.png`), title: c.title })),
  { file: path.join(root, 'public', 'og-default.png'), title: 'Softwarearkitekt &\nIT-konsulent' },
];

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH ?? '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const job of jobs) {
  await page.setContent(html(job.title), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: job.file });
  console.log('ok', path.relative(root, job.file));
}
await browser.close();
console.log(`${jobs.length} OG-billeder genereret.`);
