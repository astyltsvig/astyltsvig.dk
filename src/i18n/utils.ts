import { en } from './en';
import { da } from './da';

export type Lang = 'en' | 'da';

export const dictionaries = { en, da } as const;

export function t(lang: Lang) {
  return dictionaries[lang];
}

export function getLangFromUrl(url: URL): Lang {
  return url.pathname.startsWith('/en') ? 'en' : 'da';
}

type RouteMap = Record<string, { en: string; da: string }>;

export const routes: RouteMap = {
  home: { en: '/en/', da: '/' },
  about: { en: '/en/about', da: '/om' },
  services: { en: '/en/services', da: '/ydelser' },
  work: { en: '/en/work', da: '/projekter' },
  contact: { en: '/en/contact', da: '/kontakt' },
};

const caseSlugs = [
  'mallard',
  'book2go',
  'securelife-bedstpension',
  'ddl-tegnsprogspakken',
  'cycling-without-age',
  'df1866',
  'festival-sans-pression',
] as const;

export function getAlternateUrl(pathname: string, target: Lang): string {
  const clean = pathname.replace(/\/+$/, '') || '/';

  for (const key of Object.keys(routes)) {
    const r = routes[key];
    const enClean = r.en.replace(/\/+$/, '') || '/';
    const daClean = r.da.replace(/\/+$/, '') || '/';
    if (clean === enClean || clean === r.en) return r[target];
    if (clean === daClean || clean === r.da) return r[target];
  }

  for (const slug of caseSlugs) {
    if (clean === `/en/work/${slug}` || clean === `/en/work/${slug}/`) {
      return target === 'en' ? `/en/work/${slug}` : `/projekter/${slug}`;
    }
    if (clean === `/projekter/${slug}` || clean === `/projekter/${slug}/`) {
      return target === 'en' ? `/en/work/${slug}` : `/projekter/${slug}`;
    }
  }

  return target === 'en' ? '/en/' : '/';
}

export function caseUrl(lang: Lang, slug: string): string {
  return lang === 'en' ? `/en/work/${slug}` : `/projekter/${slug}`;
}

export function workIndexUrl(lang: Lang): string {
  return routes.work[lang];
}
