import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://astyltsvig.dk',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'da'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', da: 'da' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
