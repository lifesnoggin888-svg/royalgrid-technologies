import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Platform — OpportunityGrid",
  description:
    "OpportunityGrid is RoyalGrid Technologies' flagship platform: a discover-verify-match-qualify-prepare-track infrastructure for African opportunity access.",
};

const PIPELINE = [
  {
    step: "Discover",
    body: "Retrieve current opportunities from approved public sources — official program pages, agency portals, and permitted feeds.",
  },
  {
    step: "Verify",
    body: "Capture source, issuer, URL, publication and deadline dates, jurisdiction, and requirements as structured, citable evidence.",
  },
  {
    step: "Match",
    body: "Compare each opportunity against a structured organization profile: sector, stage, geography, size, and documentation status.",
  },
  {
    step: "Qualify",
    body: "Classify fit as likely eligible, potentially eligible, not enough evidence, or likely ineligible. The system never invents eligibility.",
  },
  {
    step: "Prepare",
    body: "Generate a readiness checklist — corporate documents, compliance requirements, financial statements, certifications, and application questions.",
  },
  {
    step: "Track",
    body: "Move an opportunity through a real pipeline: discovered, qualified, preparing, submitted, won, lost, expired.",
  },
];

const PRINCIPLES = [
  {
    title: "Evidence-bound, not generative",
    body: "Every opportunity retains its source name, source URL, retrieval date, and a confidence rating. Where information is missing, the field is left null — never inferred or fabricated.",
  },
  {
    title: "Refusal over guessing",
    body: "When evidence is insufficient to determine eligibility, OpportunityGrid says so explicitly rather than producing a confident but unsupported answer.",
  },
  {
    title: "Source-adapter architecture",
    body: "Discovery is not hardcoded to a single provider. Official APIs, permitted RSS/feeds, and public web discovery are treated as interchangeable, auditable source adapters — each required to preserve provenance and respect robots and terms-of-use restrictions.",
  },
  {
    title: "Demonstration data is labeled",
    body: "Where live source coverage is still being built out, demonstration data is visibly and permanently labeled as such, and never presented as a live funding recommendation.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="OpportunityGrid"
        body="RoyalGrid Technologies' flagship platform: infrastructure that discovers, verifies, and organizes African business opportunities, then converts fragmented information into an evidence-backed path from discovery to application readiness."
      />

      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)]">
        <div className="rg-container py-16">
          <div className="rg-card p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
              Current stage
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-ink)]">
              Live: the full discover-verify-match-qualify-prepare-track pipeline is working
              end to end, including one real, live African source — Nigeria&apos;s Bureau of
              Public Procurement open-contracting data. Other opportunity classes (grants,
              accelerators, export programs) currently run on clearly labeled demonstration
              records while their own source integrations are built.
            </p>
            <a
              href="https://opportunitygrid.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-sm bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-paper)] hover:bg-[var(--color-ink-soft)]"
            >
              Launch OpportunityGrid &rarr;
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)]">
        <div className="rg-container py-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-purple)]">
            Operating model
          </p>
          <h2 className="font-serif mt-4 max-w-2xl text-2xl text-[var(--color-ink)] md:text-3xl">
            Six stages, one continuous pipeline.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {PIPELINE.map((p, i) => (
              <div key={p.step} className="rg-card p-7">
                <span className="font-serif text-sm text-[var(--color-purple)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-medium text-[var(--color-ink)]">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)]">
        <div className="rg-container py-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-purple)]">
            Design principles
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="border-l-2 border-[var(--color-purple)] pl-6">
                <h3 className="text-base font-medium text-[var(--color-ink)]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="rg-container py-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-purple)]">
            Opportunity classes at launch
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Grants",
              "Accelerators",
              "Procurement / tenders",
              "Corporate supplier programs",
              "Export programs",
              "Development finance",
              "Innovation challenges",
              "SME support programs",
            ].map((c) => (
              <span
                key={c}
                className="rounded-full border border-[var(--color-line)] px-4 py-2 text-sm text-[var(--color-ink)]"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/how-it-works"
              className="rg-btn-primary"
            >
              See how it works end to end
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm border border-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-paper-dim)]"
            >
              Request early access
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
