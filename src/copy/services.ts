import type { DeepString, Lang, ServiceKey } from '~/i18n/routes';

/*
 * The services page is a short menu: four services, each with a deeper page
 * (or the matching projects), then how a collaboration runs. Order follows the
 * reader's questions: what can I get help with → how does it work → contact.
 */

/** Display order of the service cards. */
export const serviceOrder: ServiceKey[] = ['platforms', 'websites', 'accessibility', 'operations'];

/** Case slugs shown as examples on each card (identical across locales). */
export const serviceCases: Record<ServiceKey, string[]> = {
  platforms: ['mallard', 'securelife', 'cpof', 'book2go'],
  websites: ['ddl-tegnsprogspakken', 'festival-sans-pression', 'df1866'],
  accessibility: ['ddl-tegnsprogspakken', 'df1866'],
  operations: ['cycling-without-age'],
};

const da = {
  meta: {
    title: 'Ydelser · software, hjemmesider og drift | AStyltsvig Consulting',
    description:
      'Skræddersyet software, hjemmesider der bliver fundet, tilgængelige løsninger for døve og teknisk drift. Én softwarearkitekt fra første snak til daglig drift.',
  },
  intro: {
    eyebrow: 'Ydelser',
    heading: 'Det kan jeg hjælpe jer med.',
    lede: 'Fire områder, jeg kender indgående. Vælg det, der ligner jeres opgave, og læs mere om, hvordan jeg griber den an.',
  },
  cards: {
    examples: 'Eksempler',
    readMore: 'Læs mere',
    seeProjects: 'Se projektet',
  },
  items: {
    platforms: {
      title: 'Skræddersyet software',
      lede: 'Ét system, der samler det, I i dag klarer med regneark, mails og dobbeltindtastning.',
      points: [
        'Platforme og ERP bygget omkring jeres arbejdsgange',
        'Automatisering af det manuelle og gentagne',
        'Modernisering af eksisterende systemer, mens driften kører',
      ],
    },
    websites: {
      title: 'Hjemmesider',
      lede: 'Hurtige hjemmesider, der bliver fundet på Google, og som I selv kan holde opdateret.',
      points: [
        'Nyt design med jeres identitet i centrum',
        'Teknisk SEO og hastighed fra dag ét',
        'Hosting med driftsudgifter tæt på nul',
      ],
    },
    accessibility: {
      title: 'Tilgængelighed og tegnsprog',
      lede: 'Hjemmesider og apps, alle kan bruge, med erfaring fra døveområdet og dansk tegnsprog.',
      points: [
        'WCAG bygget ind fra første linje',
        'Tegnsprogsvideo og undertekster, der virker',
        'Gennemgang af eksisterende sites med konkrete rettelser',
      ],
    },
    operations: {
      title: 'Drift og infrastruktur',
      lede: 'Teknisk ejerskab af domæner, email og adgange, så fundamentet bare virker.',
      points: [
        'Domæneflytning med email, uden nedetid',
        'Email, der lander i indbakken',
        'Styr på brugere, adgange og dokumentation',
      ],
    },
  },
  other: {
    text: 'Passer jeres opgave ikke helt ind? Skriv alligevel, så får I et ærligt svar.',
    link: 'Skriv til mig',
  },
  process: {
    eyebrow: 'Samarbejde',
    heading: 'Sådan arbejder vi sammen.',
    steps: [
      {
        title: 'En snak',
        text: 'I fortæller, hvad der driller. Jeg spørger ind til arbejdsgange, tal og mål.',
      },
      {
        title: 'Et konkret forslag',
        text: 'Hvad jeg vil bygge, i hvilken rækkefølge, og et prisoverslag, I kan tage stilling til.',
      },
      {
        title: 'Byg i etaper',
        text: 'I får noget at bruge tidligt og ser fremskridtet løbende i stedet for at vente på én stor aflevering.',
      },
      {
        title: 'Drift og udvikling',
        text: 'Når løsningen kører, bliver jeg på. Den udvikler sig med jer.',
      },
    ],
  },
} as const;

const en: DeepString<typeof da> = {
  meta: {
    title: 'Services · software, websites, and operations | AStyltsvig Consulting',
    description:
      'Custom software, websites that get found, accessible solutions for deaf users, and technical operations. One software architect from the first conversation to daily production.',
  },
  intro: {
    eyebrow: 'Services',
    heading: 'What I can help you with.',
    lede: 'Four areas I know inside out. Pick the one that looks like your task and read how I approach it.',
  },
  cards: {
    examples: 'Examples',
    readMore: 'Read more',
    seeProjects: 'See the project',
  },
  items: {
    platforms: {
      title: 'Custom software',
      lede: 'One system that brings together what you handle today with spreadsheets, emails, and double entry.',
      points: [
        'Platforms and ERP built around your workflows',
        'Automation of the manual and repetitive',
        'Modernising existing systems while operations keep running',
      ],
    },
    websites: {
      title: 'Websites',
      lede: 'Fast websites that get found on Google and that you can keep up to date yourselves.',
      points: [
        'New design with your identity at the centre',
        'Technical SEO and speed from day one',
        'Hosting with running costs close to zero',
      ],
    },
    accessibility: {
      title: 'Accessibility and sign language',
      lede: 'Websites and apps everyone can use, backed by experience from the deaf community and Danish Sign Language.',
      points: [
        'WCAG built in from the first line',
        'Sign language video and captions that work',
        'Reviews of existing sites with concrete fixes',
      ],
    },
    operations: {
      title: 'Operations and infrastructure',
      lede: 'Technical ownership of domains, email, and access, so the foundation simply works.',
      points: [
        'Domain migration including email, without downtime',
        'Email that lands in the inbox',
        'Users, access, and documentation under control',
      ],
    },
  },
  other: {
    text: 'Does your task not quite fit? Write anyway, and you will get an honest answer.',
    link: 'Write to me',
  },
  process: {
    eyebrow: 'Working together',
    heading: 'How we work together.',
    steps: [
      {
        title: 'A conversation',
        text: 'You tell me what is getting in the way. I ask about workflows, numbers, and goals.',
      },
      {
        title: 'A concrete proposal',
        text: 'What I will build, in which order, and an estimate you can decide on.',
      },
      {
        title: 'Build in stages',
        text: 'You get something usable early and see progress along the way instead of waiting for one big delivery.',
      },
      {
        title: 'Run and evolve',
        text: 'Once the solution is live, I stay on. It evolves with you.',
      },
    ],
  },
};

export const services: Record<Lang, DeepString<typeof da>> = { da, en };
