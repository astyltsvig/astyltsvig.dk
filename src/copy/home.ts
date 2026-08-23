import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  meta: {
    title: 'AStyltsvig Consulting · softwarearkitekt og IT-konsulent i København',
    description:
      'Andreas Sørbye Styltsvig bygger og drifter forretningskritiske platforme inden for ERP, booking og administration. Uafhængig konsulent i København med Laravel og Vue som foretrukken stack.',
  },
  hero: {
    eyebrow: 'AStyltsvig Consulting · København',
    heading: 'Jeg bygger og drifter de systemer, virksomheder driver forretning på.',
    lede: 'Softwarearkitekt og IT-konsulent. Jeg bygger skræddersyede platforme til ERP, booking og administration, og jeg står selv for hele forløbet fra første skitse til stabil daglig drift.',
    primaryCta: 'Se projekterne',
    secondaryCta: 'Skriv til mig',
  },
  facts: [
    'Uafhængig konsulent siden 2020',
    '3+ platforme i daglig produktion',
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
        text: 'Skræddersyede systemer til den drift, standardsoftware ikke dækker. Bygget til at bære forretningen og driftet år efter år.',
      },
      {
        title: 'Hjemmesider',
        text: 'Sites der loader øjeblikkeligt, er næsten gratis i drift og kan opdateres af jer selv, uden at der skal en udvikler i røret.',
      },
      {
        title: 'Drift & infrastruktur',
        text: 'Jeg tager teknisk ejerskab af fundamentet med domæner, email og adgange, så det aldrig bliver dit problem.',
      },
    ],
    link: 'Læs mere om ydelserne',
  },
} as const;

const en: DeepString<typeof da> = {
  meta: {
    title: 'AStyltsvig Consulting · software architect and IT consultant in Copenhagen',
    description:
      'Andreas Sørbye Styltsvig builds and operates business-critical platforms for ERP, booking, and administration. Independent consultant in Copenhagen with Laravel and Vue as the preferred stack.',
  },
  hero: {
    eyebrow: 'AStyltsvig Consulting · Copenhagen',
    heading: 'I build and operate the systems businesses run on.',
    lede: 'Software architect and IT consultant. I build bespoke platforms for ERP, booking, and administration, and I handle the whole journey myself, from the first sketch to stable daily operation.',
    primaryCta: 'See the work',
    secondaryCta: 'Get in touch',
  },
  facts: [
    'Independent consultant since 2020',
    '3+ platforms in daily production',
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
        text: 'Bespoke systems for the operations off-the-shelf software does not cover. Built to carry the business and operated year after year.',
      },
      {
        title: 'Websites',
        text: 'Sites that load instantly, cost next to nothing to run, and can be updated by your own people without a developer on the line.',
      },
      {
        title: 'Operations & infrastructure',
        text: 'I take technical ownership of the foundation, including domains, email, and access, so it never becomes your problem.',
      },
    ],
    link: 'Read more about the services',
  },
};

export const home: Record<Lang, DeepString<typeof da>> = { da, en };
