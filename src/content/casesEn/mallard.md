---
client: "Mallard"
clientUrl: "https://mallard.dk"
headline: "An ERP system built for an industry no off-the-shelf product covers."
role: "Solo developer, architect, operations"
period: "2022 – present"
stack: ["Laravel", "Vue", "MySQL", "Hetzner"]
statusKey: "inDailyProduction"
icon: "chart"
order: 1
description: "A Laravel/Vue ERP for Mallard, a Danish sign-language interpreting provider — built from scratch and running in daily production since 2022."
---

## Background

[Mallard](https://mallard.dk) is a Danish provider of sign-language interpretation. It's a specialised industry with complex assignment rules, tight SLAs toward public-sector clients, and an economy where every booking has to be traced from request to invoice. Generic booking platforms and accounting tools don't cover it — they can handle bookings, but not interpreter scheduling, requester hierarchies, or the industry's specific invoicing requirements.

## Brief

Build a single system to replace a patchwork of spreadsheets, manual processes, and an ageing internal tool — and operate it over time, without an in-house IT department to fall back on.

## Approach

Mallard's ERP is a full-stack Laravel/Vue system covering the entire operation: customer portal, booking flow, interpreter scheduling, mileage tracking, invoicing, and reporting. I built it from scratch and have operated it since 2022, with a production environment on Hetzner and a deployment pipeline that lets me iterate quickly without compromising stability.

The tight loop between development and operations — I both build the system and know every edge case from support tickets — is the reason it's become what it is.

## AI-assisted acceleration

Since late 2025, Claude Code has been an integrated part of the daily development workflow. A full framework modernisation — Vue 2 to Vue 3, Webpack to Vite, mixins to a modern component architecture — was delivered by a single developer on a timeline that would traditionally require a small team. The release cadence has shifted from occasional larger drops to continuous updates, with fixes and new functionality reaching users within days rather than weeks.

Architecture and product decisions stay with me; AI handles implementation, refactoring, and debugging. The arrangement is what makes a sustainable tempo possible — normal working hours, no sprint culture, and a system that keeps improving.

## Outcome

A system entering its fourth year in production, used daily by Mallard's staff. No downtime caused by architectural problems. Continued development funded directly by the value the system produces — and a working proof that AI-assisted development, done properly, is a real productivity lever and not a shortcut.
