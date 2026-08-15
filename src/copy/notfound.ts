import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  meta: {
    title: 'Siden findes ikke — AStyltsvig Consulting',
    description: 'Siden du leder efter, findes ikke.',
  },
  code: '404',
  heading: 'Siden findes ikke.',
  text: 'Adressen er forkert, eller siden er flyttet.',
  homeLink: 'Til forsiden',
} as const;

const en: DeepString<typeof da> = {
  meta: {
    title: 'Page not found — AStyltsvig Consulting',
    description: 'The page you are looking for does not exist.',
  },
  code: '404',
  heading: 'Page not found.',
  text: 'The address is wrong, or the page has moved.',
  homeLink: 'To the front page',
};

export const notfound: Record<Lang, DeepString<typeof da>> = { da, en };
