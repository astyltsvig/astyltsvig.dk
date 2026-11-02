import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  meta: {
    title: 'Om Andreas Sørbye Styltsvig | AStyltsvig Consulting',
    description:
      'Softwarearkitekt i København, selvstændig siden 2020. Bygger og drifter platforme og hjemmesider for virksomheder og foreninger.',
  },
  intro: {
    eyebrow: 'Om',
    heading: 'Hej, jeg er Andreas.',
    lede: 'Jeg er softwarearkitekt og har været selvstændig siden 2020. Jeg bygger platforme og hjemmesider for virksomheder og foreninger, og jeg passer dem, når de er gået live.',
  },
  portraitAlt: 'Portræt af Andreas Sørbye Styltsvig',
  facts: [
    { label: 'Selvstændig', value: 'siden 2020' },
    { label: 'Base', value: 'Vanløse, København' },
    { label: 'Uddannet', value: 'Softwareudvikler' },
  ],
  principles: {
    eyebrow: 'Samarbejde',
    heading: 'Det kan I regne med.',
    items: [
      {
        title: 'Jeg starter i jeres hverdag',
        text: 'Før jeg foreslår noget, sætter jeg mig ind i, hvordan I arbejder, og hvor tiden forsvinder. Nogle gange er svaret et nyt system, andre gange en lille rettelse.',
      },
      {
        title: 'Den samme person hele vejen',
        text: 'Jeg tegner, bygger og drifter selv. Skriver I om tre år, er det stadig mig, der svarer, og jeg kender systemet.',
      },
      {
        title: 'I ejer det, jeg bygger',
        text: 'Koden ligger i jeres repo og kører på jeres domæne. Samarbejdet er løbende, og I kan stoppe, når I vil.',
      },
    ],
  },
  background: {
    eyebrow: 'Baggrund',
    heading: 'Fra Oticon til egen praksis.',
    steps: [
      { year: '2019', text: 'Professionsbachelor i softwareudvikling, Cphbusiness Lyngby.' },
      { year: '2019–20', text: 'Konsulent hos Prolike, udstationeret hos Oticon. Flyttede byggesystemerne fra Jenkins og SVN til Azure DevOps.' },
      { year: '2020', text: 'Grundlagde AStyltsvig Consulting.' },
      { year: '2021–', text: 'Platforme i daglig drift inden for pension og forsikring, ERP og international booking.' },
    ],
    toolsHeading: 'Værktøjer',
    tools: ['Laravel', 'Vue', 'TypeScript', 'PostgreSQL', 'Astro', 'Cloudflare', 'Hetzner', 'DNS og email'],
    ai: 'Jeg bruger AI aktivt i udviklingen. Arkitekturen og beslutningerne er mine, og værktøjerne gør, at jeg kan bygge mere selv.',
  },
} as const;

const en: DeepString<typeof da> = {
  meta: {
    title: 'About Andreas Sørbye Styltsvig | AStyltsvig Consulting',
    description:
      'Software architect in Copenhagen, independent since 2020. Builds and runs platforms and websites for businesses and associations.',
  },
  intro: {
    eyebrow: 'About',
    heading: 'Hi, I am Andreas.',
    lede: 'I am a software architect and have been independent since 2020. I build platforms and websites for businesses and associations, and I look after them once they are live.',
  },
  portraitAlt: 'Portrait of Andreas Sørbye Styltsvig',
  facts: [
    { label: 'Independent', value: 'since 2020' },
    { label: 'Based in', value: 'Vanløse, Copenhagen' },
    { label: 'Trained as', value: 'Software developer' },
  ],
  principles: {
    eyebrow: 'Working together',
    heading: 'What you can count on.',
    items: [
      {
        title: 'I start with your day-to-day',
        text: 'Before suggesting anything, I learn how you work and where the time goes. Sometimes the answer is a new system, sometimes a small fix.',
      },
      {
        title: 'The same person all the way',
        text: 'I design, build and run it myself. If you write in three years, I am still the one answering, and I know the system.',
      },
      {
        title: 'You own what I build',
        text: 'The code lives in your repo and runs on your domain. The engagement is ongoing, and you can stop whenever you like.',
      },
    ],
  },
  background: {
    eyebrow: 'Background',
    heading: 'From Oticon to my own practice.',
    steps: [
      { year: '2019', text: 'BSc in software development, Cphbusiness Lyngby.' },
      { year: '2019–20', text: 'Consultant at Prolike, stationed at Oticon. Moved the build systems from Jenkins and SVN to Azure DevOps.' },
      { year: '2020', text: 'Founded AStyltsvig Consulting.' },
      { year: '2021–', text: 'Platforms in daily production within pensions and insurance, ERP and international booking.' },
    ],
    toolsHeading: 'Tools',
    tools: ['Laravel', 'Vue', 'TypeScript', 'PostgreSQL', 'Astro', 'Cloudflare', 'Hetzner', 'DNS and email'],
    ai: 'I use AI actively in development. The architecture and decisions are mine, and the tools let me build more on my own.',
  },
};

export const about: Record<Lang, DeepString<typeof da>> = { da, en };
