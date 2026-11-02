import type { DeepString, Lang, LandingKey } from '~/i18n/routes';

/*
 * Service landing pages. Each page targets one kind of search
 * (see Search Console: "søgemaskineoptimerede hjemmesider", "custom software development denmark" …),
 * so the title, h1 and first paragraph use the words people actually type.
 * `cases` are case slugs (identical across locales) shown as proof on the page.
 */

const websitesDa = {
  meta: {
    title: 'Søgemaskineoptimerede hjemmesider | AStyltsvig Consulting',
    description:
      'Hurtige, søgemaskineoptimerede hjemmesider til virksomheder og foreninger. Driftsudgifter tæt på nul, og I kan selv redigere indholdet. Softwarearkitekt i København.',
  },
  serviceName: 'Hjemmesider og SEO',
  intro: {
    eyebrow: 'Ydelser · Hjemmesider',
    heading: 'Hjemmesider, der bliver fundet på Google.',
    lede: 'En hjemmeside skal kunne findes, loade på et øjeblik og være let at holde opdateret. Jeg bygger søgemaskineoptimerede hjemmesider med SEO, hastighed og tilgængelighed tænkt ind fra starten, ikke klistret på bagefter.',
  },
  benefits: {
    eyebrow: 'Det får I',
    heading: 'En hjemmeside, der arbejder for jer.',
    items: [
      {
        title: 'Bliver fundet',
        text: 'Teknisk SEO fra dag ét: rene URL\'er, titler og beskrivelser, der matcher det, jeres kunder søger efter, sitemap, structured data og korrekt sprogopmærkning.',
      },
      {
        title: 'Hurtig overalt',
        text: 'Statiske sider leveret fra et globalt netværk loader på et øjeblik, også på mobilen. Det mærker både besøgende og Google.',
      },
      {
        title: 'Næsten gratis i drift',
        text: 'Ingen tunge servere eller dyre licenser. Hosting på Cloudflare koster typisk ingenting eller meget lidt om måneden.',
      },
      {
        title: 'I redigerer selv',
        text: 'En enkel redaktørflade, så jeres egne folk kan opdatere tekster, billeder og nyheder uden at ringe til en udvikler.',
      },
    ],
  },
  details: {
    eyebrow: 'Indhold',
    heading: 'Det er med i en ny hjemmeside.',
    items: [
      'Design med jeres identitet i centrum, på dansk, engelsk eller flere sprog',
      'Søgeordsanalyse og sidetitler, der matcher det, jeres kunder skriver i Google',
      'Opsætning af Google Search Console og sitemap, så I kan følge med i synligheden',
      'Tilgængelighed efter WCAG, så alle kan bruge siden',
      'Flytning af domæne og DNS uden nedetid, også på email',
      'Delingsbilleder, så siden ser rigtig ud på LinkedIn og Facebook',
    ],
  },
  cases: {
    eyebrow: 'Eksempler',
    heading: 'Hjemmesider, jeg har bygget.',
    slugs: ['ddl-tegnsprogspakken', 'festival-sans-pression', 'df1866'],
  },
  faq: {
    eyebrow: 'Spørgsmål',
    heading: 'Det bliver jeg ofte spurgt om.',
    items: [
      {
        q: 'Hvad betyder det, at en hjemmeside er søgemaskineoptimeret?',
        a: 'At Google let kan læse og forstå den: hurtige sider, en klar struktur, titler og beskrivelser, der matcher det, folk søger efter, og et sitemap, der fortæller Google, hvad der findes. Det er fundamentet. Derefter handler synlighed om godt indhold og links fra andre sites.',
      },
      {
        q: 'Hvad koster det at drive hjemmesiden bagefter?',
        a: 'Typisk meget lidt. Siderne bygges som statiske filer og hostes på Cloudflare, så der er ingen server at betale for eller vedligeholde. Udgiften er som regel domænet.',
      },
      {
        q: 'Kan vi selv rette i teksterne?',
        a: 'Ja. I får en redaktørflade i browseren, hvor I kan rette tekster, skifte billeder og lægge nyheder op. Der skal ingen kode til.',
      },
      {
        q: 'Kan I flytte vores eksisterende hjemmeside uden at miste placeringer på Google?',
        a: 'Ja. Gamle adresser omdirigeres til de nye, så Google og eksisterende links stadig virker. Domæne og email flyttes uden nedetid.',
      },
    ],
  },
  ctaHeading: 'Skal jeres hjemmeside findes?',
};

