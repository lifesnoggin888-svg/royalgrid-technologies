import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "For Businesses",
  description:
    "How African SMEs and startups use OpportunityGrid to discover, qualify for, and apply to funding, procurement, and growth opportunities.",
};

const TIERS = [
  {
    name: "SME",
    body: "Opportunity discovery, matching, readiness, and tracking for a single registered business.",
  },
  {
    name: "Professional / business development",
    body: "Multiple entities under one account, collaboration on applications, shared document readiness, and cross-entity pipelines.",
  },
];

export default function ForBusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Businesses"
        title="Know what you qualify for, and what it takes to apply."
        body="Whether you run one registered business or several, OpportunityGrid turns opportunity discovery from an ad-hoc search into a structured, ongoing process."
      />

      <section className="border-b border-[var(--color-line)]">
        <div className="rg-container py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-medium text-[var(--color-ink)]">What changes</h2>
              <ul className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--color-muted)]">
                <li>
                  <span className="text-[var(--color-ink)]">Before:</span> checking scattered
                  portals, social posts, and mailing lists, with no way to tell what is current
                  or credible.
                </li>
                <li>
                  <span className="text-[var(--color-ink)]">With OpportunityGrid:</span>{" "}
                  opportunities matched to your actual profile, each with its source, issuer,
                  and deadline attached.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-medium text-[var(--color-ink)]">What you build once</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--color-ink)]">
                <li>— A structured organization profile</li>
                <li>— A document readiness baseline</li>
                <li>— A saved-opportunities and application pipeline</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)]">
        <div className="rg-container py-16">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-purple)]">
            Business tiers
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {TIERS.map((t) => (
              <div key={t.name} className="rg-card p-7">
                <h3 className="text-base font-medium text-[var(--color-ink)]">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{t.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-[var(--color-muted)]">
            Pricing is not yet published. Subscription details will be confirmed before public
            billing launches.
          </p>
        </div>
      </section>

      <section>
        <div className="rg-container py-16">
          <Link
            href="/contact"
            className="rg-btn-primary"
          >
            Request early access
          </Link>
        </div>
      </section>
    </>
  );
}
