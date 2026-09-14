import Link from "next/link";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { href: "/platform", label: "Platform Overview" },
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
      className="border-t border-[rgba(201,162,74,0.25)]"
      style={{ background: "linear-gradient(180deg, var(--color-ink), var(--color-purple-deep))" }}
    >
      <div className="rg-container py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="font-serif text-lg text-white">
              RoyalGrid <span className="rg-metallic-dark">Technologies</span>
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-muted-on-dark)]">
              Opportunity-access infrastructure for African businesses.
            </p>
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

        <div className="mt-12 mb-6 h-px" style={{ background: "rgba(201,162,74,0.2)" }} />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[var(--color-muted-on-dark)]">
            &copy; {year} RoyalGrid Technologies. Nigerian Business Name Registration No. 9843389.
          </p>
          <p className="text-xs text-[var(--color-muted-on-dark)]">
            Lagos, Nigeria — building for Africa.
          </p>
        </div>
      </div>
    </footer>
  );
}