const websitesEn: DeepString<typeof websitesDa> = {
  meta: {
    title: 'Websites that get found on Google | AStyltsvig Consulting',
    description:
      'Fast, search-engine-optimised websites for companies and associations. Running costs close to zero, and you edit the content yourselves. Software architect in Copenhagen.',
  },
  serviceName: 'Websites and SEO',
  intro: {
    eyebrow: 'Services · Websites',
    heading: 'Websites that get found on Google.',
    lede: 'A website has to be findable, load in an instant, and be easy to keep up to date. I build search-engine-optimised websites with SEO, speed, and accessibility built in from the start, not bolted on afterwards.',
  },
  benefits: {
    eyebrow: 'What you get',
    heading: 'A website that works for you.',
    items: [
      {
        title: 'Gets found',
        text: 'Technical SEO from day one: clean URLs, titles and descriptions that match what your customers search for, a sitemap, structured data, and correct language markup.',
      },
      {
        title: 'Fast everywhere',
        text: 'Static pages served from a global network load in an instant, on mobile too. Visitors notice, and so does Google.',
      },
      {
        title: 'Next to free to run',
        text: 'No heavy servers or expensive licences. Hosting on Cloudflare typically costs nothing or very little per month.',
      },
      {
        title: 'You edit it yourselves',
        text: 'A simple editing interface, so your own people can update text, images, and news without calling a developer.',
      },
    ],
  },
  details: {
    eyebrow: 'Included',
    heading: 'What goes into a new website.',
    items: [
      'Design with your identity at the centre, in Danish, English, or more languages',
      'Keyword research and page titles that match what your customers type into Google',
      'Google Search Console and sitemap set up, so you can follow your visibility',
      'Accessibility according to WCAG, so everyone can use the site',
      'Domain and DNS migration without downtime, email included',
      'Share images, so the site looks right on LinkedIn and Facebook',
    ],
  },
  cases: {
    eyebrow: 'Examples',
    heading: 'Websites I have built.',
    slugs: ['ddl-tegnsprogspakken', 'festival-sans-pression', 'df1866'],
  },
  faq: {
    eyebrow: 'Questions',
    heading: 'What I am often asked.',
    items: [
      {
        q: 'What does it mean that a website is search-engine optimised?',
        a: 'That Google can easily read and understand it: fast pages, a clear structure, titles and descriptions that match what people search for, and a sitemap telling Google what exists. That is the foundation. After that, visibility comes from good content and links from other sites.',
      },
      {
        q: 'What does it cost to run the website afterwards?',
        a: 'Usually very little. The pages are built as static files and hosted on Cloudflare, so there is no server to pay for or maintain. The main cost is usually the domain.',
      },
      {
        q: 'Can we edit the text ourselves?',
        a: 'Yes. You get an editing interface in the browser where you can change text, swap images, and post news. No code required.',
      },
      {
        q: 'Can you move our existing website without losing our Google rankings?',
        a: 'Yes. Old addresses are redirected to the new ones, so Google and existing links keep working. Domain and email are moved without downtime.',
      },
    ],
  },
  ctaHeading: 'Should your website be found?',
};

