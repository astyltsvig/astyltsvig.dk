export type Lang = 'da' | 'en';

export const routes = {
  home: { da: '/', en: '/en/' },
  about: { da: '/om', en: '/en/about' },
  services: { da: '/ydelser', en: '/en/services' },
  work: { da: '/projekter', en: '/en/work' },
  contact: { da: '/kontakt', en: '/en/contact' },
} as const;

export type RouteKey = keyof typeof routes;

export type AltPaths = { da: string; en: string };

export function caseUrl(lang: Lang, slug: string): string {
  return lang === 'da' ? `/projekter/${slug}` : `/en/work/${slug}`;
}

export function casePaths(slug: string): AltPaths {
  return { da: caseUrl('da', slug), en: caseUrl('en', slug) };
}

/** Recursively maps every leaf to `string` — used to enforce da/en key parity in copy modules. */
export type DeepString<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepString<T[K]>;
};
