import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Company",
  description:
    "RoyalGrid Technologies is building the opportunity-access infrastructure for African businesses. Corporate and legal facts.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="RoyalGrid Technologies"
        body="An independent Nigerian venture building the opportunity-access infrastructure for African businesses."
      />

      <section className="border-b border-[var(--color-line)]">
        <div className="rg-container py-16">
          <div className="rg-reveal mx-auto max-w-2xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
              Thesis
            </p>
            <h2 className="font-serif mt-3 text-lg font-medium text-[var(--color-ink)] md:text-xl">
              An opportunity-access infrastructure company
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
              RoyalGrid Technologies is building the opportunity-access infrastructure for
              African businesses — turning fragmented funding, procurement, accelerator,
              export, supplier, and development-finance opportunities into a verified,
              structured, and actionable opportunity network.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
              Its flagship platform, OpportunityGrid, runs a discover, verify, match, qualify,
              prepare, and track pipeline so that businesses and the institutions that support
              them can act on opportunity, rather than search for it.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)]">
        <div className="rg-container py-16">
          <div className="mx-auto max-w-2xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
              Registry
            </p>
            <h2 className="font-serif mt-3 text-lg font-medium text-[var(--color-ink)] md:text-xl">
              Legal facts
            </h2>
            <span className="mt-4 inline-flex rg-index-tag">Registry // NG business name</span>
            <div className="rg-ledger mt-3">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-good)]" />
                Registry: NG business name 9843389
              </span>
              <span className="rg-ledger-sep" />
              <span>Independent entity — no parent company</span>
            </div>
            <div className="rg-card mt-3 overflow-hidden">
              <div className="flex items-center justify-between border-b border-[var(--color-line)] bg-[var(--color-paper)] px-6 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                  Governance parameter
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-good)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-good)]" />
                  Active
                </span>
              </div>
              <dl className="divide-y divide-[var(--color-line)] text-sm">
                <div className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">
                    Registered name
                  </dt>
                  <dd className="font-medium text-[var(--color-ink)]">RoyalGrid Technologies</dd>
                </div>
                <div className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">
                    Registration type
                  </dt>
                  <dd className="font-medium text-[var(--color-ink)]">Nigerian Business Name</dd>
                </div>
                <div className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">
                    Registration number
                  </dt>
                  <dd className="font-mono font-medium text-[var(--color-ink)]">9843389</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)]">
        <div className="rg-container py-16">
          <div className="rg-reveal mx-auto max-w-2xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
              Independence
            </p>
            <span className="mt-3 inline-flex rg-index-tag">Governance // no parent company</span>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
              RoyalGrid Technologies operates as an independent venture. It is not a subsidiary,
              division, or product line of any other company, and does not share branding,
              infrastructure ownership, or corporate positioning with any other entity.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="rg-container py-16">
          <div className="rg-reveal mx-auto max-w-2xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
              Team
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
              Founder information available on request.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
