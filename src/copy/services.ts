import type { DeepString, Lang } from '~/i18n/routes';

const da = {
  meta: {
    title: 'Ydelser — platformudvikling, hjemmesider og drift | AStyltsvig Consulting',
    description:
      'Platformudvikling i Laravel og Vue, statiske hjemmesider i Astro og teknisk drift af DNS, email og Google Workspace. Én ansvarlig fra arkitektur til daglig produktion.',
  },
  intro: {
    eyebrow: 'Ydelser',
    heading: 'Tre områder. Ét ansvar.',
    lede: 'Platformudvikling er kernen — hjemmesider og drift løses ved siden af, som løbende aftale eller fast estimat. Fælles for det hele: du taler med den, der bygger.',
  },
  services: [
    {
      title: 'Platformudvikling',
      stack: 'Laravel · Vue · MySQL · PostgreSQL',
      lede: 'Skræddersyede systemer til den drift, standardsoftware ikke dækker.',
      items: [
        'ERP-, booking- og administrationsplatforme bygget fra bunden — designet efter den faktiske forretning',
        'Videreudvikling af eksisterende kodebaser: oprydning, modernisering og nye features uden at bryde driften',
        'Arkitektur der holder i årevis: adgangsstyring, sporbarhed og automatiserede arbejdsgange',
        'Drift med i pakken — jeg bygger ikke og forsvinder; jeg bliver og holder systemet kørende',
      ],
    },
    {
      title: 'Hjemmesider & CMS',
      stack: 'Astro · Sveltia CMS · Cloudflare Pages',
      lede: 'Statiske sites der loader øjeblikkeligt og næsten ikke koster drift.',
      items: [
        'Nye sites bygget i Astro og deployeret på Cloudflare Pages — typisk gratis at hoste',
        'Migrering væk fra WordPress og tunge CMS-setups til Git-baseret indhold',
        'Redaktørflade med Sveltia CMS, så indholdet kan opdateres uden udvikler',
        'Design, tilgængelighed og SEO tænkt ind fra start — ikke som eftertanke',
      ],
    },
    {
      title: 'Drift & infrastruktur',
      stack: 'Cloudflare · Hetzner · SPF/DKIM/DMARC · Google Workspace',
      lede: 'Teknisk ejerskab af fundamentet, så det aldrig bliver dit problem.',
      items: [
        'DNS-administration og -migrationer uden nedetid — inklusive email-routing der ikke må afbrydes',
        'Email-autentificering (SPF, DKIM, DMARC), så jeres mails lander i indbakken og domænet ikke kan misbruges',
        'Google Workspace: opsætning, brugerstyring og oprydning',
        'Ét teknisk kontaktpunkt for organisationen — dokumenteret, så viden ikke bor i én persons hoved',
      ],
    },
  ],
  process: {
    eyebrow: 'Derudover',
    heading: 'Rådgivning og review.',
    text: 'Har du brug for et teknisk blik uden et byggeprojekt — arkitekturvalg, kodegennemgang eller en second opinion på et tilbud — tager jeg også korte rådgivningsopgaver. Samme princip: konkret, ærligt og uden salgstale.',
  },
} as const;

const en: DeepString<typeof da> = {
  meta: {
    title: 'Services — platform development, websites, and operations | AStyltsvig Consulting',
    description:
      'Platform development in Laravel and Vue, static websites in Astro, and technical operations covering DNS, email, and Google Workspace. One accountable person from architecture to daily production.',
  },
  intro: {
    eyebrow: 'Services',
    heading: 'Three areas. One responsibility.',
    lede: 'Platform development is the core — websites and operations are handled alongside it, as an ongoing agreement or a fixed estimate. Common to all of it: you talk to the person who builds.',
  },
  services: [
    {
      title: 'Platform development',
      stack: 'Laravel · Vue · MySQL · PostgreSQL',
      lede: 'Bespoke systems for the operations off-the-shelf software does not cover.',
      items: [
        'ERP, booking, and administration platforms built from scratch — designed around the actual business',
        'Further development of existing codebases: cleanup, modernisation, and new features without breaking production',
        'Architecture that lasts for years: access control, traceability, and automated workflows',
        'Operations included — I do not build and disappear; I stay and keep the system running',
      ],
    },
    {
      title: 'Websites & CMS',
      stack: 'Astro · Sveltia CMS · Cloudflare Pages',
      lede: 'Static sites that load instantly and cost close to nothing to run.',
      items: [
        'New sites built in Astro and deployed on Cloudflare Pages — typically free to host',
        'Migration away from WordPress and heavy CMS setups to Git-based content',
        'An editorial surface with Sveltia CMS, so content can be updated without a developer',
        'Design, accessibility, and SEO considered from the start — not as an afterthought',
      ],
    },
    {
      title: 'Operations & infrastructure',
      stack: 'Cloudflare · Hetzner · SPF/DKIM/DMARC · Google Workspace',
      lede: 'Technical ownership of the foundation, so it never becomes your problem.',
      items: [
        'DNS administration and zero-downtime migrations — including email routing that must not be interrupted',
        'Email authentication (SPF, DKIM, DMARC), so your mail lands in the inbox and your domain cannot be abused',
        'Google Workspace: setup, user management, and cleanup',
        'A single technical point of contact for the organisation — documented, so knowledge does not live in one person\'s head',
      ],
    },
  ],
  process: {
    eyebrow: 'Beyond that',
    heading: 'Advisory and review.',
    text: 'If you need a technical eye without a build project — architecture choices, code review, or a second opinion on a proposal — I also take on short advisory engagements. Same principle: concrete, honest, and free of sales talk.',
  },
};

export const services: Record<Lang, DeepString<typeof da>> = { da, en };
