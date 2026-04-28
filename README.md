# astyltsvig.dk

Personal/consulting site for **AStyltsvig Consulting** (CVR 36163771).

Built with **Astro 5** + **Tailwind CSS v4**, deployed to **Cloudflare Pages**. Bilingual (English default, Danish at `/da/`).

## Stack

- Astro 5 content collections for case studies
- Tailwind v4 (Vite plugin, `@theme` tokens)
- Self-hosted variable fonts (Fraunces, Inter, JetBrains Mono)
- Formspree for the contact form with `mailto:` fallback

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
```

## Build & preview

```sh
npm run build
npm run preview
```

## Deploy

Cloudflare Pages via Wrangler (project name: `astyltsvig-dk`):

```sh
npm run deploy
```

## Structure

```
src/
├── content/cases/{en,da}/   Markdown case studies
├── i18n/                    UI strings + alternate URL mapping
├── layouts/BaseLayout.astro Meta, hreflang, theme init
├── components/              Header, Footer, CaseCard, etc.
├── pages/                   EN routes at /, DA routes under /da/
└── styles/global.css        Tailwind @theme tokens
```
