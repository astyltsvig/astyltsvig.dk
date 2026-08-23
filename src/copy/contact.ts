import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  meta: {
    title: 'Kontakt · AStyltsvig Consulting, København',
    description:
      'Skriv til hello@astyltsvig.dk med en kort beskrivelse af opgaven. AStyltsvig Consulting, CVR 36163771, Vanløse, København.',
  },
  intro: {
    eyebrow: 'Kontakt',
    heading: 'Én mail er nok.',
    lede: 'Ingen formularer og ingen ticketsystemer. Skriv direkte, så tager vi den derfra.',
  },
  direct: {
    eyebrow: 'Direkte linje',
    email: 'hello@astyltsvig.dk',
    note: 'Ingen autosvar og ingen kø. Mailen lander hos den, der bygger.',
    copy: 'Kopiér adressen',
    copied: 'Kopieret ✓',
    meta: ['Vanløse, København', 'Dansk & engelsk', 'CVR 36163771'],
  },
  guide: {
    eyebrow: 'En god første mail',
    heading: 'Tre ting, der får os hurtigt i gang.',
    items: [
      {
        title: 'Opgaven',
        text: 'Hvad den går ud på. To eller tre sætninger er fint.',
      },
      {
        title: 'Tidshorisonten',
        text: 'Hvornår den skal være leveret, hvis der er en deadline.',
      },
      {
        title: 'Sammenhængen',
        text: 'Hvad løsningen skal spille sammen med: et eksisterende system, et nyt projekt eller den daglige drift.',
      },
    ],
  },
  facts: {
    eyebrow: 'Virksomhed',
    items: [
      { label: 'Indehaver', value: 'Andreas Sørbye Styltsvig' },
      { label: 'CVR', value: '36163771' },
      { label: 'Adresse', value: 'Vanløse, København' },
      { label: 'GitHub', value: 'github.com/astyltsvig' },
      { label: 'LinkedIn', value: 'linkedin.com/in/astyltsvig' },
    ],
  },
} as const;

const en: DeepString<typeof da> = {
  meta: {
    title: 'Contact · AStyltsvig Consulting, Copenhagen',
    description:
      'Write to hello@astyltsvig.dk with a short description of the task. AStyltsvig Consulting, CVR 36163771, Vanløse, Copenhagen.',
  },
  intro: {
    eyebrow: 'Contact',
    heading: 'One email is enough.',
    lede: 'No forms and no ticket systems. Write directly, and we take it from there.',
  },
  direct: {
    eyebrow: 'Direct line',
    email: 'hello@astyltsvig.dk',
    note: 'No autoresponders and no queue. The mail lands with the person who builds.',
    copy: 'Copy the address',
    copied: 'Copied ✓',
    meta: ['Vanløse, Copenhagen', 'Danish & English', 'CVR 36163771'],
  },
  guide: {
    eyebrow: 'A good first email',
    heading: 'Three things that get us moving fast.',
    items: [
      {
        title: 'The task',
        text: 'What it is about. Two or three sentences is fine.',
      },
      {
        title: 'The timeline',
        text: 'When it needs to be delivered, if there is a deadline.',
      },
      {
        title: 'The context',
        text: 'What the solution has to work with: an existing system, a new project, or daily operations.',
      },
    ],
  },
  facts: {
    eyebrow: 'Business',
    items: [
      { label: 'Owner', value: 'Andreas Sørbye Styltsvig' },
      { label: 'CVR', value: '36163771' },
      { label: 'Address', value: 'Vanløse, Copenhagen' },
      { label: 'GitHub', value: 'github.com/astyltsvig' },
      { label: 'LinkedIn', value: 'linkedin.com/in/astyltsvig' },
    ],
  },
};

export const contact: Record<Lang, DeepString<typeof da>> = { da, en };
