import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  meta: {
    title: 'AStyltsvig Consulting · softwarearkitekt og IT-konsulent i København',
    description:
      'Andreas Sørbye Styltsvig bygger og drifter skræddersyede platforme og hurtige hjemmesider, der fjerner manuelt arbejde og skaber vækst. Uafhængig softwarearkitekt i København.',
  },
  hero: {
    eyebrow: 'Softwarearkitekt · København',
    heading: 'Software skræddersyet til den måde, I arbejder på.',
    lede: 'Jeg bygger platforme, der fjerner det manuelle arbejde, og hjemmesider, der bliver fundet. Og jeg bliver, når det er gået live, så I har én fast udvikler, der kender både koden og forretningen.',
    primaryCta: 'Se projekterne',
    secondaryCta: 'Skriv til mig',
    byline: {
      name: 'Andreas Sørbye Styltsvig',
      role: 'Ejer af AStyltsvig Consulting',
    },
  },
  facts: [
    { value: '2020', label: 'Selvstændig siden' },
    { value: '3+', label: 'Platforme i daglig drift' },
    { value: '1', label: 'Ansvarlig fra idé til drift' },
    { value: '10+', label: 'Projekter i porteføljen' },
  ],
  clients: {
    eyebrow: 'Kunder & samarbejder',
  },
  work: {
    eyebrow: 'Projekter',
    heading: 'Udvalgt kundearbejde.',
    allLink: 'Alle projekter',
  },
  services: {
    eyebrow: 'Ydelser',
    heading: 'Det kan I bruge mig til.',
    items: [
      {
        title: 'Forretningsudvikling',
        text: 'Jeg finder de steder i jeres forretning, hvor software kan spare tid, fjerne fejl og åbne nye muligheder.',
      },
      {
        title: 'Platforme og integrationer',
        text: 'Skræddersyede systemer, der samler arbejdet ét sted og får jeres øvrige software til at spille sammen.',
      },
      {
        title: 'Hjemmesider',
        text: 'Lynhurtige sites, der klarer sig godt på Google og næsten ikke koster noget i drift. Indholdet retter I selv.',
      },
    ],
    link: 'Mere om ydelserne',
  },
} as const;

const en: DeepString<typeof da> = {
  meta: {
    title: 'AStyltsvig Consulting · software architect and IT consultant in Copenhagen',
    description:
      'Andreas Sørbye Styltsvig builds and runs bespoke platforms and fast websites that remove manual work and drive growth. Independent software architect in Copenhagen.',
  },
  hero: {
    eyebrow: 'Software architect · Copenhagen',
    heading: 'Software built around the way you actually work.',
    lede: 'I build platforms that take the manual work off your plate and websites that get found. And I stay after launch, so you have one developer who knows both the code and the business.',
    primaryCta: 'See the work',
    secondaryCta: 'Get in touch',
    byline: {
      name: 'Andreas Sørbye Styltsvig',
      role: 'Owner of AStyltsvig Consulting',
    },
  },
  facts: [
    { value: '2020', label: 'Independent since' },
    { value: '3+', label: 'Platforms in daily production' },
    { value: '1', label: 'Person from idea to production' },
    { value: '10+', label: 'Projects in the portfolio' },
  ],
  clients: {
    eyebrow: 'Clients & collaborations',
  },
  work: {
    eyebrow: 'Work',
    heading: 'Selected client work.',
    allLink: 'All projects',
  },
  services: {
    eyebrow: 'Services',
    heading: 'What you can use me for.',
    items: [
      {
        title: 'Business development',
        text: 'I find the places in your business where software can save time, remove errors, and open new opportunities.',
      },
      {
        title: 'Platforms and integrations',
        text: 'Bespoke systems that bring the work together in one place and make your other software work together.',
      },
      {
        title: 'Websites',
        text: 'Fast sites that do well on Google and cost next to nothing to run. You edit the content yourselves.',
      },
    ],
    link: 'More about the services',
  },
};

export const home: Record<Lang, DeepString<typeof da>> = { da, en };
