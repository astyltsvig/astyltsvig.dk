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
    lede: 'Kundeplatforme, hjemmesider og egne produkter. En del kundearbejde er fortroligt, så her er det, der kan vises frem.',
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
    lede: 'Client platforms, websites, and own products. Some client work is confidential, so these are the ones I can show.',
  },
  caseCta: {
    heading: 'Have a similar project in mind?',
  },
};

export const work: Record<Lang, DeepString<typeof da>> = { da, en };
