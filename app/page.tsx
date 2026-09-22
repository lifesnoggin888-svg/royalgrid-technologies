import Image from "next/image";
import Link from "next/link";

const CITYOS_LOOP = [
  { step: "Monitor", body: "Rainfall + river-level telemetry, per zone." },
  { step: "Score risk", body: "Flood risk scored against threshold." },
  { step: "Auto-actuate", body: "Pumps and barriers act before breach." },
  { step: "Operator override", body: "Pause/override authority retained." },
  { step: "Audit trail", body: "Every action logged, immutable." },
];

const FRAGMENTS = [
  {
    signal: "Root: no shared taxonomy across issuers",
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
    signal: "Root: no consistent issuer, date, or evidence",
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
    signal: "Root: eligibility text, not a structured profile match",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18M7 7H3l3 7a4 4 0 006 0l3-7h-4M17 7h4l-3 7a4 4 0 01-6 0" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Eligibility",
    body: "Most opportunities list requirements in dense, jurisdiction-specific language. Determining fit against a real business profile takes hours a founder does not have.",
  },
  {
    signal: "Root: no early checklist for what to prepare",
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

const COVERAGE = [
  {
    category: "Grants",
    description: "Non-repayable funding from government agencies, foundations, and development programs.",
    signal: "Issuer + deadline + eligibility criteria",
  },
  {
    category: "Procurement",
    description: "Public and institutional tenders requiring a registered, qualified supplier.",
    signal: "Issuer + tender reference + submission deadline",
  },
  {
    category: "Accelerator programs",
    description: "Structured cohorts offering funding, mentorship, or market access over a fixed term.",
    signal: "Program operator + cohort dates + application criteria",
  },
  {
    category: "Export initiatives",
    description: "Programs supporting cross-border trade, certification, or export finance.",
    signal: "Issuing body + facility terms + eligibility criteria",
  },
  {
    category: "Development finance",
    description: "Concessional or blended capital from development-finance institutions.",
    signal: "Institution + instrument type + eligibility criteria",
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
    body: "Banks, accelerators, and development organizations use OpportunityGrid to match opportunities against an entire portfolio or cohort, not one company at a time.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — full-bleed cinematic poster background */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/hero-poster.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Darken + gradient the poster so headline/subhead/CTA stay
              readable at full contrast — left-to-right and bottom-up, not a
              flat scrim slapped over the image. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(3,6,10,0.96) 0%, rgba(3,6,10,0.86) 32%, rgba(3,6,10,0.55) 58%, rgba(3,6,10,0.32) 100%), linear-gradient(0deg, rgba(3,6,10,0.92) 0%, rgba(3,6,10,0.15) 42%, transparent 70%)",
            }}
          />
        </div>

        <div className="rg-container relative py-24 md:py-36">
          <p className="rg-reveal font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
            RoyalGrid Technologies // Governance & opportunity-access infrastructure
          </p>
          <div className="mt-8 grid min-w-0 grid-cols-1 gap-10 md:grid-cols-12">
            <div className="min-w-0 md:col-span-8">
              <h1 className="rg-reveal rg-reveal-1 font-serif text-4xl leading-[1.08] font-semibold text-white md:text-6xl">
                <span className="rg-metallic-dark">Risk</span> should be governed before it
                becomes a crisis.
              </h1>
              <p className="rg-reveal rg-reveal-3 mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted-on-dark)] md:text-lg">
                RoyalGrid Technologies builds infrastructure that acts. CityOS, our lead product,
                is a predictive flood and water-risk governance console — it scores risk from live
                rainfall and river-level telemetry and auto-actuates pumps and barriers before a
                threshold is crossed, with an operator retaining pause/override authority at all
                times. OpportunityGrid, our opportunity-access platform, discovers and verifies
                the funding, procurement, and development-finance opportunities African businesses
                qualify for.
              </p>
              <div className="rg-reveal rg-reveal-4 mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://cityos-nu.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rg-btn-primary rg-ripple"
                >
                  Open CityOS
                </a>
                <a
                  href="https://opportunitygrid.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rg-btn-ghost-dark"
                >
                  Explore OpportunityGrid
                </a>
              </div>
              <div className="rg-reveal rg-reveal-4 mt-6 flex flex-wrap gap-2.5">
                <span className="rg-chip">
                  <span className="rg-chip-dot" />
                  Two flagship products
                </span>
                <span className="rg-chip">
                  <span className="rg-chip-dot" />
                  Autonomous governance loop
                </span>
                <span className="rg-chip">
                  <span className="rg-chip-dot" />
                  Nigeria-first, Africa-scale
                </span>
              </div>
            </div>
            <div className="rg-reveal rg-reveal-4 min-w-0 md:col-span-4 md:pt-2">
              <div className="rg-glass rg-hud-frame p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="rg-ping relative inline-block h-2 w-2 rounded-full" style={{ background: "var(--color-good)" }} />
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
                      CityOS — system status
                    </p>
                  </div>
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-on-dark)]"
                    style={{ border: "1px solid rgba(34,211,238,0.3)", padding: "2px 6px", borderRadius: "3px" }}
                  >
                    Deployed PoC
                  </span>
                </div>
                <div className="mt-4">
                  <div className="rg-status-row">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted-on-dark)]">
                      Governance loop
                    </span>
                    <span className="font-mono text-[11.5px] leading-snug text-white break-words">
                      Monitor → Score risk → Auto-actuate → Override → Audit
                    </span>
                  </div>
                  <div className="rg-status-row">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted-on-dark)]">
                      Orchestration
                    </span>
                    <span className="font-mono text-[11.5px] leading-snug text-white">
                      Supabase pg_cron // 60-second tick
                    </span>
                  </div>
                  <div className="rg-status-row">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted-on-dark)]">
                      Operator authority
                    </span>
                    <span className="font-mono text-[11.5px] leading-snug text-white">
                      Pause / override retained
                    </span>
                  </div>
                  <div className="rg-status-row">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted-on-dark)]">
                      Second product
                    </span>
                    <span className="font-mono text-[11.5px] leading-snug text-white">
                      OpportunityGrid — opportunity access
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-product showcase — CityOS leads, OpportunityGrid second */}
      <section className="border-b border-[var(--color-line)]">
        <div className="rg-container py-20">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
            The RoyalGrid portfolio
          </p>
          <h2 className="font-serif mt-4 max-w-2xl text-2xl text-[var(--color-ink)] md:text-3xl">
            Two products, one operating model: verified signal, structured action.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-12">
            {/* CityOS — lead product, larger card */}
            <div className="rg-card flex flex-col justify-between p-8 md:col-span-7">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-gold-soft)]">
                    Lead product
                  </span>
                  <span className="rg-index-tag">Flood & water-risk governance</span>
                </div>
                <h3 className="font-serif mt-4 text-2xl text-[var(--color-ink)] md:text-3xl">CityOS</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
                  A predictive flood and water-risk governance console. It simulates monitored
                  city zones, scores flood risk from rainfall and river-level telemetry, and
                  auto-actuates pumps and barriers before a threshold is crossed — with an
                  operator retaining pause/override authority and every action logged to an
                  immutable audit trail.
                </p>
                <p className="mt-4 text-xs font-medium italic text-[var(--color-gold-soft)]">
                  Deployed proof-of-concept — a working autonomous governance loop, not a
                  multi-city production deployment
                </p>
                <p className="rg-diagnostic-line">
                  Supabase pg_cron tick loop // 60-second orchestration cycle
                </p>
              </div>
              <a
                href="https://cityos-nu.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="rg-btn-primary rg-ripple mt-6 inline-flex w-fit"
              >
                Open CityOS &rarr;
              </a>
            </div>

            {/* OpportunityGrid — second-listed product */}
            <div className="rg-card flex flex-col justify-between p-8 md:col-span-5">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-purple)]">
                    Second product
                  </span>
                  <span className="rg-index-tag">Opportunity-access infrastructure</span>
                </div>
                <h3 className="font-serif mt-4 text-2xl text-[var(--color-ink)]">OpportunityGrid</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  OpportunityGrid discovers, verifies, and structures funding, procurement,
                  accelerator, export, and development-finance opportunities for African
                  businesses, then matches each one against a business&rsquo;s real profile through
                  a Discover → Verify → Match → Qualify → Prepare → Track pipeline — turning a
                  scattered, unverifiable landscape into a working opportunity queue.
                </p>
                <p className="mt-4 text-xs font-medium italic text-[var(--color-purple-soft)]">
                  In active development — a live, working pipeline running on one connected data
                  source, not a claim of nationwide coverage or a fixed customer count
                </p>
                <p className="rg-diagnostic-line">
                  6-stage pipeline // 1 connected data source (Nigerian government)
                </p>
              </div>
              <a
                href="https://opportunitygrid.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="rg-btn-primary rg-ripple mt-6 inline-flex w-fit"
              >
                Explore OpportunityGrid &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How CityOS works — governance loop */}
      <section className="rg-royal-section rg-circuit">
        <div className="rg-scanline" />
        <div className="rg-container relative py-20">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
            How CityOS works
          </p>
          <h2 className="font-serif mt-4 max-w-2xl text-2xl text-white md:text-3xl">
            An autonomous governance loop, with a human always able to stop it.
          </h2>

          <div className="relative mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            <div
              className="pointer-events-none absolute left-0 right-0 top-6 hidden lg:block"
              style={{ height: 2, background: "linear-gradient(90deg, transparent, var(--color-gold) 10%, var(--color-gold) 90%, transparent)" }}
              aria-hidden
            />
            {CITYOS_LOOP.map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-center text-center">
                <div className={i === 0 ? "rg-ping relative" : "relative"}>
                  <div
                    className="rg-hex relative z-10 flex h-12 w-12 items-center justify-center font-mono text-sm font-semibold"
                    style={{
                      background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-soft))",
                      color: "var(--color-purple-deep)",
                      boxShadow: "0 0 0 6px rgba(3,6,10,1), 0 0 24px rgba(34,211,238,0.55)",
                    }}
                  >
                    {i + 1}
                  </div>
                </div>
                <span className="mt-3 text-sm font-medium text-white">{s.step}</span>
                <span className="mt-1 font-mono text-xs leading-snug text-[var(--color-muted-on-dark)]">
                  {s.body}
                </span>
              </div>
            ))}
          </div>

          <a
            href="https://cityos-nu.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-14 inline-flex text-sm font-medium text-[var(--color-gold-soft)] hover:text-white"
          >
            Open CityOS &rarr;
          </a>
        </div>
      </section>

      {/* OpportunityGrid — the problem */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)]">
        <div className="rg-container py-20">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-purple-soft)]">
              OpportunityGrid // The problem
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
            {FRAGMENTS.map((f, i) => (
              <div key={f.title} className="rg-card p-7">
                <div className="flex items-start justify-between">
                  <span className="rg-badge">{f.icon}</span>
                  <span className="rg-index-tag">Friction 0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-base font-medium text-[var(--color-ink)]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{f.body}</p>
                <p className="rg-diagnostic-line">{f.signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OpportunityGrid — infrastructure / model */}
      <section className="rg-royal-section rg-circuit">
        <div className="rg-scanline" />
        <div className="rg-container relative py-20">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-soft)]">
            OpportunityGrid // The operating model
          </p>
          <h2 className="font-serif mt-4 max-w-2xl text-2xl text-white md:text-3xl">
            One operating model, from discovery to a tracked application.
          </h2>

          <div className="relative mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            <div
              className="pointer-events-none absolute left-0 right-0 top-6 hidden lg:block"
              style={{ height: 2, background: "linear-gradient(90deg, transparent, var(--color-gold) 10%, var(--color-gold) 90%, transparent)" }}
              aria-hidden
            />
            {[
              { step: "Discover", body: "Pulled from approved sources." },
              { step: "Verify", body: "Issuer, dates, evidence." },
              { step: "Match", body: "Against your profile." },
              { step: "Qualify", body: "No invented eligibility." },
              { step: "Prepare", body: "A real readiness checklist." },
              { step: "Track", body: "To submitted, won, or lost." },
            ].map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-center text-center">
                <div className={i === 0 ? "rg-ping relative" : "relative"}>
                  <div
                    className="rg-hex relative z-10 flex h-12 w-12 items-center justify-center font-mono text-sm font-semibold"
                    style={{
                      background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-soft))",
                      color: "var(--color-purple-deep)",
                      boxShadow: "0 0 0 6px rgba(3,6,10,1), 0 0 24px rgba(34,211,238,0.55)",
                    }}
                  >
                    {i + 1}
                  </div>
                </div>
                <span className="mt-3 text-sm font-medium text-white">{s.step}</span>
                <span className="mt-1 font-mono text-xs leading-snug text-[var(--color-muted-on-dark)]">
                  {s.body}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/platform"
            className="mt-14 inline-flex text-sm font-medium text-[var(--color-gold-soft)] hover:text-white"
          >
            See the full platform architecture &rarr;
          </Link>
        </div>
      </section>

      {/* Coverage taxonomy */}
      <section className="border-b border-[var(--color-line)]">
        <div className="rg-container py-20">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-purple-soft)]">
            OpportunityGrid // Coverage taxonomy
          </p>
          <h2 className="font-serif mt-4 max-w-2xl text-2xl text-[var(--color-ink)] md:text-3xl">
            What OpportunityGrid is built to structure.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
            Five categories of opportunity, each defined by a real issuer and a real deadline —
            this describes the system&rsquo;s taxonomy, not a count of live transactions.
          </p>
          <span className="mt-6 inline-flex rg-index-tag">Taxonomy // 5 categories</span>
          <div className="rg-card mt-4 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="rg-term-table">
                <thead>
                  <tr>
                    <th className="w-10">#</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Typical verification signal</th>
                  </tr>
                </thead>
                <tbody>
                  {COVERAGE.map((c, i) => (
                    <tr key={c.category}>
                      <td className="text-[var(--color-muted)]">0{i + 1}</td>
                      <td className="font-medium whitespace-nowrap text-[var(--color-ink)]">{c.category}</td>
                      <td className="text-[var(--color-muted)]">{c.description}</td>
                      <td className="whitespace-nowrap text-[var(--color-gold-soft)]">{c.signal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)]">
        <div className="rg-container py-20">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-purple-soft)]">
            OpportunityGrid // Two customer surfaces
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
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-purple-soft)]">
                OpportunityGrid // Nigeria-first, Africa-scale
              </p>
              <h2 className="font-serif mt-4 text-2xl text-[var(--color-ink)] md:text-3xl">
                Built for one market first, architected for many.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                OpportunityGrid begins with Nigerian grants, procurement, and development-finance
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
              <div className="border border-[var(--color-line)] p-8" style={{ borderRadius: "var(--radius-sharp)" }}>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  What this site does not claim
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--color-ink)]">
                  <li>— No fabricated customer counts, funding totals, or market-share figures.</li>
                  <li>— No fake press, logos, or testimonials.</li>
                  <li>— No claim that OpportunityGrid is fully live across Africa today.</li>
                  <li>— No claim that CityOS runs in any real city or municipal deployment today.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
