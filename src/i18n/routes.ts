export type Lang = 'da' | 'en';

// Every path ends in a slash: that is the URL Cloudflare Pages serves (others 308-redirect),
// so links, canonicals, hreflang and JSON-LD all point straight at the final URL.
export const routes = {
  home: { da: '/', en: '/en/' },
  about: { da: '/om/', en: '/en/about/' },
  services: { da: '/ydelser/', en: '/en/services/' },
  work: { da: '/projekter/', en: '/en/work/' },
  contact: { da: '/kontakt/', en: '/en/contact/' },
} as const;

export type RouteKey = keyof typeof routes;

/** Service landing pages, each aimed at one kind of search. Slugs are translated, so they live here. */
export const landingRoutes = {
  websites: { da: '/ydelser/hjemmesider/', en: '/en/services/websites/' },
  platforms: { da: '/ydelser/platforme/', en: '/en/services/platforms/' },
} as const;

export type LandingKey = keyof typeof landingRoutes;

/** In-page anchors for the service cards on the services page. */
export const serviceAnchors = {
  business: 'forretningsudvikling',
  platforms: 'platforme',
  websites: 'hjemmesider',
} as const;

export type ServiceKey = keyof typeof serviceAnchors;

/** In-page anchors for the case groups on the work page. */
export const categoryAnchors = {
  platform: 'platforme',
  web: 'hjemmesider',
  ownProduct: 'egne-produkter',
} as const;

export type AltPaths = { da: string; en: string };

export function caseUrl(lang: Lang, slug: string): string {
  return lang === 'da' ? `/projekter/${slug}/` : `/en/work/${slug}/`;
}

export function casePaths(slug: string): AltPaths {
  return { da: caseUrl('da', slug), en: caseUrl('en', slug) };
}

/** Recursively maps every leaf to `string` — used to enforce da/en key parity in copy modules. */
export type DeepString<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepString<T[K]>;
};
