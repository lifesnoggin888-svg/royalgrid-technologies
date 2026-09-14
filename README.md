# RoyalGrid Technologies

African opportunity-access infrastructure. Flagship platform: **OpportunityGrid**.

RoyalGrid Technologies discovers, verifies, and organizes funding, procurement, accelerator,
export, supplier, and development-finance opportunities for African businesses, then matches
them against a structured eligibility profile and converts fragmented opportunity information
into an evidence-backed path from discovery to application readiness.

## Live site

[royalgrid-technologies.vercel.app](https://royalgrid-technologies.vercel.app)

## Status

FACT — this repository currently contains the RoyalGrid Technologies corporate website.
OpportunityGrid's product build (Supabase schema, source adapters, matching engine) is Phase 2
and tracked separately; see [docs/product/PRODUCT_ROADMAP_18M.md](docs/product/PRODUCT_ROADMAP_18M.md).

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Fonts | Fraunces (serif), Inter (sans) |
| Hosting | Vercel |

## Structure

```
app/                route pages (Home, Platform, How It Works, For Businesses,
                    For Institutions, Markets, Company, Contact)
components/         SiteHeader, SiteFooter, PageHero
docs/company/        company thesis and market problem
docs/product/        OpportunityGrid product and roadmap docs
docs/investor/       investor-facing documents (templates, not executed agreements)
docs/legal/          IP transfer checklist
SECURITY_AUDIT.md    secret-scan results for this repository
```

## Development

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Legal

RoyalGrid Technologies is a registered Nigerian Business Name (Registration No. 9843389).
It is not currently described as a limited company pending proof of incorporation. See
[docs/company/LEGAL_FACTS.md](docs/company/LEGAL_FACTS.md).

## Provenance

Portions of this platform's technical foundation originate from a prior open-source
prototype (`grant-scout`) built and owned by the same operator. See
[docs/legal/IP_TRANSFER_CHECKLIST.md](docs/legal/IP_TRANSFER_CHECKLIST.md) for details.
This repository is an independent venture and carries no corporate relationship, branding,
or affiliation to any other company.
