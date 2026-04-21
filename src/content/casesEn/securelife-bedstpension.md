---
client: "SecureLife / Care Pensions"
headline: "A CRM platform for insurance and pension policies at scale."
role: "Lead developer"
period: "2020 – 2022"
stack: ["Vue", "Firebase", "REST API", "MailGun", "GitHub Actions"]
statusKey: "delivered"
icon: "shield"
order: 3
description: "A CRM platform for SecureLife and Care Pensions covering 2,500+ employees across 200+ companies — Vue 2, Firebase BaaS, advanced search and policy dashboards."
---

## Background

SecureLife and Care Pensions provide insurance and pension products to Danish companies that administer policies on behalf of their employees. At the scale of 200+ client companies and 2,500+ individual policyholders, spreadsheets and ad-hoc lookups stop being a viable way to manage day-to-day administration. HR teams and employees both needed a place to see what was covered, by whom, and under which terms.

## Brief

Build a secure customer portal covering both brands, with one login experience, role-aware access for HR administrators and end users, advanced search and filtering across the policy data set, and dashboards that make a large portfolio of policies understandable at a glance.

## Approach

A Vue 2 single-page application backed by Firebase (authentication and data), with REST integrations against the policy systems and transactional email delivery through MailGun. The search and filtering layer was designed around the actual shape of the data — nested company hierarchies, overlapping policy types, and employee records that move between employers over time. Releases went through a GitHub Actions pipeline with staged environments so changes could be verified before reaching production.

## Outcome

A delivered portal administering insurance and pension policies for more than 2,500 employees across 200+ companies, with the search, filtering and dashboard surfaces that HR teams rely on day-to-day.
