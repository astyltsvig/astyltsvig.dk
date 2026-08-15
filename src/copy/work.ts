import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  meta: {
    title: 'Projekter — platforme, hjemmesider og egne produkter | AStyltsvig Consulting',
    description:
      'Projekter fra AStyltsvig Consulting: forretningskritiske platforme i daglig drift, hurtige hjemmesider og egne produkter — alle bygget og driftet af én person.',
  },
  intro: {
    eyebrow: 'Projekter',
    heading: 'Alle projekter. Ét gennemgående ansvar.',
    lede: 'Et udvalg af det, jeg har bygget og drifter. Flere kundeprojekter er ikke offentlige — de her kan deles.',
  },
  caseCta: {
    heading: 'Et lignende projekt i tankerne?',
  },
} as const;

const en: DeepString<typeof da> = {
  meta: {
    title: 'Work — platforms, websites, and own products | AStyltsvig Consulting',
    description:
      'Projects from AStyltsvig Consulting: business-critical platforms in daily production, fast websites, and own products — all built and operated by one person.',
  },
  intro: {
    eyebrow: 'Work',
    heading: 'Every project. One continuous responsibility.',
    lede: 'A selection of what I have built and operate. Several client projects are not public — these can be shared.',
  },
  caseCta: {
    heading: 'Have a similar project in mind?',
  },
};

export const work: Record<Lang, DeepString<typeof da>> = { da, en };
