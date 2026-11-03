---
client: "Cycling Without Age · Book2Go"
clientUrl: "https://book2go.bike"
headline: "Bookingplatform og teknisk ejerskab for en global bevægelse."
role: "Arkitekt, udvikler og teknisk ansvarlig"
period: "Løbende"
stack: ["Vue 2", "Firebase", "Supabase", "Google Workspace", "Zendesk", "Looker Studio"]
categoryKey: "platform"
statusKey: "inDailyProduction"
screenshot: "book2go.png"
screenshotAlt: "Forside af book2go.bike med hero-billede og rickshaw"
order: 5
description: "Bookingplatformen Book2Go koordinerer piloter, passagerer og ture for afdelinger verden over, og jeg er samtidig organisationens tekniske kontaktpunkt for systemer, adgange og email."
---

## Baggrund

[Cycling Without Age](https://cyclingwithoutage.org) er en dansk-grundlagt global bevægelse, hvor frivillige tager ældre og mindre mobile passagerer med på rickshaw-ture. Med afdelinger i snesevis af lande vokser koordineringen af piloter, passagerer, plejehjem, ture og sprog hurtigt forbi, hvad regneark og delte kalendere kan bære. Samtidig var der vokset en international IT-opsætning frem med Google Workspace, Zendesk, Looker Studio og en lang række domæner, men uden ét samlet teknisk ejerskab.

## Opgave

En platform, afdelingerne kan drive deres arbejde på: passagerhåndtering, turplanlægning, frivilligkoordinering og den rapportering, samarbejdspartnerne forventer, på de sprog, de lokale afdelinger faktisk taler. Og ét sted, hvor det tekniske ansvar for resten af systemerne er samlet.

## Løsning

[book2go.bike](https://book2go.bike) er bygget på Vue 2, Firebase og Supabase med realtidsopdateringer og flersproget support som grundvilkår. Platformen er designet til hverdagen efter lanceringen: roller og rettigheder, der matcher hvordan en lokal afdeling faktisk ledes, flows der holder, når flere afdelinger koordinerer samme weekend, og en deploy-pipeline der gør løbende forbedring mulig uden at sætte aktive bookinger på spil.

Omkring platformen har jeg overtaget det tekniske ansvar: Google Workspace-administration og adgange er konsolideret, SPF, DKIM og DMARC er sat op på organisationens domæner, og systemerne omkring Book2Go (Zendesk, Looker Studio) er dokumenteret, så viden ikke bor i ét hoved.

Jeg har bygget platformen solo med AI som en integreret del af det daglige arbejde. Arkitektur og produktbeslutninger ligger hos mig, mens AI sætter fart på implementering, refaktorering og fejlfinding.

## Resultat

Book2Go er i daglig drift hos Cycling Without Age-afdelinger internationalt, og organisationen har ét teknisk kontaktpunkt, en dokumenteret infrastruktur og email-autentificering, der beskytter mod spoofing. Videreudviklingen finansieres direkte af den værdi, platformen skaber for bevægelsen.
