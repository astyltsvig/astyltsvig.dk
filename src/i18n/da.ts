import type { Dict } from './en';

export const da: Dict = {
  lang: 'da',
  nav: {
    home: 'Forside',
    about: 'Om',
    services: 'Ydelser',
    work: 'Projekter',
    contact: 'Kontakt',
  },
  cta: {
    readMore: 'Læs mere →',
    getInTouch: 'Kontakt →',
    seeMyWork: 'Se mine projekter →',
    writeToMe: 'Skriv til mig →',
  },
  sections: {
    selectedWork: 'Udvalgte projekter',
    whatIDo: 'Hvad jeg laver',
    haveAProject: 'Har du et projekt?',
  },
  caseMeta: {
    role: 'Rolle',
    period: 'Periode',
    stack: 'Stack',
    status: 'Status',
    background: 'Baggrund',
    brief: 'Opgave',
    approach: 'Løsning',
    outcome: 'Resultat',
  },
  status: {
    inDailyProduction: 'I daglig produktion',
    delivered: 'Leveret',
    ongoing: 'Løbende',
  },
  form: {
    name: 'Navn',
    email: 'Email',
    organisation: 'Organisation',
    message: 'Besked',
    send: 'Send besked',
    fallback: 'Virker formularen ikke? Skriv direkte til',
  },
  footer: {
    copyrightLine: 'AStyltsvig Consulting · CVR 36163771 · København, Danmark',
    theme: 'Tema',
    themeLight: 'Lys',
    themeDark: 'Mørk',
    skipToContent: 'Spring til indhold',
  },
  languageSwitch: {
    label: 'Sprog / Language',
    otherLabel: 'English',
    ariaLabel: 'Skift sprog til engelsk',
  },
} as const;