const platformsDa: DeepString<typeof websitesDa> = {
  meta: {
    title: 'Skræddersyet software og ERP-systemer | AStyltsvig Consulting',
    description:
      'Skræddersyede platforme og ERP-systemer bygget i Laravel og Vue, der fjerner manuelt arbejde og regneark. Softwarearkitekt og udvikler i København.',
  },
  serviceName: 'Skræddersyet software og ERP',
  intro: {
    eyebrow: 'Ydelser · Platforme',
    heading: 'Skræddersyet software, der fjerner det manuelle arbejde.',
    lede: 'Når standardsoftware ikke passer til den måde, I arbejder på, ender driften i regneark, dobbelt indtastning og mails frem og tilbage. Jeg bygger skræddersyede platforme og ERP-systemer omkring jeres arbejdsgange, og jeg bliver og driver dem bagefter.',
  },
  benefits: {
    eyebrow: 'Det får I',
    heading: 'Ét system i stedet for ti regneark.',
    items: [
      {
        title: 'Bygget til jeres drift',
        text: 'Systemet formes efter jeres processer, ikke omvendt. I slipper for at tilpasse forretningen til et standardprodukt.',
      },
      {
        title: 'Mindre manuelt arbejde',
        text: 'Gentagne opgaver, genindtastning og afstemning automatiseres, så tiden går til kunderne.',
      },
      {
        title: 'Integrationer',
        text: 'Platformen taler sammen med de værktøjer, I allerede bruger, fx Excel, Google Workspace eller branchesystemer som PensionsBroker.',
      },
      {
        title: 'Én ansvarlig',
        text: 'Samme person står for arkitektur, udvikling og daglig drift. Ingen overdragelser, ingen viden der forsvinder.',
      },
    ],
  },
  details: {
    eyebrow: 'Typiske opgaver',
    heading: 'Det bygger jeg.',
    items: [
      'ERP-systemer til planlægning, koordinering og administration',
      'Kundeportaler, hvor jeres kunder selv kan se og opdatere deres data',
      'Administrationsplatforme med sporbarhed og rettighedsstyring',
      'Bookingsystemer i realtid, også på tværs af lande og sprog',
      'Modernisering af ældre systemer uden at stoppe driften',
      'Drift, overvågning og videreudvikling efter lancering',
    ],
  },
  cases: {
    eyebrow: 'Eksempler',
    heading: 'Platforme i daglig drift.',
    slugs: ['mallard', 'securelife', 'cpof', 'book2go'],
  },
  faq: {
    eyebrow: 'Spørgsmål',
    heading: 'Det bliver jeg ofte spurgt om.',
    items: [
      {
        q: 'Hvornår giver skræddersyet software mening frem for et standardsystem?',
        a: 'Når standardsystemet tvinger jer til at arbejde udenom det: regneark ved siden af, dobbelt indtastning eller processer, som ingen produkter dækker. Kan et standardsystem løse opgaven, siger jeg det.',
      },
      {
        q: 'Hvilken teknologi bruger du?',
        a: 'Som regel Laravel og Vue med MySQL eller PostgreSQL. Det er gennemprøvede, udbredte værktøjer, så systemet ikke er låst til én udvikler.',
      },
      {
        q: 'Hvad sker der efter lanceringen?',
        a: 'Jeg bliver. Jeg står for drift, opdateringer og videreudvikling, så systemet udvikler sig med forretningen.',
      },
      {
        q: 'Kan I starte småt?',
        a: 'Ja, og det anbefaler jeg. Vi starter med den del af driften, der koster mest tid, og bygger videre derfra.',
      },
    ],
  },
  ctaHeading: 'Hænger driften fast i regneark?',
};

const platformsEn: DeepString<typeof websitesDa> = {
  meta: {
    title: 'Custom software and ERP development | AStyltsvig Consulting',
    description:
      'Bespoke platforms and ERP systems built with Laravel and Vue that remove manual work and spreadsheets. Software architect and developer in Copenhagen, Denmark.',
  },
  serviceName: 'Custom software and ERP',
  intro: {
    eyebrow: 'Services · Platforms',
    heading: 'Custom software that removes the manual work.',
    lede: 'When off-the-shelf software does not fit the way you work, operations end up in spreadsheets, double data entry, and emails back and forth. I build bespoke platforms and ERP systems around your workflows, and I stay to run them afterwards.',
  },
  benefits: {
    eyebrow: 'What you get',
    heading: 'One system instead of ten spreadsheets.',
    items: [
      {
        title: 'Built for your operations',
        text: 'The system is shaped around your processes, not the other way around. No bending the business to fit a standard product.',
      },
      {
        title: 'Less manual work',
        text: 'Repetitive tasks, re-keying, and reconciliation are automated, so time goes to customers.',
      },
      {
        title: 'Integrations',
        text: 'The platform talks to the tools you already use, such as Excel, Google Workspace, or industry systems like PensionsBroker.',
      },
      {
        title: 'One accountable person',
        text: 'The same person owns architecture, development, and daily operations. No hand-overs, no knowledge that disappears.',
      },
    ],
  },
  details: {
    eyebrow: 'Typical work',
    heading: 'What I build.',
    items: [
      'ERP systems for planning, coordination, and administration',
      'Customer portals where your clients can see and update their own data',
      'Administration platforms with audit trails and access control',
      'Real-time booking systems, across countries and languages',
      'Modernising older systems without stopping production',
      'Operations, monitoring, and further development after launch',
    ],
  },
  cases: {
    eyebrow: 'Examples',
    heading: 'Platforms in daily production.',
    slugs: ['mallard', 'securelife', 'cpof', 'book2go'],
  },
  faq: {
    eyebrow: 'Questions',
    heading: 'What I am often asked.',
    items: [
      {
        q: 'When does custom software make sense over an off-the-shelf system?',
        a: 'When the standard system forces you to work around it: spreadsheets on the side, double data entry, or processes no product covers. If a standard system can do the job, I will say so.',
      },
      {
        q: 'What technology do you use?',
        a: 'Usually Laravel and Vue with MySQL or PostgreSQL. Proven, widely used tools, so the system is not locked to one developer.',
      },
      {
        q: 'What happens after launch?',
        a: 'I stay. I handle operations, updates, and further development, so the system evolves with the business.',
      },
      {
        q: 'Can we start small?',
        a: 'Yes, and I recommend it. We start with the part of the operation that costs the most time and build from there.',
      },
    ],
  },
  ctaHeading: 'Are your operations stuck in spreadsheets?',
};

