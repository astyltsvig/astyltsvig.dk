import type { Lang } from '~/i18n/utils';

export const SITE_URL = 'https://astyltsvig.dk';

type Crumb = { name: string; path: string };

export function breadcrumbList(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export function webPage({
  lang,
  path,
  name,
  description,
  type = 'WebPage',
}: {
  lang: Lang;
  path: string;
  name: string;
  description?: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
}) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    ...(description ? { description } : {}),
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#consulting` },
    primaryImageOfPage: `${SITE_URL}/og-default.svg`,
    inLanguage: lang,
  };
}
