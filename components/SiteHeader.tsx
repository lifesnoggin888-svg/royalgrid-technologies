"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/platform", label: "Platform" },
  { href: "/products", label: "Products" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/markets", label: "Markets" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

const SOLUTIONS = [
  { href: "/for-businesses", label: "For Businesses" },
  { href: "/for-institutions", label: "For Institutions" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const solutionsActive = SOLUTIONS.some((s) => s.href === pathname);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[rgba(34,211,238,0.22)] backdrop-blur"
      style={{
        background: "linear-gradient(180deg, rgba(3,6,10,0.97), rgba(10,17,25,0.94))",
      }}
    >
      <div className="rg-container flex h-16 items-center justify-between gap-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="font-serif text-base font-medium text-white">
            RoyalGrid <span className="rg-metallic-dark">Technologies</span>
          </span>
        </Link>

        <nav className="hidden lg:flex flex-1 items-center gap-6 xl:gap-7">
          {NAV.slice(0, 3).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rg-nav-link text-sm transition-colors ${
                  active
                    ? "text-white font-medium"
                    : "text-[var(--color-muted-on-dark)] hover:text-[var(--color-gold-soft)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              className={`rg-nav-link flex items-center gap-1 text-sm transition-colors ${
                solutionsActive
                  ? "text-white font-medium"
                  : "text-[var(--color-muted-on-dark)] hover:text-[var(--color-gold-soft)]"
              }`}
              onClick={() => setSolutionsOpen(true)}
              aria-expanded={solutionsOpen}
            >
              Solutions
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
            {solutionsOpen && (
              <div
                className="rg-glass absolute left-0 top-full mt-2 w-48 overflow-hidden rounded-md p-2"
              >
                {SOLUTIONS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-sm px-3 py-2 text-sm text-[var(--color-muted-on-dark)] hover:bg-[rgba(34,211,238,0.1)] hover:text-[var(--color-gold-soft)]"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV.slice(3).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rg-nav-link text-sm transition-colors ${
                  active
                    ? "text-white font-medium"
                    : "text-[var(--color-muted-on-dark)] hover:text-[var(--color-gold-soft)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <a href="https://cityos-nu.vercel.app" target="_blank" rel="noopener noreferrer" className="rg-btn-primary">
            Open CityOS
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-sm border border-[rgba(34,211,238,0.35)]"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-[var(--color-gold-soft)] transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-[var(--color-gold-soft)] transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[rgba(34,211,238,0.25)]" style={{ background: "var(--color-void)" }}>
          <nav className="rg-container flex flex-col py-4">
            {NAV.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rg-nav-link py-3 text-base text-white border-b border-[rgba(34,211,238,0.15)]"
              >
                {item.label}
              </Link>
            ))}
            <p className="pt-3 text-xs uppercase tracking-[0.18em] text-[var(--color-gold-soft)]">
              Solutions
            </p>
            {SOLUTIONS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rg-nav-link py-3 pl-3 text-base text-white border-b border-[rgba(34,211,238,0.15)]"
              >
                {item.label}
              </Link>
            ))}
            {NAV.slice(3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rg-nav-link py-3 text-base text-white border-b border-[rgba(34,211,238,0.15)] last:border-none"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://cityos-nu.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rg-btn-primary mt-4 w-full"
            >
              Open CityOS
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
