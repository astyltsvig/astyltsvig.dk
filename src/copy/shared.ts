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
    label: 'AStyltsvig Consulting, til forsiden',
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
    platform: 'Forretningskritiske systemer i daglig produktion. Bygget, driftet og løbende optimeret.',
    web: 'Hurtige sites, der bliver fundet på Google, koster næsten intet i drift og kan redigeres uden en udvikler.',
    ownProduct: 'Mine egne idéer, bygget og sat i drift.',
    operations: 'Teknisk ejerskab af infrastruktur, DNS og email. Det der bare skal virke.',
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
    heading: 'Har I et projekt i tankerne?',
    body: 'Skriv et par linjer om, hvad I har brug for. Svaret kommer fra mig, og det er også mig, der bygger løsningen.',
    email: 'hello@astyltsvig.dk',
  },
  footer: {
    contactHeading: 'Kontakt',
    siteHeading: 'Sider',
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
    label: 'AStyltsvig Consulting, to the front page',
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
    platform: 'Business-critical systems in daily production. Built, operated, and continuously optimised.',
    web: 'Fast sites that get found on Google, cost next to nothing to run, and can be edited without a developer.',
    ownProduct: 'My own ideas, built and put into production.',
    operations: 'Technical ownership of infrastructure, DNS, and email. The things that simply have to work.',
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
    heading: 'Got a project in mind?',
    body: 'Write a few lines about what you need. The reply comes from me, and I am also the one who builds it.',
    email: 'hello@astyltsvig.dk',
  },
  footer: {
    contactHeading: 'Contact',
    siteHeading: 'Pages',
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
