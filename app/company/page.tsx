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
            <h2 className="text-lg font-medium text-[var(--color-ink)]">Thesis</h2>
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
          <div className="rg-card mx-auto max-w-2xl p-8">
            <h2 className="text-lg font-medium text-[var(--color-ink)]">Legal facts</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div className="flex flex-col gap-1 border-b border-[var(--color-line)] pb-5 sm:flex-row sm:justify-between">
                <dt className="text-[var(--color-muted)]">Registered name</dt>
                <dd className="font-medium text-[var(--color-ink)]">RoyalGrid Technologies</dd>
              </div>
              <div className="flex flex-col gap-1 border-b border-[var(--color-line)] pb-5 sm:flex-row sm:justify-between">
                <dt className="text-[var(--color-muted)]">Registration type</dt>
                <dd className="font-medium text-[var(--color-ink)]">Nigerian Business Name</dd>
              </div>
              <div className="flex flex-col gap-1 border-b border-[var(--color-line)] pb-5 sm:flex-row sm:justify-between">
                <dt className="text-[var(--color-muted)]">Registration number</dt>
                <dd className="font-medium text-[var(--color-ink)]">9843389</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                <dt className="text-[var(--color-muted)]">Note</dt>
                <dd className="max-w-sm text-[var(--color-ink)]">
                  RoyalGrid Technologies is a registered Business Name. It is not currently
                  described as a limited company (&quot;Limited&quot; or &quot;Ltd&quot;) or
                  corporation on this site, pending proof of incorporation.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section>
        <div className="rg-container py-16">
          <div className="rg-reveal mx-auto max-w-2xl">
            <h2 className="text-lg font-medium text-[var(--color-ink)]">Independence</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
              RoyalGrid Technologies operates as an independent venture. It is not a subsidiary,
              division, or product line of any other company, and does not share branding,
              infrastructure ownership, or corporate positioning with any other entity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
