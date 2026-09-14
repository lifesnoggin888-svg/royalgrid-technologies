# OpportunityGrid — Product Architecture

**Type: mixed — marked inline as CURRENT CAPABILITY, DEMO, or TARGET.**

OpportunityGrid is RoyalGrid Technologies' flagship platform.

## Operating model

```
DISCOVER → VERIFY → MATCH → QUALIFY → PREPARE → TRACK
```

1. **Discover** — retrieve current opportunities from approved/public sources.
2. **Verify** — capture source, issuer, URL, dates, jurisdiction, requirements, and evidence
   strength.
3. **Match** — compare the opportunity against a structured business profile.
4. **Qualify** — classify as likely eligible / potentially eligible / not enough evidence /
   likely ineligible. The LLM is never permitted to invent eligibility.
5. **Prepare** — generate a readiness checklist: corporate documents, tax/compliance
   requirements, financial statements, pitch materials, certifications, application
   questions, deadlines.
6. **Track** — move an opportunity through: discovered → qualified → preparing → submitted →
   won / lost / expired.

## Technical foundation (CURRENT CAPABILITY)

The technical foundation originates from `grant-scout`, a prior prototype with:

- Live search/retrieval (SerpApi-backed today)
- A Python API layer (`chat`, `history`, rate-limiting) fronting a Next.js frontend
- Evidence-bound reasoning and source citation in responses
- Refusal behavior when evidence is insufficient

## Required refactor for OpportunityGrid (TARGET — Phase 2)

- **Source-adapter architecture.** Replace the SerpApi-only integration with a
  `SourceAdapter` interface (`search()`, `fetch()`, `normalize()`, `validate()`,
  `provenance()`) supporting official APIs, permitted RSS/feeds, permitted public web
  discovery, and search-engine discovery as a fallback — never bypassing authentication,
  anti-bot protection, robots restrictions, paywalls, or source terms of use.
- **Normalized opportunity schema** (nulls where data does not exist — never invented):
  `id, title, issuer, country, region, opportunity_type, sector, description,
  eligibility_summary, requirements, deadline, opening_date, funding_amount_min,
  funding_amount_max, currency, source_url, source_name, source_type, retrieved_at,
  last_verified_at, confidence, status`.
- **Supabase/PostgreSQL schema** with UUID primary keys, timestamps, multi-tenancy, and RLS
  from the start, including at minimum: `organizations, organization_profiles, users,
  opportunities, opportunity_sources, source_snapshots, eligibility_rules,
  eligibility_assessments, readiness_requirements, saved_opportunities, applications,
  application_events, notifications, audit_logs`.
- **DEMO_MODE**, clearly labeled ("Demonstration data — not a live funding recommendation")
  and visibly differentiated from live opportunities, so the product is usable before every
  African source integration is complete.
- **African-first refactor** of company-profile matching (country, registration type,
  company age, industry, revenue stage, employee size, geography, funding stage,
  certifications, export status, technology/non-technology, required documents) — not a
  find-and-replace of "US" with "Nigeria" in the prior prototype.

## Institutional surface (TARGET — later phase)

Portfolio/company matching, opportunity feeds, eligibility intelligence, cohort dashboards,
API access, and opportunity analytics for banks, accelerators, development organizations,
chambers, and enterprise supplier programs. Schema and API boundaries are being designed now
so these can be added without a rearchitecture; none of this is built yet.

## What is live today (FACT)

As of this document's creation, the RoyalGrid Technologies corporate website is live. The
OpportunityGrid product itself (schema, adapters, matching, tracking) is Phase 2 work, not
yet started in this repository.
