import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "RoyalGrid Technologies' Nigeria-first, Africa-scale market roadmap for opportunity-access infrastructure.",
};

const PHASES = [
  {
    label: "Now",
    title: "Nigeria",
    body: "Initial source coverage, organization profiles, and matching logic are being built around the Nigerian regulatory and program landscape as the beachhead market.",
  },
  {
    label: "Next",
    title: "West Africa",
    body: "Extending source adapters and eligibility rules to additional West African jurisdictions once the Nigerian pipeline is verified end to end.",
  },
  {
    label: "Later",
    title: "Pan-African",
    body: "A multi-country data model and source-adapter architecture designed from day one to support broader African expansion as coverage and demand justify it.",
  },
];

export default function MarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Markets"
        title="Nigeria first. Architected for Africa."
        body="RoyalGrid does not treat Africa as one undifferentiated market. Each jurisdiction has its own registration types, agencies, and program landscape — the platform is built to model that, not flatten it."
      />

      <section className="border-b border-[var(--color-line)]">
        <div className="rg-container py-20">
          <div className="space-y-10">
            {PHASES.map((p, i) => (
              <div
                key={p.title}
                className="rg-reveal grid gap-4 border-b border-[var(--color-line)] pb-10 last:border-none md:grid-cols-12 md:gap-8"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="md:col-span-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-purple)]">
                    {p.label}
                  </span>
                  <h3 className="font-serif mt-2 text-xl text-[var(--color-ink)]">{p.title}</h3>
                </div>
                <div className="md:col-span-9">
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper-dim)]">
        <div className="rg-container py-16">
          <div className="rg-card p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
              On market sizing
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-ink)]">
              This site does not publish unverified figures for total addressable market,
              opportunity volume, or business counts. Market sizing will be published once it
              is backed by sourced, citable data.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
