# Investor-Submission Readiness Verdict

**Date:** 2026-09-14. Prepared against Ventures Platform's stated thesis (Africa-focused,
$100K–$1M pre-seed/seed, non-consumption / infrastructure / access problems).

## RoyalGrid Technologies — NOT READY

**What is real and verified today:**
- Live corporate site: https://royalgrid-technologies.vercel.app
- Live product: https://opportunitygrid.vercel.app, with the full Discover → Verify → Match
  → Qualify → Prepare → Track pipeline working end to end
- One genuinely live African data source connected: Nigeria's Bureau of Public Procurement
  open-contracting data (not demo — real government tenders, real issuers, sandbox/test
  records filtered out after being found in the raw feed)
- Corporate site links directly to the live product ("Explore OpportunityGrid" → the actual
  app, not a description page)

**Why NOT READY:**
1. **Single operating founder.** Per your own structural point — RoyalGrid has no dedicated
   operating founder/CEO distinct from Opulentia. Until that changes (or you decide to submit
   as a deliberately founder-led venture and can defend that choice under diligence), the
   "which company are you actually building" question stands.
2. **No cap table, no incorporation beyond a Business Name.** `docs/investor/CAP_TABLE_TEMPLATE.md`
   is a template only — correct and honest, but a VC will ask for the real thing before a term
   sheet.
3. **Only one opportunity class has live data.** Grants, accelerators, export programs, and
   the rest remain demo-labeled. This is honestly disclosed on the product itself, but it
   means the "African opportunity-access infrastructure" claim is proven for procurement only.
4. **No contact infrastructure.** No domain, no dedicated inbox — the Contact page routes to a
   personal Gmail via mailto. Fine for a prototype demo, not for a company taking a check.

**What would flip this to READY:** a named operating founder/CEO distinct from you, at least
one more live source integrated (grants or accelerators), and either incorporation progress or
a credible near-term plan for it.

## Opulentia Digital Core Horizon — NOT READY (closer than RoyalGrid)

**What is real and verified today:**
- Live corporate site: https://opulentia-digital.vercel.app, repositioned so AetherGrid is
  the unmistakable flagship story within the first screen, per your directive
- AetherGrid product page (`/services/aethergrid`) with real architecture detail
- **AetherGrid's actual source code is now migrated** to clean, independent ownership at
  `github.com/lifesnoggin888-svg/aethergrid` — verified zero ArkNet references directly on
  the pushed remote (README, globals.css, dashboard-client.tsx, header.tsx all re-fetched
  and grepped clean). This closes the IP-chain gap from the prior version of this verdict.
- Clean, independent GitHub repository (`lifesnoggin888-svg/opulentia-digital-core-horizon`)
  for the corporate site, verified zero ArkNet references

**Why still NOT READY:**
1. **AetherGrid is not live.** `aethergrid-source.vercel.app` (the new, clean deployment)
   returns `HTTP 500` — it's deployed and builds successfully, but needs its Supabase
   database credentials wired in. The real production database has been identified and
   confirmed (`knxknvhntyhmtsklrpwb`, schema-matched to `auctions`/`bids`/`nodes`/etc.), but
   retrieving its API keys requires you at a device logged into that Supabase account. A VC
   reviewer cannot see AetherGrid working at all right now — worse than the prior login-wall
   gap, since the page doesn't render at all.
2. **Same single-operating-founder question as RoyalGrid**, and the same cap-table/
   incorporation gaps.

**What would flip this to READY:** wire the Supabase keys (minutes, once you're home) so
AetherGrid actually renders and functions, plus the same founder-structure and
incorporation items RoyalGrid needs.

## What is explicitly NOT claimed anywhere in either site or these docs

No customers, no revenue, no pilots, no partnerships, no signed term sheets, no valuation, no
cap table entries, no incorporation beyond the RoyalGrid Business Name. Market-sizing figures
are absent by design pending sourced data. Nothing here should be read as satisfying Ventures
Platform's diligence on its own — it establishes that the product and technical claims on both
sites are true as stated, which is the part I can verify.
