---
client: "SecureLife & Bedstpension"
headline: "En kundeportal til forsikrings- og pensionsordninger i større skala."
role: "Lead-udvikler"
period: "2020 – 2022"
stack: ["Vue", "Firebase", "REST API", "MailGun", "GitHub Actions"]
statusKey: "delivered"
order: 5
description: "En sikker kundeportal til SecureLife og Bedstpension der dækker 2.500+ medarbejdere fordelt på over 200 virksomheder — Vue 2, Firebase BaaS, avanceret søgning og policy-dashboards."
---

## Baggrund

SecureLife og Bedstpension leverer forsikrings- og pensionsprodukter til danske virksomheder som administrerer ordninger på vegne af deres medarbejdere. Ved 200+ kundevirksomheder og 2.500+ enkelte forsikringstagere holder regneark og ad-hoc-opslag op med at være en holdbar måde at drive den daglige administration på. Både HR-afdelinger og medarbejdere havde brug for et sted hvor de kunne se hvad der var dækket, af hvem og på hvilke vilkår.

## Opgave

Bygge en sikker kundeportal der dækkede begge brands, med ét samlet login, rolle-bestemt adgang for HR-administratorer og slutbrugere, avanceret søgning og filtrering på tværs af policy-datasættet, og dashboards der gør en stor portefølje af ordninger overskuelig ved første blik.

## Løsning

En Vue 2-SPA bygget ovenpå Firebase (autentificering og data), med REST-integrationer mod policy-systemerne og transaktionel email-levering via MailGun. Søge- og filtreringslaget blev designet omkring dataens faktiske form — koncern-hierarkier, overlappende ordningstyper og medarbejder­records der flytter sig mellem arbejdsgivere over tid. Releases gik gennem en GitHub Actions-pipeline med miljø-adskillelse så ændringer kunne verificeres før de ramte produktion.

## Resultat

En leveret portal der administrerer forsikrings- og pensionsordninger for mere end 2.500 medarbejdere fordelt på over 200 virksomheder, med de søge-, filtrerings- og dashboard-flader HR-afdelingerne bruger dagligt.
