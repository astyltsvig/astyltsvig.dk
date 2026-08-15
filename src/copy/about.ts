import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  meta: {
    title: 'Om — Andreas Sørbye Styltsvig | AStyltsvig Consulting',
    description:
      'Softwarearkitekt og IT-konsulent i København. Professionsbachelor fra Cphbusiness, fuldtidsselvstændig siden 2020 — med ansvar for platforme i daglig produktion.',
  },
  intro: {
    eyebrow: 'Om',
    heading: 'Arkitektur, kode og drift — samlet hos én person.',
    lede: 'Jeg hedder Andreas Sørbye Styltsvig. Jeg driver AStyltsvig Consulting fra Vanløse i København og har været fuldtidsselvstændig siden 2020.',
  },
  portraitAlt: 'Portræt af Andreas Sørbye Styltsvig',
  bio: [
    'Mit arbejde er de systemer, en virksomhed står og falder med. Jeg tager ansvaret for hele kæden — fra idé til daglig drift — så der aldrig er tvivl om, hvem der har bolden. Det ansvar er ikke en byrde for mig; det er selve grunden til, at jeg arbejder, som jeg gør.',
    'Min filosofi er enkel: få ting, gjort ordentligt, over lang tid. Jeg vil hellere have en håndfuld kunder, der bliver i ti år, end halvtreds der kommer og går. Det betyder ærlige anbefalinger — også når den rigtige løsning er den billige — og systemer bygget til at blive vedligeholdt, ikke bare leveret. Rolig, forudsigelig drift er i mine øjne den fineste disciplin i faget.',
    'Vejen hertil gik gennem en professionsbachelor i softwareudvikling og et konsulentjob, hvor jeg tidligt fik ansvaret for en stor infrastrukturmigration hos Oticon. Da chancen for at stå på egne ben kom i 2020, greb jeg den — og har siden bygget min praksis op om tætte, langvarige kundeforhold, hvor jeg kender forretningen lige så godt som koden.',
    'Jeg arbejder åbent med AI som en integreret del af hverdagen: beslutningerne og arkitekturen er mine, men tempoet er nyt. Jeg er transparent om det, fordi ærlighed om metoden hører med — og fordi det er en stor del af forklaringen på, hvad én person kan bygge og drive.',
  ],
  path: {
    eyebrow: 'Forløb',
    heading: 'Fra konsulenthus til egen praksis.',
    steps: [
      {
        year: '2019',
        text: 'Professionsbachelor i softwareudvikling fra Cphbusiness Lyngby.',
      },
      {
        year: '2019 – 2020',
        text: 'Konsulent hos Prolike ApS, udstationeret hos Oticon — ansvarlig for migration fra on-prem Jenkins og SVN til Azure DevOps med moderne CI/CD og Git-baserede workflows.',
      },
      {
        year: '2020',
        text: 'AStyltsvig Consulting grundlagt. Fuldtidsselvstændig med fokus på få, langvarige kunderelationer.',
      },
      {
        year: '2021 – nu',
        text: 'Faste platformengagementer i daglig produktion — forsikring og pension, ERP og international booking — samtlige bygget og driftet solo.',
      },
      {
        year: '2026',
        text: 'Egne produkter lanceret: Smartlinjen, MatematikKlar og Shows Calendar.',
      },
    ],
  },
  principles: {
    eyebrow: 'Arbejdsform',
    heading: 'Sådan arbejder jeg.',
    items: [
      {
        title: 'Du ejer alt',
        text: 'Kode i dit repo, sitet på dit domæne. Ingen leverandørlås, ingen gidseltagning.',
      },
      {
        title: 'Én ansvarlig',
        text: 'Ingen underleverandører eller mellemled. Du taler med den, der bygger — i dag og om tre år.',
      },
      {
        title: 'Løbende aftaler',
        text: 'Frem for fastpris. Jeg bygger det rigtige, ikke kun det aftalte — og samarbejdet kan stoppes når som helst.',
      },
      {
        title: 'Direkte linje',
        text: 'Mail, telefon eller Slack. Ingen ticketsystemer imellem os — og svar inden for to hverdage.',
      },
    ],
  },
  facts: {
    eyebrow: 'Fakta',
    items: [
      { label: 'Virksomhed', value: 'AStyltsvig Consulting' },
      { label: 'CVR', value: '36163771' },
      { label: 'Grundlagt', value: '2020' },
      { label: 'Adresse', value: 'Vanløse, København' },
      { label: 'Email', value: 'hello@astyltsvig.dk' },
      { label: 'GitHub', value: 'github.com/astyltsvig' },
      { label: 'LinkedIn', value: 'linkedin.com/in/astyltsvig' },
    ],
  },
} as const;

