import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  meta: {
    title: 'Projekter · platforme, hjemmesider og egne produkter | AStyltsvig Consulting',
    description:
      'Projekter fra AStyltsvig Consulting: forretningskritiske platforme der effektiviserer og automatiserer den daglige drift, hurtige hjemmesider og egne produkter. Alle bygget og driftet af én person.',
  },
  intro: {
    eyebrow: 'Projekter',
    heading: 'Det jeg har bygget, og det jeg stadig passer.',
    lede: 'Et udvalg af det, jeg har bygget og drifter. Flere kundeprojekter er fortrolige, så her viser jeg dem, der kan deles.',
  },
  caseCta: {
    heading: 'Et lignende projekt i tankerne?',
  },
} as const;

const en: DeepString<typeof da> = {
  meta: {
    title: 'Work · platforms, websites, and own products | AStyltsvig Consulting',
    description:
      'Projects from AStyltsvig Consulting: business-critical platforms that streamline and automate daily operations, fast websites, and own products. All built and operated by one person.',
  },
  intro: {
    eyebrow: 'Work',
    heading: 'What I have built, and what I still look after.',
    lede: 'A selection of what I have built and operate. Several client projects are confidential, so these are the ones I can share.',
  },
  caseCta: {
    heading: 'Have a similar project in mind?',
  },
};

export const work: Record<Lang, DeepString<typeof da>> = { da, en };
