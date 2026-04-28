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
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        const url = item.url;
        if (url === 'https://astyltsvig.dk/' || url === 'https://astyltsvig.dk/en/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (/\/(projekter|en\/work)\/[^/]+\/?$/.test(url)) {
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
