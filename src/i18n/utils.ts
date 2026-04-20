import { en } from './en';
import { da } from './da';

export type Lang = 'en' | 'da';

export const dictionaries = { en, da } as const;

export function t(lang: Lang) {
  return dictionaries[lang];
}

export function getLangFromUrl(url: URL): Lang {
  return url.pathname.startsWith('/da') ? 'da' : 'en';
}

type RouteMap = Record<string, { en: string; da: string }>;

export const routes: RouteMap = {
  home: { en: '/', da: '/da/' },
  about: { en: '/about', da: '/da/om' },
  services: { en: '/services', da: '/da/ydelser' },
  work: { en: '/work', da: '/da/cases' },
  contact: { en: '/contact', da: '/da/kontakt' },
};

const caseSlugs = [
  'mallard',
  'ddl-tegnsprogspakken',
  'cycling-without-age',
  'df1866',
] as const;

export function getAlternateUrl(pathname: string, target: Lang): string {
  const clean = pathname.replace(/\/+$/, '') || '/';

  for (const key of Object.keys(routes)) {
    const r = routes[key];
    if (clean === r.en.replace(/\/+$/, '') || clean === r.en) return r[target];
    if (clean === r.da.replace(/\/+$/, '') || clean === r.da) return r[target];
  }

  for (const slug of caseSlugs) {
    if (clean === `/work/${slug}` || clean === `/work/${slug}/`) {
      return target === 'en' ? `/work/${slug}` : `/da/cases/${slug}`;
    }
    if (clean === `/da/cases/${slug}` || clean === `/da/cases/${slug}/`) {
      return target === 'en' ? `/work/${slug}` : `/da/cases/${slug}`;
    }
  }

  return target === 'en' ? '/' : '/da/';
}

export function caseUrl(lang: Lang, slug: string): string {
  return lang === 'en' ? `/work/${slug}` : `/da/cases/${slug}`;
}

export function workIndexUrl(lang: Lang): string {
  return routes.work[lang];
}
