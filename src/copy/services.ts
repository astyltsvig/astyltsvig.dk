import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  meta: {
    title: 'Ydelser · platforme, hjemmesider og drift | AStyltsvig Consulting',
    description:
      'Skræddersyede platforme, hurtige hjemmesider og teknisk drift. Én ansvarlig softwarearkitekt fra første skitse til daglig drift.',
  },
  intro: {
    eyebrow: 'Ydelser',
    heading: 'Jeg bygger det, jeres forretning mangler.',
    lede: 'Ofte er det et system, der afløser regneark og dobbeltarbejde. Andre gange en hjemmeside, der skal fornyes, eller et domæne, der skal ryddes op i. Spørgsmålet er altid det samme: hvor kan teknologi spare jer mest tid og flest fejl?',
  },
  approach: {
    eyebrow: 'Tilgang',
    heading: 'Sådan griber jeg det an.',
    steps: [
      {
        title: 'Forstå forretningen',
        text: 'Før der skrives en linje kode, sætter jeg mig ind i jeres arbejdsgange, flaskehalse og tal.',
      },
      {
        title: 'Start dér, hvor det batter',
        text: 'Vi prioriterer sammen og tager det, der giver mest effekt for indsatsen, først.',
      },
      {
        title: 'Byg, lever og bliv',
        text: 'Jeg bygger og leverer løsningen og bliver på, når den kører. Systemet udvikler sig med jer.',
      },
    ],
  },
  delivered: {
    eyebrow: 'Overblik',
    heading: 'Det kan jeg hjælpe med.',
  },
  services: [
    {
      title: 'Platformudvikling',
      stack: 'Effektivisering · Automatisering · Vækst',
      lede: 'Skræddersyede systemer til den del af driften, standardsoftware ikke dækker.',
      items: [
        'Platforme bygget fra bunden omkring den måde, I faktisk arbejder på',
        'Automatisering af manuelle arbejdsgange, så tiden går til kunderne i stedet for genindtastning',
        'Modernisering af eksisterende systemer uden at stoppe driften',
        'Drift og videreudvikling efter lancering, så systemet vokser med jer',
      ],
    },
    {
      title: 'Hjemmesider & CMS',
      stack: 'Synlighed · Selvbetjening · Lave omkostninger',
      lede: 'Hurtige hjemmesider, der bliver fundet, næsten ikke koster noget i drift og kan redigeres af jer selv.',
      items: [
        'Nye sites med jeres identitet i centrum, hurtige og tilgængelige fra dag ét',
        'Flytning væk fra tunge, dyre platforme til en løsning med driftsudgifter tæt på nul',
        'En redigeringsflade, jeres egne folk kan bruge uden at ringe til en udvikler',
        'SEO, tilgængelighed og design tænkt ind fra starten, ikke klistret på bagefter',
      ],
    },
    {
      title: 'Drift & infrastruktur',
      stack: 'Stabilitet · Sikkerhed · Overblik',
      lede: 'Teknisk ejerskab af fundamentet, så det ikke er noget, I skal tænke på.',
      items: [
        'Domæneflytninger uden nedetid, også på email',
        'Email, der lander i indbakken, og et domæne, ingen andre kan misbruge',
        'Styr på brugere, adgange og opsætning i jeres kontorplatform',
        'Dokumentation, så viden ikke kun bor i ét hoved',
      ],
    },
  ],
  links: {
    readMore: 'Læs mere om ydelsen',
    cases: 'Se projekter',
  },
  specialties: {
    eyebrow: 'Læs mere',
    heading: 'Dyk ned i det, I har brug for.',
    readMore: 'Læs mere',
  },
  process: {
    eyebrow: 'Ikke på listen?',
    heading: 'Spørg alligevel.',
    text: 'Listen er ikke udtømmende. Har I et problem, der kan løses med teknologi, stort eller lille, så skriv. I får et ærligt svar, også hvis svaret er, at I ikke har brug for mig.',
  },
} as const;

const en: DeepString<typeof da> = {
  meta: {
    title: 'Services · platforms, websites, and operations | AStyltsvig Consulting',
    description:
      'Bespoke platforms, fast websites, and technical operations. One accountable software architect from the first sketch to daily production.',
  },
  intro: {
    eyebrow: 'Services',
    heading: 'I build what your business is missing.',
    lede: 'Often it is a system that replaces spreadsheets and double work. Sometimes a website that needs renewing, or a domain that needs cleaning up. The question is always the same: where can technology save you the most time and the most mistakes?',
  },
  approach: {
    eyebrow: 'Approach',
    heading: 'How I go about it.',
    steps: [
      {
        title: 'Understand the business',
        text: 'Before a line of code is written, I get to know your workflows, bottlenecks, and numbers.',
      },
      {
        title: 'Start where it counts',
        text: 'We prioritise together and tackle what gives the most effect for the effort first.',
      },
      {
        title: 'Build, deliver, and stay',
        text: 'I build and deliver the solution and stay on once it is running. The system evolves with you.',
      },
    ],
  },
  delivered: {
    eyebrow: 'Overview',
    heading: 'What I can help with.',
  },
  services: [
    {
      title: 'Platform development',
      stack: 'Efficiency · Automation · Growth',
      lede: 'Bespoke systems for the part of your operations off-the-shelf software does not cover.',
      items: [
        'Platforms built from scratch around the way you actually work',
        'Automation of manual workflows, so time goes to customers instead of re-keying data',
        'Modernising existing systems without stopping production',
        'Operations and further development after launch, so the system grows with you',
      ],
    },
    {
      title: 'Websites & CMS',
      stack: 'Visibility · Self-service · Low cost',
      lede: 'Fast websites that get found, cost next to nothing to run, and can be edited by your own people.',
      items: [
        'New sites with your identity at the centre, fast and accessible from day one',
        'Moving off heavy, expensive platforms to a setup with running costs close to zero',
        'An editing surface your own people can use without calling a developer',
        'SEO, accessibility, and design built in from the start, not bolted on afterwards',
      ],
    },
    {
      title: 'Operations & infrastructure',
      stack: 'Stability · Security · Overview',
      lede: 'Technical ownership of the foundation, so it is not something you have to think about.',
      items: [
        'Domain migrations without downtime, email included',
        'Email that lands in the inbox, and a domain no one else can abuse',
        'Users, access, and setup under control in your office platform',
        'Documentation, so knowledge does not live in one person\'s head',
      ],
    },
  ],
  links: {
    readMore: 'Read more about this service',
    cases: 'See projects',
  },
  specialties: {
    eyebrow: 'Read more',
    heading: 'Dig into what you need.',
    readMore: 'Read more',
  },
  process: {
    eyebrow: 'Not on the list?',
    heading: 'Ask anyway.',
    text: 'The list is not exhaustive. If you have a problem technology can solve, big or small, write to me. You get an honest answer, even if the answer is that you do not need me.',
  },
};

export const services: Record<Lang, DeepString<typeof da>> = { da, en };
