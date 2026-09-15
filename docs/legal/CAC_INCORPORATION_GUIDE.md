# Business Name → Limited Company: Practical Guide

**Purpose:** turn "incorporation is a gap" into a concrete task list. This is a process guide,
not legal advice — confirm current fees and portal details on cac.gov.ng before paying
anything, since government fees change without notice and should never be assumed stable
from a document like this one.

## Why this matters for the Ventures Platform ask

RoyalGrid Technologies is currently registered as a **Business Name** (Registration No.
9843389) — this is the correct, honest status stated on the site's own Company page. A
Business Name cannot issue shares. Institutional pre-seed/seed investors write checks into
equity, which requires a **Limited Liability Company (Ltd)** registered with Nigeria's
Corporate Affairs Commission (CAC).

## What changes going from Business Name to Ltd

A Business Name and a Limited Company are two separate, independent registrations under
Nigerian law — upgrading is not an amendment of the existing Business Name. In practice this
usually means:

1. **New company registration** under a company name (which can match "RoyalGrid Technologies
   Limited" if available) — not a conversion of the existing Business Name record.
2. The existing Business Name (9843389) can be retained, retired, or used as a trading name —
   that's a business decision, not a legal requirement either way.

## Steps (via the CAC Company Registration Portal, cac.gov.ng)

1. **Name reservation** — search and reserve "RoyalGrid Technologies Limited" (or your
   preferred exact name) on the CAC portal. Reservations are typically valid for a limited
   window, so only do this once you're ready to file.
2. **Prepare incorporation documents:**
   - Memorandum and Articles of Association (MEMART) — CAC provides a standard template for
     simple company structures.
   - Particulars of at least one director and the company secretary (can be the same person
     for a small private company, confirm current CAC minimum-officer rules at filing time).
   - Particulars of shareholders and their share allocation — **this is where the
     founder-structure decision (you / wife / friend as CEOs) has to be resolved first**,
     since it directly determines share allocation on the incorporation filing itself.
   - Valid means of ID (NIN slip, international passport, or driver's license) for every
     director/shareholder.
   - A registered office address in Nigeria.
3. **Pay the filing fee** — amount depends on authorized share capital; confirm the current
   fee schedule on the CAC portal at filing time rather than assuming any figure here is
   still accurate.
4. **Submit and await Certificate of Incorporation** — CAC issues a certificate, CAC number,
   and status report (a digital equivalent of the old Memart certified copies) once approved.
5. **Post-incorporation:**
   - Open a corporate bank account under the new Ltd name (the current Due Diligence
     Checklist item "Bank account under the registered business name" should be revisited
     once this exists).
   - Update this repository's `docs/investor/DUE_DILIGENCE_CHECKLIST.md` to mark
     incorporation DONE, with the certificate number.
   - Update the Company page's "Legal facts" section (`app/company/page.tsx` in this repo) to
     reflect the new Ltd status instead of the current Business Name disclosure — this is a
     factual correction, not a marketing change, and should happen the same day incorporation
     completes so the public site never states stale information.

## The one blocking decision before any of this can start

Step 2's shareholder/share-allocation particulars cannot be filled in until the
founder-structure question is resolved. This guide can get you to the CAC portal in minutes,
but it cannot decide who holds what percentage of RoyalGrid Technologies Limited — that's
yours to make.
