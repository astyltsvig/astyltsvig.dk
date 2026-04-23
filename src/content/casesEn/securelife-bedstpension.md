---
client: "SecureLife / Care Pensions"
headline: "CRM portals for insurance and pension policies — two brands on one codebase."
role: "Lead developer"
period: "2020 – 2022"
stack: ["Vue", "Firebase", "REST API", "MailGun", "GitHub Actions"]
statusKey: "delivered"
icon: "shield"
order: 3
description: "CRM portals for SecureLife and Care Pensions — two brands running on a single Vue 2 codebase, covering 2,500+ employees across 200+ companies with advanced search and policy dashboards."
---

## Background

SecureLife and Care Pensions provide insurance and pension products to Danish companies that administer policies on behalf of their employees. At the scale of 200+ client companies and 2,500+ individual policyholders, spreadsheets and ad-hoc lookups stop being a viable way to manage day-to-day administration. HR teams and employees both needed a place to see what was covered, by whom, and under which terms.

## Brief

Build secure customer portals for both brands — two separate portals on their own brand and domain, but running on the same codebase to avoid double development. Role-aware access for HR administrators and end users, advanced search and filtering across the policy data set, and dashboards that make a large portfolio of policies understandable at a glance.

## Approach

A Vue 2 single-page application backed by Firebase (authentication and data), with REST integrations against the policy systems and transactional email delivery through MailGun. The same codebase was deployed as two branded portals — one for SecureLife, one for Care Pensions — so the two brands could be operated independently without duplicating development effort. The search and filtering layer was designed around the actual shape of the data — nested company hierarchies, overlapping policy types, and employee records that move between employers over time. Releases went through a GitHub Actions pipeline with staged environments so changes could be verified before reaching production.

## Outcome

Two delivered portals collectively administering insurance and pension policies for more than 2,500 employees across 200+ companies, with the search, filtering and dashboard surfaces that HR teams rely on day-to-day.
