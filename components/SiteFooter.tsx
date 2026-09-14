import Link from "next/link";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { href: "/platform", label: "OpportunityGrid" },
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
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-paper-dim)]">
      <div className="rg-container py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="font-serif text-lg text-[var(--color-ink)]">
              RoyalGrid <span className="text-[var(--color-gold)]">Technologies</span>
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">
              Opportunity-access infrastructure for African businesses.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-gold)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rg-rule mt-12 mb-6" />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[var(--color-muted)]">
            &copy; {year} RoyalGrid Technologies. Nigerian Business Name Registration No. 9843389.
          </p>
          <p className="text-xs text-[var(--color-muted)]">
            Lagos, Nigeria — building for Africa.
          </p>
        </div>
      </div>
    </footer>
  );
}