const accessibilityDa: DeepString<typeof websitesDa> = {
  meta: {
    title: 'Tilgængelige hjemmesider og apps til døve | AStyltsvig Consulting',
    description:
      'Tilgængelige hjemmesider og apps efter WCAG, med erfaring fra døveområdet og tegnsprog: DDL, Døveforeningen af 1866, Smartlinjen, DeafPlaces og DeafLiga.',
  },
  serviceName: 'Tilgængelighed og tegnsprog',
  intro: {
    eyebrow: 'Ydelser · Tilgængelighed',
    heading: 'Tilgængelige hjemmesider og apps, også for døve.',
    lede: 'Tilgængelighed er mere end kontrast og alt-tekster. Jeg har bygget hjemmesider, apps og værktøjer til døve og hørehæmmede og ved, hvad der skal til, for at tegnsprog, video og tekst fungerer for dem, det handler om.',
  },
  benefits: {
    eyebrow: 'Det får I',
    heading: 'Løsninger, alle kan bruge.',
    items: [
      {
        title: 'WCAG fra starten',
        text: 'Kontrast, tastaturnavigation, skærmlæsere og tydelig struktur bygges ind fra første linje, ikke rettet til bagefter.',
      },
      {
        title: 'Tegnsprog og video',
        text: 'Erfaring med tegnsprogsvideoer, undertekster og indhold, der skal fungere for brugere med dansk tegnsprog som førstesprog.',
      },
      {
        title: 'Forstår målgruppen',
        text: 'Arbejdet for døveforeninger og mine egne produkter til døve betyder, at jeg kender behovene, ikke kun retningslinjerne.',
      },
      {
        title: 'Valg til brugeren',
        text: 'Visningstilstande som lys, mørk og høj kontrast, så hver besøgende kan bruge løsningen på sine egne vilkår.',
      },
    ],
  },
  details: {
    eyebrow: 'Typiske opgaver',
    heading: 'Det kan jeg hjælpe med.',
    items: [
      'Nye hjemmesider til foreninger og organisationer på døveområdet',
      'Gennemgang af en eksisterende hjemmeside for tilgængelighed med en konkret liste over rettelser',
      'Platforme til tegnsprogsressourcer og video',
      'Apps og værktøjer, der gør hverdagen nemmere for døve og hørehæmmede',
      'Tilgængelighedserklæring og løbende forbedringer',
    ],
  },
  cases: {
    eyebrow: 'Eksempler',
    heading: 'Bygget til og med døve.',
    slugs: ['ddl-tegnsprogspakken', 'smartlinjen', 'deafplaces', 'deafliga'],
  },
  faq: {
    eyebrow: 'Spørgsmål',
    heading: 'Det bliver jeg ofte spurgt om.',
    items: [
      {
        q: 'Hvad er WCAG?',
        a: 'WCAG er de internationale retningslinjer for tilgængeligt webindhold. De beskriver, hvordan en hjemmeside kan bruges af alle, også med nedsat syn, hørelse eller motorik. Offentlige myndigheder i Danmark er forpligtet til at følge dem.',
      },
      {
        q: 'Er det dyrere at bygge en tilgængelig hjemmeside?',
        a: 'Ikke når det tænkes ind fra starten. Det er rettelser bagefter, der koster. En tilgængelig hjemmeside er også typisk hurtigere og bedre for SEO.',
      },
      {
        q: 'Kan du gennemgå vores nuværende hjemmeside?',
        a: 'Ja. I får en konkret liste over problemer, prioriteret efter hvor meget de betyder for brugerne, og jeg kan rette dem bagefter, hvis I ønsker det.',
      },
    ],
  },
  ctaHeading: 'Skal jeres løsning kunne bruges af alle?',
};

