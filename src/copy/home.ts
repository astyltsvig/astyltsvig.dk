import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  meta: {
    title: 'AStyltsvig Consulting · softwarearkitekt og IT-konsulent i København',
    description:
      'Andreas Sørbye Styltsvig bygger og drifter forretningskritiske platforme inden for ERP, booking og administration, der effektiviserer og automatiserer driften. Uafhængig konsulent i København med Laravel og Vue som foretrukken stack.',
  },
  hero: {
    eyebrow: 'AStyltsvig Consulting · København',
    heading: 'Jeg bygger og drifter de systemer, virksomheder driver forretning på.',
    lede: 'Softwarearkitekt og IT-konsulent. Jeg bygger skræddersyede platforme til ERP, booking og administration, der effektiviserer driften og automatiserer de tunge arbejdsgange. Jeg står selv for hele forløbet fra første skitse til stabil daglig drift.',
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
        text: 'Skræddersyede systemer til den drift, standardsoftware ikke dækker. Effektiviserer arbejdsgange, automatiserer manuelle processer og skalerer med forretningen.',
      },
      {
        title: 'Hjemmesider',
        text: 'Sites der loader øjeblikkeligt, er SEO-optimerede og næsten gratis i drift. Indholdet kan I selv opdatere, uden at der skal en udvikler i røret.',
      },
      {
        title: 'Drift & infrastruktur',
        text: 'Jeg tager teknisk ejerskab af fundamentet med domæner, email og adgange og optimerer sikkerhed og driftsstabilitet, så det aldrig bliver dit problem.',
      },
    ],
    link: 'Læs mere om ydelserne',
  },
} as const;

const en: DeepString<typeof da> = {
  meta: {
    title: 'AStyltsvig Consulting · software architect and IT consultant in Copenhagen',
    description:
      'Andreas Sørbye Styltsvig builds and operates business-critical platforms for ERP, booking, and administration that streamline and automate operations. Independent consultant in Copenhagen with Laravel and Vue as the preferred stack.',
  },
  hero: {
    eyebrow: 'AStyltsvig Consulting · Copenhagen',
    heading: 'I build and operate the systems businesses run on.',
    lede: 'Software architect and IT consultant. I build bespoke platforms for ERP, booking, and administration that streamline operations and automate heavy workflows. I handle the whole journey myself, from the first sketch to stable daily operation.',
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
        text: 'Bespoke systems for the operations off-the-shelf software does not cover. Streamlining workflows, automating manual processes, and scaling with the business.',
      },
      {
        title: 'Websites',
        text: 'Sites that load instantly, are SEO-optimised, and cost next to nothing to run. Your own people can update the content without a developer on the line.',
      },
      {
        title: 'Operations & infrastructure',
        text: 'I take technical ownership of the foundation, including domains, email, and access, and optimise security and operational stability, so it never becomes your problem.',
      },
    ],
    link: 'Read more about the services',
  },
};

export const home: Record<Lang, DeepString<typeof da>> = { da, en };
