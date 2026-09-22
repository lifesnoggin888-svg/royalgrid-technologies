import Image from "next/image";
import Link from "next/link";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { href: "/platform", label: "Platform Overview" },
      { href: "https://cityos-nu.vercel.app", label: "Open CityOS", external: true },
      { href: "https://opportunitygrid.vercel.app", label: "Launch OpportunityGrid", external: true },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/markets", label: "Markets" },
    ],
  },
  {
    title: "Audience",
    links: [
      { href: "/for-businesses", label: "For Businesses" },
      { href: "/for-institutions", label: "For Institutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/company", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[rgba(34,211,238,0.25)]"
      style={{ background: "linear-gradient(180deg, var(--color-void), var(--color-purple-deep))" }}
    >
      <div className="rg-container flex items-center justify-between gap-4 border-b border-[rgba(34,211,238,0.15)] py-4">
        <span className="rg-index-tag">RoyalGrid // Opportunity-access infrastructure</span>
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted-on-dark)] sm:inline">
          Independent Nigerian venture
        </span>
      </div>
      <div className="rg-container py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="flex items-center gap-2.5">
              <Image src="/logo-mark.png" alt="" width={568} height={562} className="h-7 w-7 object-contain" aria-hidden />
              <span className="font-serif text-lg text-white">
                RoyalGrid <span className="rg-metallic-dark">Technologies</span>
              </span>
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-muted-on-dark)]">
              Opportunity-access infrastructure for African businesses.
            </p>
            {/* Placeholder social links — point to "#" until real profiles exist. */}
            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="X (Twitter)" className="text-[var(--color-muted-on-dark)] hover:text-[var(--color-gold-soft)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[var(--color-muted-on-dark)] hover:text-[var(--color-gold-soft)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-[var(--color-muted-on-dark)] hover:text-[var(--color-gold-soft)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .62 4.15c-.3.76-.5 1.63-.56 2.9C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91a5.9 5.9 0 0 0 1.39 2.13 5.9 5.9 0 0 0 2.12 1.38c.76.3 1.63.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.39 5.9 5.9 0 0 0 1.38-2.12c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.39-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-medium uppercase tracking-wider text-[var(--color-gold-soft)]">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) =>
                  "external" in link && link.external ? (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-muted-on-dark)] hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--color-muted-on-dark)] hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-6 h-px" style={{ background: "rgba(34,211,238,0.2)" }} />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[var(--color-muted-on-dark)]">
            &copy; {year} RoyalGrid Technologies. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-muted-on-dark)]">
            Lagos, Nigeria — building for Africa.
          </p>
        </div>
      </div>
    </footer>
  );
}
