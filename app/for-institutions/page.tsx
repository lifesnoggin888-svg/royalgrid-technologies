import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "For Institutions",
  description:
    "How banks, accelerators, development organizations, and enterprise supplier programs use RoyalGrid to match opportunities across a portfolio.",
};

const AUDIENCES = [
  "Banks",
  "Accelerators",
  "Development organizations",
  "Chambers of commerce",
  "Enterprise supplier programs",
  "Government SME programs",
];

const CAPABILITIES = [
  {
    title: "Portfolio / company opportunity matching",
    body: "Match relevant opportunities against every company in a portfolio or cohort at once, instead of one relationship manager searching case by case.",
  },
  {
    title: "Opportunity feeds",
    body: "A structured, filterable feed of verified opportunities relevant to an institution's sector and geography focus.",
  },
  {
    title: "Eligibility intelligence",
    body: "Aggregate visibility into which portfolio companies are eligible, potentially eligible, or under-documented for a given class of opportunity.",
  },
  {
    title: "Cohort dashboards",
    body: "Track how an accelerator cohort or lending portfolio is progressing through discovery, qualification, and application.",
  },
  {
    title: "API access",
    body: "Programmatic access to verified opportunity data and matching results for institutions integrating RoyalGrid into their own systems.",
  },
  {
    title: "Opportunity analytics",
    body: "Aggregate reporting on opportunity flow, freshness, and outcomes relevant to an institution's mandate.",
  },
];

export default function ForInstitutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Institutions"
        title="Portfolio-level opportunity intelligence."
        body="RoyalGrid is architected as a second customer surface for institutions that support many businesses at once — not just individual companies."
      />

      <section className="border-b border-[var(--color-line)]">
        <div className="rg-container py-16">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-purple)]">
            Who this is for
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {AUDIENCES.map((a) => (
              <span
                key={a}
                className="rounded-full border border-[var(--color-line)] px-4 py-2 text-sm text-[var(--color-ink)]"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)]">
        <div className="rg-container py-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-purple)]">
            Longer-term institutional capability
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
            These capabilities are being designed into the schema and API boundaries now, so
            they can be added cleanly as institutional demand is validated — they are not yet
            fully built.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="rg-card p-7">
                <h3 className="text-base font-medium text-[var(--color-ink)]">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="rg-container py-16">
          <Link
            href="/contact"
            className="rg-btn-primary"
          >
            Discuss institutional access
          </Link>
        </div>
      </section>
    </>
  );
}
