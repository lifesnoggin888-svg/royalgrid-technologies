# Product Roadmap — 18 Months

**Type: TARGET / FUTURE ROADMAP. Nothing in this document is a committed date or funded
plan — it is a sequencing intent, subject to evidence from each prior phase.**

## Phase 1 — Corporate site (this repository, current)

- RoyalGrid Technologies company site: Home, Platform, How It Works, For Businesses, For
  Institutions, Markets, Company, Contact.
- Investor-readiness documentation scaffold (this `docs/` tree).
- Deployed to Vercel.

## Phase 2 — OpportunityGrid v1 (Nigeria-first)

- Refactor `grant-scout` into the `opportunitygrid` repository under the source-adapter
  architecture described in [OPPORTUNITYGRID.md](./OPPORTUNITYGRID.md).
- Supabase schema with RLS, organizations/profiles, opportunities, and audit logs.
- DEMO_MODE shipped first; first live Nigerian source integration second.
- Business profile creation, matching, and saved-opportunity tracking.

## Phase 3 — Readiness and application tracking

- Readiness checklist generation per opportunity.
- Application pipeline (discovered → qualified → preparing → submitted → won/lost/expired).
- First cohort of real Nigerian businesses using the product end to end.

## Phase 4 — West Africa expansion

- Additional country source adapters and jurisdiction-specific eligibility rules.
- Multi-country organization profile support validated against real data, not assumptions.

## Phase 5 — Institutional surface

- Portfolio-level matching, opportunity feeds, cohort dashboards, and API access for banks,
  accelerators, and development organizations, built on the schema/API boundaries reserved
  in Phase 2.

## Kill criteria (self-imposed, not for external distribution as a promise)

- If, after a defined Nigeria-first pilot period, qualified businesses are not saving or
  acting on matched opportunities at a meaningful rate, the matching/qualification logic is
  re-evaluated before any geographic expansion.
- If verified source coverage cannot be sustained for a country, that country is deferred
  rather than launched with unverifiable data.