const en: DeepString<typeof da> = {
  meta: {
    title: 'About — Andreas Sørbye Styltsvig | AStyltsvig Consulting',
    description:
      'Software architect and IT consultant in Copenhagen. BSc in software development from Cphbusiness, independent full-time since 2020 — responsible for platforms in daily production.',
  },
  intro: {
    eyebrow: 'About',
    heading: 'Architecture, code, and operations — in one pair of hands.',
    lede: 'I am Andreas Sørbye Styltsvig. I run AStyltsvig Consulting from Vanløse in Copenhagen and have been independent full-time since 2020.',
  },
  portraitAlt: 'Portrait of Andreas Sørbye Styltsvig',
  bio: [
    'My work is the systems a business stands or falls with. I take responsibility for the whole chain — from idea to daily operations — so there is never any doubt about who owns the problem. That responsibility is not a burden to me; it is the very reason I work the way I do.',
    'My philosophy is simple: few things, done properly, over a long time. I would rather have a handful of clients who stay for ten years than fifty who come and go. That means honest recommendations — including when the right solution is the cheap one — and systems built to be maintained, not just delivered. Calm, predictable operations is, to my mind, the finest discipline in this craft.',
    'The road here went through a BSc in software development and a consulting job where I was trusted early with a major infrastructure migration at Oticon. When the chance to stand on my own came in 2020, I took it — and have since built my practice around close, long-term client relationships where I know the business as well as the code.',
    'I work openly with AI as an integrated part of my day: the decisions and the architecture are mine, but the pace is new. I am transparent about it because honesty about the method belongs in the work — and because it is a large part of how one person can build and operate this much.',
  ],
  path: {
    eyebrow: 'Path',
    heading: 'From consultancy to independent practice.',
    steps: [
      {
        year: '2019',
        text: 'BSc in software development from Cphbusiness Lyngby.',
      },
      {
        year: '2019 – 2020',
        text: 'Consultant at Prolike ApS, stationed at Oticon — responsible for migrating from on-prem Jenkins and SVN to Azure DevOps with modern CI/CD and Git-based workflows.',
      },
      {
        year: '2020',
        text: 'AStyltsvig Consulting founded. Independent full-time, focused on few, long-term client relationships.',
      },
      {
        year: '2021 – now',
        text: 'Long-running platform engagements in daily production — insurance and pensions, ERP, and international booking — all built and operated solo.',
      },
      {
        year: '2026',
        text: 'Own products launched: Smartlinjen, MatematikKlar, and Shows Calendar.',
      },
    ],
  },
  principles: {
    eyebrow: 'Way of working',
    heading: 'How I work.',
    items: [
      {
        title: 'You own everything',
        text: 'Code in your repo, the site on your domain. No vendor lock-in, no hostage situations.',
      },
      {
        title: 'One accountable person',
        text: 'No subcontractors or intermediaries. You talk to the person who builds — today and in three years.',
      },
      {
        title: 'Ongoing agreements',
        text: 'Rather than fixed price. I build what is right, not just what was specified — and the engagement can stop at any time.',
      },
      {
        title: 'A direct line',
        text: 'Email, phone, or Slack. No ticket systems between us — and a reply within two business days.',
      },
    ],
  },
  facts: {
    eyebrow: 'Facts',
    items: [
      { label: 'Business', value: 'AStyltsvig Consulting' },
      { label: 'CVR', value: '36163771' },
      { label: 'Founded', value: '2020' },
      { label: 'Address', value: 'Vanløse, Copenhagen' },
      { label: 'Email', value: 'hello@astyltsvig.dk' },
      { label: 'GitHub', value: 'github.com/astyltsvig' },
      { label: 'LinkedIn', value: 'linkedin.com/in/astyltsvig' },
    ],
  },
};

export const about: Record<Lang, DeepString<typeof da>> = { da, en };
