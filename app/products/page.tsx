import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Products",
  description:
    "RoyalGrid Technologies' product portfolio: OpportunityGrid, the flagship opportunity-access platform, and CityOS, a flood and water-risk governance proof-of-concept.",
};

const PRODUCTS = [
  {
    tag: "Flagship",
    name: "OpportunityGrid",
    href: "https://opportunitygrid.vercel.app",
    domain: "Opportunity-access infrastructure",
    body: "Discovers, verifies, and structures grants, procurement, accelerator, export, and development-finance opportunities, then matches them against a business's real profile — discover, verify, match, qualify, prepare, track.",
    status: "In active development, Nigeria-first",
    signal: "5 opportunity categories // 6-stage pipeline",
  },
  {
    tag: "Second product",
    name: "CityOS",
    href: "https://cityos-source.vercel.app",
    domain: "Flood & water-risk governance",
    body: "A predictive flood and water-risk governance console. It simulates monitored city zones, scores flood risk from rainfall and river-level telemetry, and auto-actuates pumps and barriers before a threshold is crossed — with an operator retaining pause/override authority and every action logged to an immutable audit trail.",
    status: "Deployed proof-of-concept — a working autonomous governance loop, not a multi-city production deployment",
    signal: "Supabase pg_cron tick loop // 60-second orchestration cycle",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Two products, one operating model: verified data, structured action."
        body="RoyalGrid Technologies builds infrastructure that turns fragmented, hard-to-verify information into a structured system an operator or business can act on — first for opportunity access, now extended to flood and water-risk governance."
      />

      <section className="border-b border-[var(--color-line)]">
        <div className="rg-container py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="rg-card flex flex-col justify-between p-8">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-purple)]">
                      {p.tag}
                    </span>
                    <span className="rg-index-tag">{p.domain}</span>
                  </div>
                  <h2 className="font-serif mt-4 text-2xl text-[var(--color-ink)]">{p.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{p.body}</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[var(--color-gold-soft)]">
                    {p.status}
                  </p>
                  <p className="rg-diagnostic-line mt-2">{p.signal}</p>
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rg-btn-primary rg-ripple mt-6 inline-flex w-fit"
                >
                  Open {p.name} &rarr;
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 border border-[var(--color-line)] p-8" style={{ borderRadius: "var(--radius-sharp)" }}>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
              What this page does not claim
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--color-ink)]">
              <li>— No claim that CityOS is running in any real city or municipal deployment today.</li>
              <li>— No fabricated customer counts, city names, or transaction volumes for either product.</li>
              <li>— Both products are independent RoyalGrid Technologies properties — no third-party branding or affiliation.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
