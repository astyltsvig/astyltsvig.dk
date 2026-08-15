import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  meta: {
    title: 'Ydelser — forretningsudvikling med teknologi | AStyltsvig Consulting',
    description:
      'Platformudvikling, hjemmesider og teknisk drift med ét fokus: at udvikle din forretning med teknologi. Én ansvarlig fra idé til daglig drift.',
  },
  intro: {
    eyebrow: 'Ydelser',
    heading: 'Forretning først. Teknologi som middel.',
    lede: 'Mit fokus som konsulent er at udvikle din forretning med teknologi — ikke at sælge teknologi for teknologiens skyld. Platformudvikling er kernen; hjemmesider og drift løses ved siden af. Fælles for det hele: du taler med den, der bygger.',
  },
  services: [
    {
      title: 'Platformudvikling',
      stack: 'Effektivisering · Automatisering · Vækst',
      lede: 'Skræddersyede systemer til den drift, standardsoftware ikke dækker.',
      items: [
        'Forretningskritiske platforme bygget fra bunden — designet efter den måde, jeres forretning faktisk arbejder på',
        'Automatisering af manuelle arbejdsgange, så tiden går til forretning i stedet for genindtastning',
        'Videreudvikling af eksisterende systemer: oprydning, modernisering og nye muligheder uden at bryde driften',
        'Drift med i pakken — jeg bygger ikke og forsvinder; jeg bliver og holder systemet kørende',
      ],
    },
    {
      title: 'Hjemmesider & CMS',
      stack: 'Synlighed · Selvbetjening · Lave omkostninger',
      lede: 'Hjemmesider der loader øjeblikkeligt, er næsten gratis i drift — og kan opdateres af jer selv.',
      items: [
        'Nye sites med jeres identitet i centrum — hurtige, tilgængelige og søgeoptimerede fra første dag',
        'Migrering væk fra tunge og dyre systemer til en løsning med driftomkostninger tæt på nul',
        'En redigeringsflade jeres egne folk kan bruge — indholdet opdateres uden en udvikler i røret',
        'Design, tilgængelighed og SEO tænkt ind fra start — ikke som eftertanke',
      ],
    },
    {
      title: 'Drift & infrastruktur',
      stack: 'Stabilitet · Sikkerhed · Ro i maven',
      lede: 'Teknisk ejerskab af fundamentet, så det aldrig bliver jeres problem.',
      items: [
        'Domæner og flytninger uden nedetid — inklusive email, der ikke må afbrydes',
        'Email der når frem i indbakken, og et domæne der ikke kan misbruges af andre',
        'Styr på brugere, adgange og opsætning i jeres kontorplatform',
        'Ét teknisk kontaktpunkt for organisationen — dokumenteret, så viden ikke bor i én persons hoved',
      ],
    },
  ],
  process: {
    eyebrow: 'Derudover',
    heading: 'Rådgivning og review.',
    text: 'Har du brug for et teknisk blik uden et byggeprojekt — retningsvalg, gennemgang af en løsning eller en second opinion på et tilbud — tager jeg også korte rådgivningsopgaver. Samme princip: konkret, ærligt og uden salgstale.',
  },
} as const;

const en: DeepString<typeof da> = {
  meta: {
    title: 'Services — growing businesses with technology | AStyltsvig Consulting',
    description:
      'Platform development, websites, and technical operations with one focus: growing your business with technology. One accountable person from idea to daily production.',
  },
  intro: {
    eyebrow: 'Services',
    heading: 'Business first. Technology as the means.',
    lede: 'My focus as a consultant is growing your business with technology — not selling technology for its own sake. Platform development is the core; websites and operations are handled alongside it. Common to all of it: you talk to the person who builds.',
  },
  services: [
    {
      title: 'Platform development',
      stack: 'Efficiency · Automation · Growth',
      lede: 'Bespoke systems for the operations off-the-shelf software does not cover.',
      items: [
        'Business-critical platforms built from scratch — designed around the way your business actually works',
        'Automation of manual workflows, so time goes to business instead of re-keying data',
        'Further development of existing systems: cleanup, modernisation, and new capabilities without breaking production',
        'Operations included — I do not build and disappear; I stay and keep the system running',
      ],
    },
    {
      title: 'Websites & CMS',
      stack: 'Visibility · Self-service · Low cost',
      lede: 'Websites that load instantly, cost next to nothing to run — and can be updated by your own people.',
      items: [
        'New sites with your identity at the centre — fast, accessible, and search-optimised from day one',
        'Migration away from heavy, expensive systems to a solution with running costs close to zero',
        'An editing surface your own people can use — content updated without a developer on the line',
        'Design, accessibility, and SEO considered from the start — not as an afterthought',
      ],
    },
    {
      title: 'Operations & infrastructure',
      stack: 'Stability · Security · Peace of mind',
      lede: 'Technical ownership of the foundation, so it never becomes your problem.',
      items: [
        'Domains and migrations without downtime — including email that must not be interrupted',
        'Email that reaches the inbox, and a domain no one else can abuse',
        'Users, access, and setup under control in your office platform',
        'A single technical point of contact for the organisation — documented, so knowledge does not live in one person\'s head',
      ],
    },
  ],
  process: {
    eyebrow: 'Beyond that',
    heading: 'Advisory and review.',
    text: 'If you need a technical eye without a build project — direction, a review of a solution, or a second opinion on a proposal — I also take on short advisory engagements. Same principle: concrete, honest, and free of sales talk.',
  },
};

export const services: Record<Lang, DeepString<typeof da>> = { da, en };
