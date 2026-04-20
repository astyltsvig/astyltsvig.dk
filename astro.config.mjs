import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://astyltsvig.dk',
  i18n: {
    defaultLocale: 'da',
    locales: ['da', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'da',
        locales: { da: 'da', en: 'en' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
