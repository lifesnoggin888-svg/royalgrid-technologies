import Link from "next/link";
import NetworkGraphic from "@/components/NetworkGraphic";

const FRAGMENTS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 12a8 8 0 1116 0 8 8 0 01-16 0z" />
        <path d="M12 8v4l3 2" strokeLinecap="round" />
      </svg>
    ),
    title: "Fragmentation",
    body: "Funding, procurement, accelerator, export, and development-finance opportunities are scattered across thousands of portals, agencies, and institutions — each with its own format, cadence, and language.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Verification",
    body: "A listing found on social media or a forwarded PDF carries no source, no issuer, no confirmed deadline. Businesses cannot tell what is current, expired, or fabricated.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18M7 7H3l3 7a4 4 0 006 0l3-7h-4M17 7h4l-3 7a4 4 0 01-6 0" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Eligibility",
    body: "Most opportunities list requirements in dense, jurisdiction-specific language. Determining fit against a real business profile takes hours a founder does not have.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 2h6v3H9zM8 10h8M8 14h8M8 18h5" strokeLinecap="round" />
      </svg>
    ),
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
      <section
        className="relative overflow-hidden border-b border-[var(--color-line)]"
        style={{
          background:
            "radial-gradient(1200px 480px at 15% -10%, rgba(108,63,201,0.16), transparent), radial-gradient(900px 400px at 100% 0%, rgba(201,162,74,0.14), transparent), var(--color-paper)",
        }}
      >
        <NetworkGraphic className="pointer-events-none absolute -right-10 top-8 hidden h-auto w-[420px] lg:block" />
        <div className="rg-container relative grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-8">
            <p className="rg-reveal rg-reveal-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-purple-soft)]">
              RoyalGrid Technologies
            </p>
            <h1 className="rg-reveal rg-reveal-2 font-serif mt-5 text-4xl leading-[1.1] text-[var(--color-ink)] md:text-6xl">
              <span className="rg-metallic">Opportunity</span> should not depend on knowing
              where to look.
            </h1>
            <p className="rg-reveal rg-reveal-3 mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
              African businesses operate across a fragmented landscape of grants, procurement,
              accelerators, supplier programs, export initiatives, and development-finance
              opportunities. RoyalGrid Technologies is building the infrastructure that
              discovers, verifies, and organizes those opportunities — then helps businesses
              determine what they qualify for and what they need to act.
            </p>
            <div className="rg-reveal rg-reveal-4 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://opportunitygrid.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="rg-btn-primary rg-ripple"
              >
                Explore OpportunityGrid
              </a>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-sm border border-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold)]/10"
              >
                How It Works
              </Link>
            </div>
          </div>
          <div className="rg-reveal rg-reveal-4 md:col-span-4 md:pt-2">
            <div className="rg-glass rg-hud-frame p-6">
              <div className="flex items-center gap-2">
                <span className="rg-ping relative inline-block h-2 w-2 rounded-full bg-[#4ade80]" />
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
                  System status — live
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white">
                Discover&nbsp;→&nbsp;Verify&nbsp;→&nbsp;Match&nbsp;→&nbsp;Qualify&nbsp;→&nbsp;Prepare&nbsp;→&nbsp;Track
                runs end to end today, with one real Nigerian government data source connected.
              </p>
              <div className="mt-4 h-px" style={{ background: "rgba(201,162,74,0.25)" }} />
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
                Beachhead
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted-on-dark)]">Nigeria-first, architected for Africa-scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)]">
        <div className="rg-container py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-purple)]">
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

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {FRAGMENTS.map((f) => (
              <div key={f.title} className="rg-card p-7">
                <span className="rg-badge">{f.icon}</span>
                <h3 className="mt-4 text-base font-medium text-[var(--color-ink)]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure / model */}
      <section className="rg-royal-section rg-circuit">
        <div className="rg-scanline" />
        <div className="rg-container relative py-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold-soft)]">
            The RoyalGrid infrastructure
          </p>
          <h2 className="font-serif mt-4 max-w-2xl text-2xl text-white md:text-3xl">
            One operating model, from discovery to a tracked application.
          </h2>

          <div className="relative mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            <div
              className="pointer-events-none absolute left-0 right-0 top-6 hidden lg:block"
              style={{ height: 2, background: "linear-gradient(90deg, transparent, var(--color-gold) 10%, var(--color-gold) 90%, transparent)" }}
              aria-hidden
            />
            {["Discover", "Verify", "Match", "Qualify", "Prepare", "Track"].map((step, i) => (
              <div key={step} className="relative flex flex-col items-center text-center">
                <div className={i === 0 ? "rg-ping relative" : "relative"}>
                  <div
                    className="rg-hex relative z-10 flex h-12 w-12 items-center justify-center font-serif text-sm font-semibold"
                    style={{
                      background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-soft))",
                      color: "var(--color-purple-deep)",
                      boxShadow: "0 0 0 6px rgba(10,6,18,1), 0 0 24px rgba(201,162,74,0.55)",
                    }}
                  >
                    {i + 1}
                  </div>
                </div>
                <span className="mt-3 text-sm font-medium text-white">{step}</span>
              </div>
            ))}
          </div>

          <p className="mt-16 max-w-2xl text-sm leading-relaxed text-[var(--color-muted-on-dark)]">
            OpportunityGrid, RoyalGrid&apos;s flagship platform, runs this model against
            approved public sources — every opportunity retains its issuer, source URL,
            retrieval date, and confidence level. The system never invents eligibility or
            fabricates a missing data point.
          </p>
          <Link
            href="/platform"
            className="mt-6 inline-flex text-sm font-medium text-[var(--color-gold-soft)] hover:text-white"
          >
            See the full platform architecture &rarr;
          </Link>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)]">
        <div className="rg-container py-20">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-purple)]">
            Two customer surfaces
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {USE_CASES.map((u) => (
              <Link
                key={u.href}
                href={u.href}
                className="rg-card group flex flex-col justify-between p-8"
              >
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-purple)]">
                    {u.tag}
                  </span>
                  <h3 className="font-serif mt-3 text-xl text-[var(--color-ink)]">{u.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{u.body}</p>
                </div>
                <span className="mt-6 text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-purple)]">
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
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-purple)]">
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
                className="mt-6 inline-flex text-sm font-medium text-[var(--color-purple)] hover:text-[var(--color-clay)]"
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
