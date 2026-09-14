import Link from "next/link";

const FRAGMENTS = [
  {
    n: "01",
    title: "Fragmentation",
    body: "Funding, procurement, accelerator, export, and development-finance opportunities are scattered across thousands of portals, agencies, and institutions — each with its own format, cadence, and language.",
  },
  {
    n: "02",
    title: "Verification",
    body: "A listing found on social media or a forwarded PDF carries no source, no issuer, no confirmed deadline. Businesses cannot tell what is current, expired, or fabricated.",
  },
  {
    n: "03",
    title: "Eligibility",
    body: "Most opportunities list requirements in dense, jurisdiction-specific language. Determining fit against a real business profile takes hours a founder does not have.",
  },
  {
    n: "04",
    title: "Application readiness",
    body: "Even a qualified business often misses a deadline because the document, certification, or financial statement it needed was not identified early enough to prepare.",
  },
];

const USE_CASES = [
  {
    tag: "For Businesses",
    href: "/for-businesses",
    title: "Discovery and readiness for a single company",
    body: "A structured profile matched against verified opportunities, with a readiness checklist and an application pipeline — not a folder of bookmarked links.",
  },
  {
    tag: "For Institutions",
    href: "/for-institutions",
    title: "Portfolio-level opportunity intelligence",
    body: "Banks, accelerators, and development organizations use RoyalGrid to match opportunities against an entire portfolio or cohort, not one company at a time.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[var(--color-line)]">
        <div className="rg-container grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
              RoyalGrid Technologies
            </p>
            <h1 className="font-serif mt-5 text-4xl leading-[1.1] text-[var(--color-ink)] md:text-6xl">
              Opportunity should not depend on knowing where to look.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
              African businesses operate across a fragmented landscape of grants, procurement,
              accelerators, supplier programs, export initiatives, and development-finance
              opportunities. RoyalGrid Technologies is building the infrastructure that
              discovers, verifies, and organizes those opportunities — then helps businesses
              determine what they qualify for and what they need to act.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://opportunitygrid.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-paper)] transition-colors hover:bg-[var(--color-ink-soft)]"
              >
                Explore OpportunityGrid
              </a>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-sm border border-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-paper-dim)]"
              >
                How It Works
              </Link>
            </div>
          </div>
          <div className="md:col-span-4 md:pt-2">
            <div className="rounded-sm border border-[var(--color-line)] bg-[var(--color-paper-dim)] p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                Current stage
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]">
                Product infrastructure in development. Technical foundation: live,
                evidence-bound opportunity discovery technology already operating.
              </p>
              <div className="mt-4 h-px bg-[var(--color-line)]" />
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                Beachhead
              </p>
              <p className="mt-2 text-sm text-[var(--color-ink)]">Nigeria-first, architected for Africa-scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)]">
        <div className="rg-container py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
              The problem
            </p>
            <h2 className="font-serif mt-4 text-2xl text-[var(--color-ink)] md:text-3xl">
              Businesses routinely miss opportunities they qualify for.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
              Not necessarily because they are unqualified — but because discovery,
              verification, eligibility, and application requirements are fragmented across
              disconnected systems.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
            {FRAGMENTS.map((f) => (
              <div key={f.n} className="bg-[var(--color-paper)] p-7">
                <span className="font-serif text-sm text-[var(--color-gold)]">{f.n}</span>
                <h3 className="mt-3 text-base font-medium text-[var(--color-ink)]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure / model */}
      <section className="border-b border-[var(--color-line)]">
        <div className="rg-container py-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
            The RoyalGrid infrastructure
          </p>
          <h2 className="font-serif mt-4 max-w-2xl text-2xl text-[var(--color-ink)] md:text-3xl">
            One operating model, from discovery to a tracked application.
          </h2>

          <div className="mt-12 flex flex-wrap items-stretch gap-3">
            {["Discover", "Verify", "Match", "Qualify", "Prepare", "Track"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <div className="rounded-sm border border-[var(--color-line)] bg-[var(--color-paper-dim)] px-5 py-4">
                  <span className="text-sm font-medium text-[var(--color-ink)]">{step}</span>
                </div>
                {i < arr.length - 1 && (
                  <span className="hidden text-[var(--color-line)] sm:inline" aria-hidden>
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
            OpportunityGrid, RoyalGrid&apos;s flagship platform, runs this model against
            approved public sources — every opportunity retains its issuer, source URL,
            retrieval date, and confidence level. The system never invents eligibility or
            fabricates a missing data point.
          </p>
          <Link
            href="/platform"
            className="mt-6 inline-flex text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-clay)]"
          >
            See the full platform architecture &rarr;
          </Link>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)]">
        <div className="rg-container py-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
            Two customer surfaces
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {USE_CASES.map((u) => (
              <Link
                key={u.href}
                href={u.href}
                className="group flex flex-col justify-between rounded-sm border border-[var(--color-line)] bg-[var(--color-paper)] p-8 transition-colors hover:border-[var(--color-gold)]"
              >
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-gold)]">
                    {u.tag}
                  </span>
                  <h3 className="font-serif mt-3 text-xl text-[var(--color-ink)]">{u.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{u.body}</p>
                </div>
                <span className="mt-6 text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-gold)]">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap strip */}
      <section>
        <div className="rg-container py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
                Nigeria-first, Africa-scale
              </p>
              <h2 className="font-serif mt-4 text-2xl text-[var(--color-ink)] md:text-3xl">
                Built for one market first, architected for many.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                RoyalGrid begins with Nigerian grants, procurement, and development-finance
                sources, with a data model and source-adapter architecture designed for
                multi-country expansion from day one.
              </p>
              <Link
                href="/markets"
                className="mt-6 inline-flex text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-clay)]"
              >
                View market roadmap &rarr;
              </Link>
            </div>
            <div className="md:col-span-7">
              <div className="rounded-sm border border-[var(--color-line)] p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                  What this site does not claim
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--color-ink)]">
                  <li>— No fabricated customer counts, funding totals, or market-share figures.</li>
                  <li>— No fake press, logos, or testimonials.</li>
                  <li>— No claim that OpportunityGrid is fully live across Africa today.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
