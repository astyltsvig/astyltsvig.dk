import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  meta: {
    title: 'Om Andreas Sørbye Styltsvig | AStyltsvig Consulting',
    description:
      'Softwarearkitekt og IT-konsulent i København. Professionsbachelor fra Cphbusiness, fuldtidsselvstændig siden 2020 med ansvar for platforme i daglig produktion.',
  },
  intro: {
    eyebrow: 'Om',
    heading: 'Arkitektur, kode og drift samlet hos én person.',
    lede: 'Jeg hedder Andreas Sørbye Styltsvig. Jeg driver AStyltsvig Consulting fra Vanløse i København og har været fuldtidsselvstændig siden 2020.',
  },
  portraitAlt: 'Portræt af Andreas Sørbye Styltsvig',
  bio: [
    'Jeg arbejder med de systemer, en virksomhed står og falder med. Jeg tager ansvaret for hele kæden fra idé til daglig drift, så der aldrig er tvivl om, hvem der har bolden. Det ansvar trives jeg med, og det er en stor del af grunden til, at jeg arbejder, som jeg gør.',
    'Det, der driver mig, er at komme helt ind i mine kunders forretning. Jeg vil kende rutinerne, flaskehalsene og tallene, for det er dér, jeg kan se, hvor teknologien gør størst gavn. Målet er altid det samme: at være en, kunden vokser med over mange år.',
    'Min tilgang er enkel: få ting, gjort ordentligt, over lang tid. Jeg vil hellere have en håndfuld kunder, der bliver i ti år, end halvtreds der kommer og går. Derfor får du ærlige anbefalinger, også når den rigtige løsning er den billige, og systemer der er bygget til at blive vedligeholdt i mange år. Rolig, forudsigelig drift er i mine øjne noget af det fineste i faget.',
    'Vejen hertil gik gennem en professionsbachelor i softwareudvikling og et konsulentjob, hvor jeg tidligt fik ansvaret for en stor infrastrukturmigration hos Oticon. Da chancen for at stå på egne ben kom i 2020, greb jeg den. Siden har jeg bygget min praksis op omkring tætte, langvarige kundeforhold, hvor jeg kender forretningen lige så godt som koden.',
    'Jeg bruger AI som en naturlig del af arbejdet. Beslutningerne og arkitekturen er mine, men tempoet er nyt. Det fortæller jeg åbent om, fordi ærlighed om metoden hører med, og fordi det forklarer meget af, hvad én person kan nå at bygge og drive.',
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
        year: '2019 til 2020',
        text: 'Konsulent hos Prolike ApS, udstationeret hos Oticon med ansvar for migrationen fra on-prem Jenkins og SVN til Azure DevOps med moderne CI/CD og Git-baserede workflows.',
      },
      {
        year: '2020',
        text: 'AStyltsvig Consulting grundlagt. Fuldtidsselvstændig med fokus på få, langvarige kunderelationer.',
      },
      {
        year: '2021 til nu',
        text: 'Faste platformengagementer i daglig produktion inden for forsikring og pension, ERP og international booking. Alle bygget og driftet solo.',
      },
      {
        year: '2026',
        text: 'Egne produkter lanceret: Smartlinjen, MatematikKlar og Shows Calendar.',
      },
    ],
  },
  skills: {
    eyebrow: 'Kompetencer',
    heading: 'Værktøjskassen.',
    lede: 'Teknologierne skifter med opgaven. Det her er dem, jeg griber oftest.',
    items: [
      'Laravel', 'Vue', 'TypeScript', 'PHP', 'MySQL', 'PostgreSQL',
      'Astro', 'Next.js', 'Firebase', 'Supabase',
      'Cloudflare', 'Hetzner', 'Google Workspace',
      'DNS · SPF · DKIM · DMARC', 'CI/CD & Git-workflows', 'Sveltia CMS',
    ],
  },
  principles: {
    eyebrow: 'Arbejdsform',
    heading: 'Sådan arbejder jeg.',
    items: [
      {
        title: 'Du ejer alt',
        text: 'Koden ligger i dit repo, og sitet kører på dit domæne. Du er aldrig låst til mig eller til en bestemt leverandør.',
      },
      {
        title: 'Én ansvarlig',
        text: 'Ingen underleverandører eller mellemled. Du taler med den, der bygger, både i dag og om tre år.',
      },
      {
        title: 'Løbende aftaler',
        text: 'Frem for fastpris. Jeg bygger det, der er rigtigt for forretningen, og samarbejdet kan stoppes når som helst.',
      },
      {
        title: 'Direkte linje',
        text: 'Du skriver, jeg svarer. Ingen ticketsystemer og ingen omstilling, bare en direkte linje til den, der bygger.',
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
    title: 'About Andreas Sørbye Styltsvig | AStyltsvig Consulting',
    description:
      'Software architect and IT consultant in Copenhagen. BSc in software development from Cphbusiness, independent full-time since 2020, responsible for platforms in daily production.',
  },
  intro: {
    eyebrow: 'About',
    heading: 'Architecture, code, and operations in one pair of hands.',
    lede: 'I am Andreas Sørbye Styltsvig. I run AStyltsvig Consulting from Vanløse in Copenhagen and have been independent full-time since 2020.',
  },
  portraitAlt: 'Portrait of Andreas Sørbye Styltsvig',
  bio: [
    'I work with the systems a business stands or falls with. I take responsibility for the whole chain from idea to daily operations, so there is never any doubt about who owns the problem. I genuinely enjoy that responsibility, and it is a big part of why I work the way I do.',
    'What drives me is getting deep into my clients\' business. I want to know the routines, the bottlenecks, and the numbers, because that is where I can see where technology helps the most. The goal is always the same: to be someone the client grows with over many years.',
    'My approach is simple: few things, done properly, over a long time. I would rather have a handful of clients who stay for ten years than fifty who come and go. So you get honest recommendations, including when the right solution is the cheap one, and systems built to be maintained for many years. Calm, predictable operations is, to my mind, one of the finest parts of this craft.',
    'The road here went through a BSc in software development and a consulting job where I was trusted early with a major infrastructure migration at Oticon. When the chance to stand on my own came in 2020, I took it. Since then I have built my practice around close, long-term client relationships where I know the business as well as the code.',
    'I use AI as a natural part of my work. The decisions and the architecture are mine, but the pace is new. I am open about it because honesty about the method belongs in the work, and because it explains a lot of what one person can manage to build and operate.',
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
        year: '2019 to 2020',
        text: 'Consultant at Prolike ApS, stationed at Oticon with responsibility for migrating from on-prem Jenkins and SVN to Azure DevOps with modern CI/CD and Git-based workflows.',
      },
      {
        year: '2020',
        text: 'AStyltsvig Consulting founded. Independent full-time, focused on few, long-term client relationships.',
      },
      {
        year: '2021 to now',
        text: 'Long-running platform engagements in daily production within insurance and pensions, ERP, and international booking. All built and operated solo.',
      },
      {
        year: '2026',
        text: 'Own products launched: Smartlinjen, MatematikKlar, and Shows Calendar.',
      },
    ],
  },
  skills: {
    eyebrow: 'Competencies',
    heading: 'The toolbox.',
    lede: 'The technologies change with the task. These are the ones I reach for most.',
    items: [
      'Laravel', 'Vue', 'TypeScript', 'PHP', 'MySQL', 'PostgreSQL',
      'Astro', 'Next.js', 'Firebase', 'Supabase',
      'Cloudflare', 'Hetzner', 'Google Workspace',
      'DNS · SPF · DKIM · DMARC', 'CI/CD & Git workflows', 'Sveltia CMS',
    ],
  },
  principles: {
    eyebrow: 'Way of working',
    heading: 'How I work.',
    items: [
      {
        title: 'You own everything',
        text: 'The code lives in your repo, and the site runs on your domain. You are never locked to me or to any particular vendor.',
      },
      {
        title: 'One accountable person',
        text: 'No subcontractors or intermediaries. You talk to the person who builds, both today and in three years.',
      },
      {
        title: 'Ongoing agreements',
        text: 'Rather than fixed price. I build what is right for the business, and the engagement can stop at any time.',
      },
      {
        title: 'A direct line',
        text: 'You write, I answer. No ticket systems and no switchboard, just a direct line to the person who builds.',
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
