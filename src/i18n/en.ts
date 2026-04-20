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
    getInTouch: 'Get in touch →',
    seeMyWork: 'See my work →',
    writeToMe: 'Write to me →',
  },
  sections: {
    selectedWork: 'Selected work',
    whatIDo: 'What I do',
    haveAProject: 'Have a project in mind?',
  },
  caseMeta: {
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
  form: {
    name: 'Name',
    email: 'Email',
    organisation: 'Organisation',
    message: 'Message',
    send: 'Send message',
    fallback: 'Form not loading? Email me directly at',
  },
  footer: {
    copyrightLine: 'AStyltsvig Consulting · CVR 36163771 · Copenhagen, Denmark',
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

export type Dict = typeof en;
