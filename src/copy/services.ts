import type { DeepString, Lang, ServiceKey } from '~/i18n/routes';

/*
 * The services page is a short menu: four services, each with a deeper page
 * (or the matching projects), then how a collaboration runs. Order follows the
 * reader's questions: what can I get help with → how does it work → contact.
 */

/** Display order of the service cards. */
export const serviceOrder: ServiceKey[] = ['business', 'platforms', 'websites'];

/** Case slugs shown as examples on each card (identical across locales). */
export const serviceCases: Record<ServiceKey, string[]> = {
  business: ['cpof', 'cycling-without-age'],
  platforms: ['securelife', 'book2go', 'mallard'],
  websites: ['ddl-tegnsprogspakken', 'festival-sans-pression', 'df1866'],
};

const da = {
  meta: {
    title: 'Ydelser · forretningsudvikling, platforme og hjemmesider | AStyltsvig Consulting',
    description:
      'Forretningsudvikling med software, skræddersyede platforme og integrationer samt hjemmesider, der bliver fundet. Én softwarearkitekt fra første snak til daglig drift.',
  },
  intro: {
    eyebrow: 'Ydelser',
    heading: 'Det kan jeg hjælpe jer med.',
    lede: 'Jeg hjælper virksomheder med at bruge software til at arbejde smartere, fra idé og plan til et system i daglig drift. Alt, hvad jeg bygger, drifter og videreudvikler jeg også selv, så I har én ansvarlig hele vejen.',
  },
  cards: {
    examples: 'Eksempler',
    readMore: 'Læs mere',
    talk: 'Tag en snak',
  },
  items: {
    business: {
      title: 'Forretningsudvikling med software',
      lede: 'Jeg sætter mig ind i jeres forretning og finder de steder, hvor software kan spare tid, fjerne fejl og åbne nye muligheder.',
      points: [
        'Kortlægning af arbejdsgange, flaskehalse og systemer',
        'En prioriteret plan, hvor det, der batter mest, kommer først',
        'Teknisk sparring og arkitektur, også sammen med andre leverandører',
      ],
    },
    platforms: {
      title: 'Platforme og integrationer',
      lede: 'Skræddersyede systemer, der samler arbejdet ét sted og får jeres øvrige software til at spille sammen.',
      points: [
        'Platforme og ERP bygget omkring jeres arbejdsgange',
        'Integrationer mellem økonomi, CRM, booking og andre systemer',
        'Automatisering af det manuelle og gentagne',
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
    title: 'Services · business development, platforms, and websites | AStyltsvig Consulting',
    description:
      'Business development with software, bespoke platforms and integrations, and websites that get found. One software architect from the first conversation to daily production.',
  },
  intro: {
    eyebrow: 'Services',
    heading: 'What I can help you with.',
    lede: 'I help businesses use software to work smarter, from idea and plan to a system in daily production. Everything I build, I also run and develop further myself, so you have one person responsible all the way.',
  },
  cards: {
    examples: 'Examples',
    readMore: 'Read more',
    talk: 'Get in touch',
  },
  items: {
    business: {
      title: 'Business development with software',
      lede: 'I get to know your business and find the places where software can save time, remove errors, and open new opportunities.',
      points: [
        'Mapping of workflows, bottlenecks, and systems',
        'A prioritised plan where what matters most comes first',
        'Technical sparring and architecture, also alongside other suppliers',
      ],
    },
    platforms: {
      title: 'Platforms and integrations',
      lede: 'Bespoke systems that bring the work together in one place and make your other software work together.',
      points: [
        'Platforms and ERP built around your workflows',
        'Integrations between finance, CRM, booking, and other systems',
        'Automation of the manual and repetitive',
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
