import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How OpportunityGrid moves an opportunity from discovery to a tracked application, and how a business profile is built and matched.",
};

const JOURNEY = [
  {
    title: "1. Build a business profile",
    body: "An organization registers with structured attributes: country, registration type, company age, industry, revenue stage, employee size, geography, funding stage, certifications, export status, and required documents. Only attributes legitimately relevant to eligibility are collected.",
  },
  {
    title: "2. Opportunities are discovered and verified",
    body: "Source adapters retrieve opportunities from official APIs, permitted feeds, and public discovery channels. Each is captured with its issuer, source URL, publication and deadline dates, and jurisdiction — never invented.",
  },
  {
    title: "3. Matching against the profile",
    body: "Opportunities are compared against the organization profile and classified as likely eligible, potentially eligible, not enough evidence, or likely ineligible — with the reasoning traceable to specific requirements.",
  },
  {
    title: "4. Readiness checklist generated",
    body: "For opportunities worth pursuing, OpportunityGrid produces a checklist of what is needed: corporate documents, tax and compliance requirements, financial statements, pitch materials, certifications, and application questions, ordered against the actual deadline.",
  },
  {
    title: "5. Application tracked to outcome",
    body: "Each opportunity moves through a pipeline — discovered, qualified, preparing, submitted, won, lost, expired — so a business always knows where it stands, and RoyalGrid can measure whether the infrastructure is actually producing outcomes.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="From a fragmented landscape to a tracked application."
        body="OpportunityGrid is not a search engine. It is a structured pipeline that keeps a business profile, verified opportunities, and an application in one accountable system."
      />

      <section className="border-b border-[var(--color-line)]">
        <div className="rg-container py-20">
          <div className="mx-auto max-w-3xl space-y-12">
            {JOURNEY.map((j, i) => (
              <div
                key={j.title}
                className="rg-reveal flex gap-6"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="rg-badge font-serif text-base">{i + 1}</div>
                </div>
                <div className="rg-card flex-1 p-5">
                  <h3 className="text-lg font-medium text-[var(--color-ink)]">
                    {j.title.replace(/^\d+\.\s/, "")}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{j.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rg-royal-section rg-circuit">
        <div className="rg-scanline" />
        <div className="rg-container relative py-20">
          <div className="rg-glass rg-hud-frame mx-auto max-w-2xl p-8 text-center md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold-soft)]">
              A note on honesty
            </p>
            <h2 className="font-serif mt-4 text-2xl text-white md:text-3xl">
              Where the platform cannot verify something, it says so.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted-on-dark)]">
              OpportunityGrid is designed to refuse rather than guess. If a source does not
              publish a deadline, funding amount, or eligibility detail, that field stays
              empty. A business is told what is unverified, not given a confident-sounding
              fabrication.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
