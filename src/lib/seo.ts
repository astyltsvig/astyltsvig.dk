import type { Lang } from '~/i18n/routes';

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
    primaryImageOfPage: `${SITE_URL}/og-default.png`,
    inLanguage: lang,
  };
}

const graphText = {
  da: {
    jobTitle: 'IT-konsulent & softwarearkitekt',
    personDescription:
      'IT-konsulent og softwarearkitekt i København. Bygger og drifter forretningskritiske platforme — ERP, booking og administration — med Laravel og Vue som foretrukken stack.',
    orgDescription:
      'Enkeltmandskonsulentvirksomhed i København. Skræddersyet platformudvikling, hjemmesider og teknisk drift — ét ansvarspunkt fra arkitektur til daglig produktion.',
    siteDescription:
      'AStyltsvig Consulting — Andreas Sørbye Styltsvig. Softwarearkitektur, udvikling og drift af forretningskritiske platforme i København.',
    pageName: 'AStyltsvig Consulting — Andreas Sørbye Styltsvig',
  },
  en: {
    jobTitle: 'IT consultant & software architect',
    personDescription:
      'IT consultant and software architect in Copenhagen. Builds and operates business-critical platforms — ERP, booking, and administration — with Laravel and Vue as the preferred stack.',
    orgDescription:
      'Independent one-person consultancy in Copenhagen. Bespoke platform development, websites, and technical operations — one point of responsibility from architecture to daily production.',
    siteDescription:
      'AStyltsvig Consulting — Andreas Sørbye Styltsvig. Software architecture, development, and operations of business-critical platforms in Copenhagen.',
    pageName: 'AStyltsvig Consulting — Andreas Sørbye Styltsvig',
  },
} satisfies Record<Lang, Record<string, string>>;

export function personGraph(lang: Lang) {
  const text = graphText[lang];
  const homePath = lang === 'da' ? '/' : '/en/';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#andreas`,
        name: 'Andreas Sørbye Styltsvig',
        givenName: 'Andreas',
        additionalName: 'Sørbye',
        familyName: 'Styltsvig',
        alternateName: ['Andreas Styltsvig', 'A. Styltsvig', 'Styltsvig'],
        jobTitle: text.jobTitle,
        description: text.personDescription,
        url: `${SITE_URL}/`,
        mainEntityOfPage: `${SITE_URL}${lang === 'da' ? '/om' : '/en/about'}`,
        email: 'hello@astyltsvig.dk',
        image: `${SITE_URL}/og-default.png`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Vanløse',
          addressRegion: 'København',
          addressCountry: 'DK',
        },
        nationality: 'DK',
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Cphbusiness Lyngby (Copenhagen Business Academy)',
          url: 'https://www.cphbusiness.dk/',
        },
        knowsAbout: [
          'Vue.js', 'Laravel', 'Fullstack-udvikling', 'Enterprise-platformudvikling',
          'ERP-systemer', 'Bookingplatforme', 'CRM-platforme',
          'TypeScript', 'PHP', 'MySQL', 'PostgreSQL',
          'DNS', 'SPF', 'DKIM', 'DMARC', 'Google Workspace', 'Hetzner', 'Cloudflare Pages',
        ],
        knowsLanguage: ['da', 'en'],
        worksFor: { '@id': `${SITE_URL}/#consulting` },
        sameAs: [
          'https://github.com/astyltsvig',
          'https://www.linkedin.com/in/astyltsvig/',
        ],
      },
      {
        '@type': ['ProfessionalService', 'Organization'],
        '@id': `${SITE_URL}/#consulting`,
        name: 'AStyltsvig Consulting',
        alternateName: ['AStyltsvig', 'Styltsvig Consulting'],
        legalName: 'AStyltsvig Consulting',
        description: text.orgDescription,
        url: SITE_URL,
        email: 'hello@astyltsvig.dk',
        image: `${SITE_URL}/og-default.png`,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo.png`,
          width: 560,
          height: 120,
        },
        founder: { '@id': `${SITE_URL}/#andreas` },
        employee: { '@id': `${SITE_URL}/#andreas` },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Vanløse',
          addressRegion: 'København',
          addressCountry: 'DK',
        },
        areaServed: ['DK', 'EU', 'Worldwide'],
        knowsLanguage: ['da', 'en'],
        priceRange: '$$$',
        identifier: { '@type': 'PropertyValue', propertyID: 'CVR', value: '36163771' },
        taxID: '36163771',
        vatID: 'DK36163771',
        foundingDate: '2020',
        sameAs: [
          'https://github.com/astyltsvig',
          'https://www.linkedin.com/in/astyltsvig/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'AStyltsvig Consulting',
        alternateName: ['AStyltsvig', 'astyltsvig.dk'],
        description: text.siteDescription,
        publisher: { '@id': `${SITE_URL}/#consulting` },
        inLanguage: ['da', 'en'],
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: `${SITE_URL}${homePath}`,
        name: text.pageName,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#consulting` },
        mainEntity: { '@id': `${SITE_URL}/#consulting` },
        primaryImageOfPage: `${SITE_URL}/og-default.png`,
        inLanguage: lang,
      },
    ],
  };
}
