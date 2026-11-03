---
client: "Cycling Without Age · Book2Go"
clientUrl: "https://book2go.bike"
headline: "Booking platform and technical ownership for a global movement."
role: "Architect, developer, and technical lead"
period: "Ongoing"
stack: ["Vue 2", "Firebase", "Supabase", "Google Workspace", "Zendesk", "Looker Studio"]
categoryKey: "platform"
statusKey: "inDailyProduction"
screenshot: "book2go.png"
screenshotAlt: "book2go.bike homepage with hero image and rickshaw"
order: 5
description: "The Book2Go booking platform coordinates pilots, passengers, and rides for affiliates worldwide, and I am also the organisation's technical point of contact for systems, access, and email."
---

## Background

[Cycling Without Age](https://cyclingwithoutage.org) is a Danish-founded global movement where volunteers take elderly and less-mobile passengers out on trishaw rides. With affiliates in dozens of countries, coordinating pilots, passengers, care homes, rides, and languages quickly outgrows what spreadsheets and shared calendars can carry. At the same time, an international IT setup had grown, spanning Google Workspace, Zendesk, Looker Studio, and a long list of domains, but without a single point of technical ownership.

## Brief

A platform affiliates can run their operation on: passenger management, ride scheduling, volunteer coordination, and the reporting their partners expect, in the languages the local chapters actually speak. And one place where technical responsibility for the rest of the systems comes together.

## Approach

[book2go.bike](https://book2go.bike) is built on Vue 2, Firebase, and Supabase, with real-time updates and multilingual support as a baseline. The platform is designed for everyday use after launch: roles and permissions that match how a local chapter is actually run, flows that hold when several affiliates coordinate the same weekend, and a deploy pipeline that makes continuous improvement possible without putting live bookings at risk.

Around the platform I have taken over technical ownership: Google Workspace administration and access are consolidated, SPF, DKIM, and DMARC are configured across the organisation's domains, and the systems surrounding Book2Go (Zendesk, Looker Studio) are documented, so the knowledge doesn't live in one head.

I built the platform solo, with AI as an integrated part of the daily work. Architecture and product decisions stay with me, while AI speeds up implementation, refactoring, and debugging.

## Outcome

Book2Go is in daily production with Cycling Without Age affiliates internationally, and the organisation has one technical point of contact, a documented infrastructure, and email authentication that protects against spoofing. Continued development is funded directly by the value the platform creates for the movement.
