import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  meta: {
    title: 'Kontakt — AStyltsvig Consulting, København',
    description:
      'Skriv til hello@astyltsvig.dk med en kort beskrivelse af opgaven. AStyltsvig Consulting, CVR 36163771, Vanløse, København.',
  },
  intro: {
    eyebrow: 'Kontakt',
    heading: 'Én mail er nok.',
    lede: 'Ingen formularer, ingen ticketsystemer. Skriv direkte — så tager vi den derfra.',
  },
  email: 'hello@astyltsvig.dk',
  emailCta: 'Send en email',
  guide: {
    eyebrow: 'En god første mail',
    items: [
      'Hvad opgaven går ud på — i to-tre sætninger er fint',
      'Hvornår den skal være leveret, hvis der er en deadline',
      'Hvilken sammenhæng den indgår i: eksisterende system, nyt projekt eller drift',
    ],
  },
  response: 'Ingen autosvar, ingen kø — mailen lander hos den, der bygger.',
  facts: {
    eyebrow: 'Virksomhed',
    items: [
      { label: 'Virksomhed', value: 'AStyltsvig Consulting' },
      { label: 'CVR', value: '36163771' },
      { label: 'Adresse', value: 'Vanløse, København' },
      { label: 'GitHub', value: 'github.com/astyltsvig' },
      { label: 'LinkedIn', value: 'linkedin.com/in/astyltsvig' },
    ],
  },
} as const;

const en: DeepString<typeof da> = {
  meta: {
    title: 'Contact — AStyltsvig Consulting, Copenhagen',
    description:
      'Write to hello@astyltsvig.dk with a short description of the task. AStyltsvig Consulting, CVR 36163771, Vanløse, Copenhagen.',
  },
  intro: {
    eyebrow: 'Contact',
    heading: 'One email is enough.',
    lede: 'No forms, no ticket systems. Write directly — and we take it from there.',
  },
  email: 'hello@astyltsvig.dk',
  emailCta: 'Send an email',
  guide: {
    eyebrow: 'A good first email',
    items: [
      'What the task is about — two or three sentences is fine',
      'When it needs to be delivered, if there is a deadline',
      'The context it fits into: an existing system, a new project, or operations',
    ],
  },
  response: 'No autoresponders, no queue — the mail lands with the person who builds.',
  facts: {
    eyebrow: 'Business',
    items: [
      { label: 'Business', value: 'AStyltsvig Consulting' },
      { label: 'CVR', value: '36163771' },
      { label: 'Address', value: 'Vanløse, Copenhagen' },
      { label: 'GitHub', value: 'github.com/astyltsvig' },
      { label: 'LinkedIn', value: 'linkedin.com/in/astyltsvig' },
    ],
  },
};

export const contact: Record<Lang, DeepString<typeof da>> = { da, en };
