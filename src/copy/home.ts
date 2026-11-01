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
    { value: '0', label: 'Mellemled og ticketsystemer' },
  ],
  clients: {
    eyebrow: 'Kunder & samarbejder',
  },
  work: {
    eyebrow: 'Udvalgte projekter',
    heading: 'Fra forretningskritisk ERP til egne produkter.',
    allLink: 'Alle projekter',
  },
  services: {
    eyebrow: 'Ydelser',
    heading: 'Det kan I bruge mig til.',
    items: [
      {
        title: 'Platforme',
        text: 'Systemer til den del af driften, som standardsoftware ikke dækker. Mindre genindtastning, færre regneark og mere tid til kunderne.',
      },
      {
        title: 'Hjemmesider',
        text: 'Lynhurtige sites, der klarer sig godt på Google og næsten ikke koster noget i drift. Indholdet retter I selv.',
      },
      {
        title: 'Drift & infrastruktur',
        text: 'Domæner, email og adgange, der bare virker. Jeg holder styr på fundamentet, så I ikke behøver.',
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
    { value: '0', label: 'Middlemen or ticket systems' },
  ],
  clients: {
    eyebrow: 'Clients & collaborations',
  },
  work: {
    eyebrow: 'Selected work',
    heading: 'From business-critical ERP to own products.',
    allLink: 'All projects',
  },
  services: {
    eyebrow: 'Services',
    heading: 'What you can use me for.',
    items: [
      {
        title: 'Platforms',
        text: 'Systems for the part of your operations that off-the-shelf software does not cover. Less re-keying, fewer spreadsheets, more time for customers.',
      },
      {
        title: 'Websites',
        text: 'Fast sites that do well on Google and cost next to nothing to run. You edit the content yourselves.',
      },
      {
        title: 'Operations & infrastructure',
        text: 'Domains, email, and access that simply work. I look after the foundation so you do not have to.',
      },
    ],
    link: 'More about the services',
  },
};

export const home: Record<Lang, DeepString<typeof da>> = { da, en };
