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
  business: ['cpof', 'mallard'],
  platforms: ['securelife', 'book2go'],
  websites: ['ddl-tegnsprogspakken', 'festival-sans-pression'],
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
    lede: 'Jeg hjælper virksomheder med at bruge software til at arbejde smartere. Det, jeg bygger, drifter og videreudvikler jeg også selv, så I har én ansvarlig hele vejen.',
  },
  cards: {
    examples: 'Eksempler',
    readMore: 'Læs mere',
    talk: 'Tag en snak',
  },
  items: {
    business: {
      title: 'Forretningsudvikling',
      lede: 'Jeg finder de steder i jeres forretning, hvor software kan spare tid, fjerne fejl og skabe nye muligheder.',
      points: [
        'Kortlægning af arbejdsgange',
        'En plan med det vigtigste først',
        'Sparring om arkitektur og valg',
      ],
    },
    platforms: {
      title: 'Platforme og integrationer',
      lede: 'Skræddersyede systemer, der samler arbejdet ét sted og får jeres øvrige software til at spille sammen.',
      points: [
        'Platforme og ERP-systemer',
        'Integration af økonomi og CRM',
        'Automatisering af rutiner',
      ],
    },
    websites: {
      title: 'Hjemmesider',
      lede: 'Hurtige hjemmesider, der bliver fundet på Google, koster næsten intet i drift og kan redigeres af jer selv.',
      points: [
        'Design med jeres identitet',
        'Teknisk SEO og hastighed',
        'Redigering uden en udvikler',
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
        text: 'I fortæller, hvad der driller, og jeg spørger ind til arbejdsgange, tal og mål.',
      },
      {
        title: 'Et konkret forslag',
        text: 'Hvad jeg vil bygge, i hvilken rækkefølge, og et prisoverslag at tage stilling til.',
      },
      {
        title: 'Byg i etaper',
        text: 'I får noget at bruge tidligt og kan følge fremskridtet hele vejen undervejs.',
      },
      {
        title: 'Drift og udvikling',
        text: 'Når løsningen kører, bliver jeg på, og den udvikler sig sammen med jer.',
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
    lede: 'I help businesses use software to work smarter. What I build, I also run and develop further myself, so you have one person responsible all the way.',
  },
  cards: {
    examples: 'Examples',
    readMore: 'Read more',
    talk: 'Get in touch',
  },
  items: {
    business: {
      title: 'Business development',
      lede: 'I find the places in your business where software can save time, remove errors, and create new opportunities.',
      points: [
        'Mapping of workflows',
        'A plan with priorities first',
        'Sparring on architecture',
      ],
    },
    platforms: {
      title: 'Platforms and integrations',
      lede: 'Bespoke systems that bring the work together in one place and make your other software work together.',
      points: [
        'Platforms and ERP systems',
        'Integration of finance and CRM',
        'Automation of routine work',
      ],
    },
    websites: {
      title: 'Websites',
      lede: 'Fast websites that get found on Google, cost next to nothing to run, and can be edited by you.',
      points: [
        'Design with your identity',
        'Technical SEO and speed',
        'Editing without a developer',
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
        text: 'You tell me what is getting in the way, and I ask about workflows, numbers, and goals.',
      },
      {
        title: 'A concrete proposal',
        text: 'What I will build, in which order, and an estimate for you to decide on.',
      },
      {
        title: 'Build in stages',
        text: 'You get something usable early and can follow the progress all the way.',
      },
      {
        title: 'Run and evolve',
        text: 'Once the solution is live, I stay on, and it evolves together with you.',
      },
    ],
  },
};

export const services: Record<Lang, DeepString<typeof da>> = { da, en };
