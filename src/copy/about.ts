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
  bio: [
    'Jeg bygger og drifter de systemer, en virksomhed ikke kan undvære. Jeg har ansvaret fra første skitse til daglig drift, så der aldrig er tvivl om, hvem der har bolden.',
    'De bedste løsninger opstår, når jeg kender forretningen lige så godt som koden. Derfor sætter jeg mig ind i arbejdsgangene, flaskehalsene og tallene, før jeg foreslår noget. Det er dér, det bliver tydeligt, hvad der skal automatiseres, og hvad der skal have lov at være, som det er.',
    'Jeg arbejder med få kunder over lang tid. Det betyder ærlige anbefalinger, også når den rigtige løsning er den billige, og systemer bygget til at blive passet i mange år. En stille drift uden overraskelser er noget af det, jeg er mest stolt af.',
    'Før jeg gik selvstændig, var jeg konsulent hos Prolike, hvor jeg som nyuddannet stod for at flytte Oticons byggesystemer fra Jenkins og SVN til Azure DevOps. I 2020 gik jeg selvstændig på fuld tid.',
    'Jeg bruger AI aktivt i arbejdet, og det siger jeg gerne højt. Arkitekturen og beslutningerne er mine, men værktøjerne gør, at én person i dag kan bygge og drive det, der før krævede et helt team.',
  ],
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
  bio: [
    'I build and run the systems a business cannot do without. I own the whole chain from the first sketch to daily production, so there is never any doubt about who has the ball.',
    'The best solutions come from knowing the business as well as the code. So I get into the workflows, the bottlenecks, and the numbers before I suggest anything. That is where it becomes clear what should be automated and what should be left alone.',
    'I work with few clients over a long time. That means honest recommendations, including when the right solution is the cheap one, and systems built to be looked after for years. Quiet operations without surprises is one of the things I am proudest of.',
    'Before going independent, I was a consultant at Prolike, where, fresh out of school, I led the move of Oticon\'s build systems from Jenkins and SVN to Azure DevOps. In 2020 I went independent full-time.',
    'I use AI actively in my work, and I am happy to say so. The architecture and the decisions are mine, but the tools mean one person today can build and run what used to take a whole team.',
  ],
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
