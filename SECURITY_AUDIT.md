# Security Audit — royalgrid-technologies

**Scope:** this repository's working tree, prior to first push. No secret values are
included in this document.

## Method

```
grep -riE "GROQ_API_KEY|OPENAI_API_KEY|GOOGLE_API_KEY|SERPAPI_KEY|SUPABASE_SERVICE_ROLE_KEY|
DATABASE_URL|JWT_SECRET|RESEND_API_KEY|STRIPE_SECRET_KEY|sk-[a-zA-Z0-9]{20,}|
AIza[0-9A-Za-z_-]{35}|ghp_[a-zA-Z0-9]{30,}|github_pat_" . \
  --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.next

find . -iname ".env*" -not -path "*/node_modules/*" -not -path "*/.next/*"

grep -r "NEXT_PUBLIC_" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.next

grep -ril "arknet" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.next
```

## Results

| Check | Result |
|---|---|
| Committed secret-pattern matches | None found |
| `.env` / `.env.*` files present | None present (no environment file created — this repo does not yet use server env vars) |
| `NEXT_PUBLIC_*` variables in use | None — no client-exposed env vars defined |
| "ArkNet" references (any case) | None on any production-facing page, component, metadata, or public doc. One historical mention was found in `docs/legal/IP_TRANSFER_CHECKLIST.md` and rewritten to remove the literal name while preserving the provenance fact. |
| Hardcoded API keys/tokens in source | None |
| `.gitignore` present | Yes — default `create-next-app` ignore covers `node_modules`, `.next`, `.env*`, build output |

## Notes for Phase 2 (OpportunityGrid)

This repository does not yet talk to Supabase, SerpApi, or any LLM provider, so there is
nothing to leak today. When Phase 2 introduces `SUPABASE_SERVICE_ROLE_KEY`, `SERPAPI_KEY`,
or an LLM provider key:

- All such keys must be read server-side only (`process.env.X` inside API routes / server
  actions), never prefixed `NEXT_PUBLIC_`.
- `.env.example` should ship with empty placeholders only, matching the pattern already used
  in the source `grant-scout` prototype's `.env.example`.
- Row Level Security must be enabled on every new Supabase table before it is used from a
  client-reachable code path.

## Conclusion

No secrets, credentials, or prior-company branding are present in this repository as pushed.
