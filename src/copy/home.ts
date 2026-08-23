import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  meta: {
    title: 'AStyltsvig Consulting — softwarearkitekt og IT-konsulent i København',
    description:
      'Andreas Sørbye Styltsvig bygger og drifter forretningskritiske platforme — ERP, booking og administration. Uafhængig konsulent i København med Laravel og Vue som foretrukken stack.',
  },
  hero: {
    eyebrow: 'AStyltsvig Consulting — København',
    heading: 'Hej, jeg er Andreas. Jeg bygger og drifter skræddersyede platforme for virksomheder.',
    lede: 'Min spidskompetence er forretningsplatforme som CRM, ERP og bookingsystemer, bygget præcis til jeres måde at arbejde på. Jeg leverer også hjemmesider og teknisk drift, og jeg tager ansvaret hele vejen fra den første skitse til en løsning der kører stabilt i hverdagen.',
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
        text: 'Skræddersyede systemer til den drift, standardsoftware ikke dækker — bygget til at bære forretningen og driftet år efter år.',
      },
      {
        title: 'Hjemmesider',
        text: 'Sites der loader øjeblikkeligt, er næsten gratis i drift — og kan opdateres af jer selv, uden en udvikler i røret.',
      },
      {
        title: 'Drift & infrastruktur',
        text: 'Teknisk ejerskab af fundamentet — domæner, email og adgange — så det aldrig bliver dit problem.',
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
    heading: "Hi, I'm Andreas. I build and run bespoke platforms for businesses.",
    lede: 'My speciality is business platforms such as CRM, ERP and booking systems, built precisely for the way you work. I also deliver websites and technical operations, and I take responsibility all the way from the first sketch to a solution that runs reliably every day.',
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
        text: 'Bespoke systems for the operations off-the-shelf software does not cover — built to carry the business and operated year after year.',
      },
      {
        title: 'Websites',
        text: 'Sites that load instantly, cost next to nothing to run — and can be updated by your own people, no developer on the line.',
      },
      {
        title: 'Operations & infrastructure',
        text: 'Technical ownership of the foundation — domains, email, and access — so it never becomes your problem.',
      },
    ],
    link: 'Read more about the services',
  },
};

export const home: Record<Lang, DeepString<typeof da>> = { da, en };
