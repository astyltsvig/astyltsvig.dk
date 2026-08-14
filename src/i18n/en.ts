export const en = {
  lang: 'en',
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    work: 'Work',
    contact: 'Contact',
  },
  cta: {
    readMore: 'Read more →',
    getInTouch: 'Get in touch',
    seeMyWork: 'See my work',
    writeToMe: 'Write to me',
  },
  sections: {
    selectedWork: 'Selected work',
    whatIDo: 'Focus areas',
    haveAProject: 'Have a project in mind?',
  },
  categories: {
    platform: 'Business platform',
    web: 'Website',
    ownProduct: 'Own product',
    operations: 'Operations & infrastructure',
  },
  categorySections: {
    platform: {
      heading: 'Business platforms',
      description: 'Custom systems — ERP, CRM, and booking — built and operated as core infrastructure for the business.',
    },
    web: {
      heading: 'Websites & web',
      description: 'Fast, accessible websites for organisations and events — from design implementation to DNS and operations.',
    },
    ownProduct: {
      heading: 'Own products',
      description: 'Internal projects at AStyltsvig Consulting — products I have conceived, built, and run myself.',
    },
    operations: {
      heading: 'Operations & infrastructure',
      description: 'Technical ownership and ongoing administration — systems, DNS, and email authentication.',
    },
  },
  caseMeta: {
    category: 'Category',
    role: 'Role',
    period: 'Period',
    stack: 'Stack',
    status: 'Status',
    background: 'Background',
    brief: 'Brief',
    approach: 'Approach',
    outcome: 'Outcome',
  },
  status: {
    inDailyProduction: 'In daily production',
    delivered: 'Delivered',
    ongoing: 'Ongoing',
  },
  footer: {
    copyrightLine: 'AStyltsvig Consulting · CVR 36163771 · Copenhagen, Denmark',
    contact: 'Contact',
    legal: 'Legal',
    theme: 'Theme',
    themeLight: 'Light',
    themeDark: 'Dark',
    skipToContent: 'Skip to content',
  },
  languageSwitch: {
    label: 'Sprog / Language',
    otherLabel: 'Dansk',
    ariaLabel: 'Switch language to Danish',
  },
} as const;

type DeepString<T> = { [K in keyof T]: T[K] extends string ? string : DeepString<T[K]> };
export type Dict = DeepString<typeof en>;
