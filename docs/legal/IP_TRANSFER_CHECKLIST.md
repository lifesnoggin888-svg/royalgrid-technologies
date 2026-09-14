# IP Transfer Checklist

**Type: FACT (provenance) + TARGET (unexecuted items). This document records technical
provenance for internal/diligence reference. It is not a legal assignment or transfer
agreement, and no signatures are represented as executed anywhere in this file.**

## Source repository

- **Source:** `jayblast-spec/grant-scout` (public GitHub repository, MIT-licensed, originally
  copyrighted to a prior corporate entity operated by the same individual, since replaced).
- **Transferred technology:** retrieval/search architecture, evidence-bound reasoning
  patterns, chat/history API layer, rate-limiting, and the general product shape (frontend +
  Python API + one Supabase migration) that OpportunityGrid's technical foundation is being
  refactored from.
- **Destination entity:** RoyalGrid Technologies (Nigerian Business Name Reg. No. 9843389),
  via the `lifesnoggin888-svg/opportunitygrid` and `lifesnoggin888-svg/royalgrid-technologies`
  repositories.
- **Transfer/assignment document required:** YES — a written assignment or license from the
  IP owner to RoyalGrid Technologies has not been executed as of this document's creation.
  This checklist item is open.
- **Contributor review:** the source repository has a single identified author/operator; no
  third-party contributor claims have been identified as of this audit.
- **Third-party licenses:** the source repository's `package.json` / `requirements.txt`
  dependencies carry their own upstream open-source licenses (MIT/Apache/BSD-family, typical
  for the Next.js/Python ecosystem) and are unaffected by this transfer — they remain
  governed by their own license terms regardless of which entity operates the code.
- **Trademarks/domains:** "RoyalGrid" and "OpportunityGrid" are not filed trademarks as of
  this document's creation. No RoyalGrid-branded domain has been purchased.
- **Production credentials:** no credentials were moved as part of this transfer. `.env`
  files, API keys, and service-role credentials were explicitly excluded from every copy
  operation; new credentials must be provisioned fresh for any RoyalGrid/OpportunityGrid
  deployment.
- **Data ownership:** the source repository's Supabase migration (`private_grant_history`)
  defines schema only; no production data was copied as part of this transfer.

## Removal of prior branding (this repository)

The prior corporate name, contact email, and footer branding present in the source
`grant-scout` repository (`LICENSE`, `README.md`, `frontend/app/layout.tsx`) were identified
during the Phase 0 audit and are not carried into this repository. This repository's own
`LICENSE`, metadata, and content were authored fresh for RoyalGrid Technologies rather than
copied verbatim. This repository contains zero references to that prior entity's name, email
domain, or branding.

## Open items

- [ ] Execute a written IP assignment/license from the source IP owner to RoyalGrid
      Technologies.
- [ ] Confirm no third-party contributor has a claim on the source code.
- [ ] File trademark applications if/when the business decides to pursue them.
- [ ] Purchase a RoyalGrid-branded domain (outside GitHub/Vercel default subdomains).
