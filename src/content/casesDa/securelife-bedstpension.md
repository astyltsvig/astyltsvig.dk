---
client: "SecureLife / Care Pensions"
headline: "CRM-portaler til forsikrings- og pensionsordninger — to brands på én kodebase."
role: "Lead-udvikler"
period: "2020 – 2022"
stack: ["Vue", "Firebase", "REST API", "MailGun", "GitHub Actions"]
statusKey: "delivered"
icon: "shield"
order: 3
description: "CRM-portaler til SecureLife og Care Pensions — to brands drevet på én Vue 2-kodebase, dækker 2.500+ medarbejdere fordelt på over 200 virksomheder med avanceret søgning og policy-dashboards."
---

## Baggrund

SecureLife og Care Pensions leverer forsikrings- og pensionsprodukter til danske virksomheder som administrerer ordninger på vegne af deres medarbejdere. Ved 200+ kundevirksomheder og 2.500+ enkelte forsikringstagere holder regneark og ad-hoc-opslag op med at være en holdbar måde at drive den daglige administration på. Både HR-afdelinger og medarbejdere havde brug for et sted hvor de kunne se hvad der var dækket, af hvem og på hvilke vilkår.

## Opgave

Bygge sikre kundeportaler til begge brands — to separate portaler på hver sit brand og domæne, men drevet på samme kodebase for at undgå dobbeltudvikling. Rolle-bestemt adgang for HR-administratorer og slutbrugere, avanceret søgning og filtrering på tværs af policy-datasættet, og dashboards der gør en stor portefølje af ordninger overskuelig ved første blik.

## Løsning

En Vue 2-SPA bygget ovenpå Firebase (autentificering og data), med REST-integrationer mod policy-systemerne og transaktionel email-levering via MailGun. Samme kodebase blev deployet som to brandede portaler — én til SecureLife, én til Care Pensions — så de to brands kunne driftes uafhængigt uden at duplikere udviklingsarbejdet. Søge- og filtreringslaget blev designet omkring dataens faktiske form — koncern-hierarkier, overlappende ordningstyper og medarbejder­records der flytter sig mellem arbejdsgivere over tid. Releases gik gennem en GitHub Actions-pipeline med miljø-adskillelse så ændringer kunne verificeres før de ramte produktion.

## Resultat

To leverede portaler der tilsammen administrerer forsikrings- og pensionsordninger for mere end 2.500 medarbejdere fordelt på over 200 virksomheder, med de søge-, filtrerings- og dashboard-flader HR-afdelingerne bruger dagligt.
