---
client: "Mallard"
clientUrl: "https://mallard.dk"
headline: "Et ERP-system bygget til en branche ingen standardløsning dækker."
role: "Solo-udvikler, arkitekt, drift"
period: "2022 – nu"
stack: ["Laravel", "Vue", "MySQL", "Hetzner"]
statusKey: "inDailyProduction"
icon: "chart"
order: 1
description: "Et Laravel/Vue-ERP til Mallard, en dansk tegnsprogstolknings­leverandør — bygget fra bunden og i daglig produktion siden 2022."
---

## Baggrund

[Mallard](https://mallard.dk) er en dansk leverandør af tegnsprogstolkning. Det er en specialiseret branche med komplekse tildelingsregler, skarpe SLA'er over for offentlige kunder, og en økonomi hvor hver booking skal spores fra bestilling til faktura. Generiske bookingsystemer og regnskabsværktøjer dækker ikke behovet — de kan rumme bookinger, men ikke tolkedisponering eller branchens specifikke fakturakrav.

## Opgave

Bygge et samlet system som kunne erstatte en blanding af regneark, manuelle processer og et aldrende internt værktøj — og drive det selv, over tid, uden en intern IT-afdeling at læne sig op ad.

## Løsning

Mallards ERP er et fullstack Laravel/Vue-system der håndterer hele forretningsdriften: kundeportal, bookingflow, tolkedisponering, arbejdstids- og lønregistrering med Danløn-integration, fakturering og statistik. Jeg har bygget det fra bunden og drevet det siden 2022, med produktionsmiljø på Hetzner og en deploy-pipeline der gør det muligt at iterere hurtigt uden at gå på kompromis med stabilitet.

Den tætte kobling mellem udvikling og drift — at jeg både bygger systemet og kender hver eneste edge case fra supporttickets — er årsagen til at systemet er blevet det det er.

## AI-assisteret acceleration

Siden slutningen af 2025 er Claude Code blevet integreret del af det daglige udviklingsworkflow. En fuld framework-modernisering — Vue 2 til Vue 3, Webpack til Vite, mixins til en moderne komponentarkitektur — er leveret af én udvikler på en tidshorisont der normalt ville kræve et lille team. Release-kadencen er skiftet fra lejlighedsvise større drops til kontinuerlige opdateringer, hvor fejlrettelser og nye funktioner når brugerne på dage frem for uger.

Arkitektur og produktbeslutninger ligger hos mig; AI håndterer implementering, refaktorering og fejlfinding. Det er den arbejdsdeling der gør et bæredygtigt tempo muligt — normal arbejdstid, ingen sprint-kultur, og et system der hele tiden bliver bedre.

## Resultat

Et system i fjerde driftsår som Mallards medarbejdere bruger hver dag. Ingen nedetid på grund af arkitektoniske problemer. Kontinuerlig videreudvikling finansieret direkte af den værdi systemet skaber — og et praktisk bevis på at AI-assisteret udvikling, gjort ordentligt, er en reel produktivitetsgevinst og ikke en genvej.
