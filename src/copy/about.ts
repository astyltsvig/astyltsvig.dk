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
    lede: 'Jeg hedder Andreas Sørbye Styltsvig og er softwarearkitekt. Siden 2020 har jeg drevet AStyltsvig Consulting fra Vanløse i København.',
  },
  portraitAlt: 'Portræt af Andreas Sørbye Styltsvig',
  bio: [
    'Jeg bygger og drifter de systemer, en virksomhed ikke kan undvære. Jeg har ansvaret fra første skitse til daglig drift, så der aldrig er tvivl om, hvem der har bolden.',
    'De bedste løsninger opstår, når jeg kender forretningen lige så godt som koden. Derfor sætter jeg mig ind i arbejdsgangene, flaskehalsene og tallene, før jeg foreslår noget. Det er dér, det bliver tydeligt, hvad der skal automatiseres, og hvad der skal have lov at være, som det er.',
    'Jeg arbejder med få kunder over lang tid. Det betyder ærlige anbefalinger, også når den rigtige løsning er den billige, og systemer bygget til at blive passet i mange år. En stille drift uden overraskelser er noget af det, jeg er mest stolt af.',
    'Før jeg gik selvstændig, var jeg konsulent hos Prolike, hvor jeg som nyuddannet stod for at flytte Oticons byggesystemer fra Jenkins og SVN til Azure DevOps. I 2020 gik jeg selvstændig på fuld tid.',
    'Jeg bruger AI aktivt i arbejdet, og det siger jeg gerne højt. Arkitekturen og beslutningerne er mine, men værktøjerne gør, at én person i dag kan bygge og drive det, der før krævede et helt team.',
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
        text: 'Egne produkter i luften: Smartlinjen, MatematikKlar og Shows Calendar.',
      },
    ],
  },
  skills: {
    eyebrow: 'Kompetencer',
    heading: 'Værktøjskassen.',
    lede: 'Værktøjet følger opgaven. Det her er dem, jeg griber oftest.',
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
        title: 'I ejer det hele',
        text: 'Koden ligger i jeres repo, og sitet kører på jeres domæne. I er aldrig låst til mig eller til en bestemt leverandør.',
      },
      {
        title: 'Én ansvarlig',
        text: 'Ingen underleverandører og ingen mellemled. I taler med den, der bygger, i dag og om tre år.',
      },
      {
        title: 'Løbende aftaler',
        text: 'I stedet for fastpris. Vi bygger det, der giver mening for forretningen, og I kan stoppe samarbejdet når som helst.',
      },
      {
        title: 'Direkte linje',
        text: 'I skriver, jeg svarer. Ingen ticketsystemer og ingen omstilling.',
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
    lede: 'I am Andreas Sørbye Styltsvig, a software architect. Since 2020 I have run AStyltsvig Consulting from Vanløse in Copenhagen.',
  },
  portraitAlt: 'Portrait of Andreas Sørbye Styltsvig',
  bio: [
    'I build and run the systems a business cannot do without. I own the whole chain from the first sketch to daily production, so there is never any doubt about who has the ball.',
    'The best solutions come from knowing the business as well as the code. So I get into the workflows, the bottlenecks, and the numbers before I suggest anything. That is where it becomes clear what should be automated and what should be left alone.',
    'I work with few clients over a long time. That means honest recommendations, including when the right solution is the cheap one, and systems built to be looked after for years. Quiet operations without surprises is one of the things I am proudest of.',
    'Before going independent, I was a consultant at Prolike, where, fresh out of school, I led the move of Oticon\'s build systems from Jenkins and SVN to Azure DevOps. In 2020 I went independent full-time.',
    'I use AI actively in my work, and I am happy to say so. The architecture and the decisions are mine, but the tools mean one person today can build and run what used to take a whole team.',
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
        text: 'Own products live: Smartlinjen, MatematikKlar, and Shows Calendar.',
      },
    ],
  },
  skills: {
    eyebrow: 'Competencies',
    heading: 'The toolbox.',
    lede: 'The tool follows the task. These are the ones I reach for most.',
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
        text: 'No subcontractors and no middlemen. You talk to the person who builds, today and in three years.',
      },
      {
        title: 'Ongoing agreements',
        text: 'Instead of fixed price. We build what makes sense for the business, and you can end the engagement at any time.',
      },
      {
        title: 'A direct line',
        text: 'You write, I answer. No ticket systems and no switchboard.',
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