const accessibilityEn: DeepString<typeof websitesDa> = {
  meta: {
    title: 'Accessible websites and apps for deaf users | AStyltsvig Consulting',
    description:
      'Accessible websites and apps following WCAG, with hands-on experience in the Deaf community and sign language: DDL, Døveforeningen af 1866, Smartlinjen, DeafPlaces, and DeafLiga.',
  },
  serviceName: 'Accessibility and sign language',
  intro: {
    eyebrow: 'Services · Accessibility',
    heading: 'Accessible websites and apps, deaf users included.',
    lede: 'Accessibility is more than contrast and alt text. I have built websites, apps, and tools for deaf and hard-of-hearing people and know what it takes for sign language, video, and text to work for the people they are meant for.',
  },
  benefits: {
    eyebrow: 'What you get',
    heading: 'Solutions everyone can use.',
    items: [
      {
        title: 'WCAG from the start',
        text: 'Contrast, keyboard navigation, screen readers, and clear structure built in from the first line, not patched afterwards.',
      },
      {
        title: 'Sign language and video',
        text: 'Experience with sign-language video, captions, and content that has to work for users whose first language is a sign language.',
      },
      {
        title: 'Knows the audience',
        text: 'Work for Deaf associations and my own products for deaf users mean I know the needs, not only the guidelines.',
      },
      {
        title: 'Choice for the user',
        text: 'Display modes such as light, dark, and high contrast, so every visitor can use the solution on their own terms.',
      },
    ],
  },
  details: {
    eyebrow: 'Typical work',
    heading: 'What I can help with.',
    items: [
      'New websites for associations and organisations in the Deaf community',
      'An accessibility review of an existing website with a concrete list of fixes',
      'Platforms for sign-language resources and video',
      'Apps and tools that make everyday life easier for deaf and hard-of-hearing people',
      'Accessibility statements and ongoing improvements',
    ],
  },
  cases: {
    eyebrow: 'Examples',
    heading: 'Built for and with deaf people.',
    slugs: ['ddl-tegnsprogspakken', 'smartlinjen', 'deafplaces', 'deafliga'],
  },
  faq: {
    eyebrow: 'Questions',
    heading: 'What I am often asked.',
    items: [
      {
        q: 'What is WCAG?',
        a: 'WCAG is the international guideline for accessible web content. It describes how a website can be used by everyone, including people with impaired vision, hearing, or motor skills. Public bodies in the EU are required to follow it.',
      },
      {
        q: 'Is an accessible website more expensive to build?',
        a: 'Not when it is planned from the start. It is the fixes afterwards that cost. An accessible website is also typically faster and better for SEO.',
      },
      {
        q: 'Can you review our current website?',
        a: 'Yes. You get a concrete list of issues, prioritised by how much they matter to users, and I can fix them afterwards if you want.',
      },
    ],
  },
  ctaHeading: 'Should everyone be able to use your solution?',
};

type LandingCopy = DeepString<typeof websitesDa>;

export const landing: Record<LandingKey, Record<Lang, LandingCopy>> = {
  websites: { da: websitesDa, en: websitesEn },
  platforms: { da: platformsDa, en: platformsEn },
  accessibility: { da: accessibilityDa, en: accessibilityEn },
};

/** Order the pages are listed in on the Services page. */
export const landingOrder: LandingKey[] = ['platforms', 'websites', 'accessibility'];
