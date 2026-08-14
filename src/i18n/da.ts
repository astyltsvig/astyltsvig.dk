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
    getInTouch: 'Kontakt',
    seeMyWork: 'Se mine projekter',
    writeToMe: 'Skriv til mig',
  },
  sections: {
    selectedWork: 'Udvalgte projekter',
    whatIDo: 'Fokusområder',
    haveAProject: 'Har du et projekt?',
  },
  categories: {
    platform: 'Forretningsplatform',
    web: 'Hjemmeside',
    ownProduct: 'Eget produkt',
    operations: 'Drift & infrastruktur',
  },
  categorySections: {
    platform: {
      heading: 'Forretningsplatforme',
      description: 'Skræddersyede systemer — ERP, CRM og booking — bygget og driftet som kerneinfrastruktur for forretningen.',
    },
    web: {
      heading: 'Hjemmesider & web',
      description: 'Hurtige, tilgængelige websites for organisationer og events — fra design-implementering til DNS og drift.',
    },
    ownProduct: {
      heading: 'Egne produkter',
      description: 'Interne projekter i AStyltsvig Consulting — produkter jeg selv har fået idéen til, bygget og driver.',
    },
    operations: {
      heading: 'Drift & infrastruktur',
      description: 'Teknisk ejerskab og løbende administration — systemer, DNS og email-autentificering.',
    },
  },
  caseMeta: {
    category: 'Kategori',
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
  footer: {
    copyrightLine: 'AStyltsvig Consulting · CVR 36163771 · København, Danmark',
    contact: 'Kontakt',
    legal: 'Juridisk',
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
