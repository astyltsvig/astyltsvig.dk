import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  skipToContent: 'Spring til indhold',
  nav: {
    home: 'Forside',
    work: 'Projekter',
    services: 'Ydelser',
    about: 'Om',
    contact: 'Kontakt',
  },
  logo: {
    label: 'AStyltsvig Consulting — til forsiden',
  },
  languageSwitch: {
    label: 'Skift sprog',
    da: 'Dansk',
    en: 'English',
  },
  categories: {
    platform: 'Platforme',
    web: 'Hjemmesider',
    ownProduct: 'Egne produkter',
    operations: 'Drift',
  },
  categoryLede: {
    platform: 'Forretningskritiske systemer i daglig produktion — bygget, driftet og videreudviklet.',
    web: 'Hurtige statiske sites med lavt driftsaftryk og redaktører der kan selv.',
    ownProduct: 'Produkter jeg selv har fået idéen til, bygget og sat i drift.',
    operations: 'Teknisk ejerskab af infrastruktur, DNS og email — det der bare skal virke.',
  },
  status: {
    inDailyProduction: 'I daglig drift',
    delivered: 'Leveret',
    ongoing: 'Løbende',
  },
  caseMeta: {
    client: 'Kunde',
    role: 'Rolle',
    period: 'Periode',
    stack: 'Stack',
    status: 'Status',
    category: 'Kategori',
    visitSite: 'Besøg sitet',
  },
  caseNav: {
    back: 'Alle projekter',
    prev: 'Forrige',
    next: 'Næste',
    viewCase: 'Se casen',
  },
  cta: {
    eyebrow: 'Kontakt',
    heading: 'Skal vi tale om dit projekt?',
    body: 'Skriv kort, hvad du har brug for — svaret kommer fra den samme person, der ender med at bygge løsningen.',
    email: 'hello@astyltsvig.dk',
  },
  footer: {
    contactHeading: 'Kontakt',
    businessHeading: 'Virksomhed',
    linksHeading: 'Links',
    location: 'Vanløse, København',
    cvr: 'CVR 36163771',
    founded: 'Grundlagt 2020',
    owner: 'Andreas Sørbye Styltsvig',
  },
} as const;

const en: DeepString<typeof da> = {
  skipToContent: 'Skip to content',
  nav: {
    home: 'Home',
    work: 'Work',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
  },
  logo: {
    label: 'AStyltsvig Consulting — to the front page',
  },
  languageSwitch: {
    label: 'Switch language',
    da: 'Dansk',
    en: 'English',
  },
  categories: {
    platform: 'Platforms',
    web: 'Websites',
    ownProduct: 'Own products',
    operations: 'Operations',
  },
  categoryLede: {
    platform: 'Business-critical systems in daily production — built, operated, and continuously developed.',
    web: 'Fast static sites with a light operational footprint and editors who can work unassisted.',
    ownProduct: 'Products I conceived, built, and put into production myself.',
    operations: 'Technical ownership of infrastructure, DNS, and email — the things that simply have to work.',
  },
  status: {
    inDailyProduction: 'In daily production',
    delivered: 'Delivered',
    ongoing: 'Ongoing',
  },
  caseMeta: {
    client: 'Client',
    role: 'Role',
    period: 'Period',
    stack: 'Stack',
    status: 'Status',
    category: 'Category',
    visitSite: 'Visit site',
  },
  caseNav: {
    back: 'All projects',
    prev: 'Previous',
    next: 'Next',
    viewCase: 'View case',
  },
  cta: {
    eyebrow: 'Contact',
    heading: 'Shall we talk about your project?',
    body: 'Describe briefly what you need — the reply comes from the same person who ends up building the solution.',
    email: 'hello@astyltsvig.dk',
  },
  footer: {
    contactHeading: 'Contact',
    businessHeading: 'Business',
    linksHeading: 'Links',
    location: 'Vanløse, Copenhagen',
    cvr: 'CVR 36163771',
    founded: 'Founded 2020',
    owner: 'Andreas Sørbye Styltsvig',
  },
};

export const shared: Record<Lang, typeof da | DeepString<typeof da>> = { da, en };
export type SharedCopy = DeepString<typeof da>;
