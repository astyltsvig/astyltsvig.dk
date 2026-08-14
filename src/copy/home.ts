import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  meta: {
    title: 'AStyltsvig Consulting — softwarearkitekt og IT-konsulent i København',
    description:
      'Andreas Sørbye Styltsvig bygger og drifter forretningskritiske platforme — ERP, booking og administration. Uafhængig konsulent i København med Laravel og Vue som foretrukken stack.',
  },
  hero: {
    eyebrow: 'AStyltsvig Consulting — København',
    heading: 'Jeg bygger og drifter de systemer, virksomheder driver forretning på.',
    lede: 'Softwarearkitekt og IT-konsulent. ERP, booking og administration — skræddersyede platforme i daglig produktion, leveret af én ansvarlig fra første skitse til stabil drift.',
    primaryCta: 'Se projekterne',
    secondaryCta: 'Skriv til mig',
  },
  facts: [
    'Uafhængig konsulent siden 2020',
    '3+ platforme i daglig produktion',
    'Laravel · Vue · Astro',
    'Vanløse, København',
  ],
  clients: {
    eyebrow: 'Kunder & samarbejder',
  },
  work: {
    eyebrow: 'Projekter',
    heading: 'Fra forretningskritisk ERP til egne produkter.',
    allLink: 'Alle projekter',
  },
  services: {
    eyebrow: 'Ydelser',
    heading: 'Tre måder at arbejde sammen på.',
    items: [
      {
        title: 'Platformudvikling',
        text: 'Skræddersyede systemer — ERP, booking og administration — bygget i Laravel og Vue og driftet år efter år.',
      },
      {
        title: 'Hjemmesider',
        text: 'Hurtige statiske sites i Astro med Git-baseret CMS. Lave driftomkostninger, ingen leverandørlås.',
      },
      {
        title: 'Drift & infrastruktur',
        text: 'DNS, email-autentificering og Google Workspace — teknisk ejerskab af det, der bare skal virke.',
      },
    ],
    link: 'Læs mere om ydelserne',
  },
} as const;

const en: DeepString<typeof da> = {
  meta: {
    title: 'AStyltsvig Consulting — software architect and IT consultant in Copenhagen',
    description:
      'Andreas Sørbye Styltsvig builds and operates business-critical platforms — ERP, booking, and administration. Independent consultant in Copenhagen with Laravel and Vue as the preferred stack.',
  },
  hero: {
    eyebrow: 'AStyltsvig Consulting — Copenhagen',
    heading: 'I build and operate the systems businesses run on.',
    lede: 'Software architect and IT consultant. ERP, booking, and administration — bespoke platforms in daily production, delivered by one accountable person from first sketch to stable operation.',
    primaryCta: 'See the work',
    secondaryCta: 'Get in touch',
  },
  facts: [
    'Independent consultant since 2020',
    '3+ platforms in daily production',
    'Laravel · Vue · Astro',
    'Vanløse, Copenhagen',
  ],
  clients: {
    eyebrow: 'Clients & collaborations',
  },
  work: {
    eyebrow: 'Work',
    heading: 'From business-critical ERP to own products.',
    allLink: 'All projects',
  },
  services: {
    eyebrow: 'Services',
    heading: 'Three ways to work together.',
    items: [
      {
        title: 'Platform development',
        text: 'Bespoke systems — ERP, booking, and administration — built in Laravel and Vue and operated year after year.',
      },
      {
        title: 'Websites',
        text: 'Fast static sites in Astro with Git-based CMS. Low running costs, no vendor lock-in.',
      },
      {
        title: 'Operations & infrastructure',
        text: 'DNS, email authentication, and Google Workspace — technical ownership of the things that simply have to work.',
      },
    ],
    link: 'Read more about the services',
  },
};

export const home: Record<Lang, DeepString<typeof da>> = { da, en };
