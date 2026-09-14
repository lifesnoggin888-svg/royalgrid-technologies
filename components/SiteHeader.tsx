"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/platform", label: "Platform" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/for-businesses", label: "For Businesses" },
  { href: "/for-institutions", label: "For Institutions" },
  { href: "/markets", label: "Markets" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-paper)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-paper)]/80">
      <div className="rg-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-lg tracking-tight text-[var(--color-ink)]">
            RoyalGrid <span className="text-[var(--color-gold)]">Technologies</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  active
                    ? "text-[var(--color-ink)] font-medium"
                    : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <a
            href="https://opportunitygrid.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm border border-[var(--color-ink)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
          >
            Explore OpportunityGrid
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--color-line)]"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-[var(--color-ink)] transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-[var(--color-ink)] transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-line)] bg-[var(--color-paper)]">
          <nav className="rg-container flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-[var(--color-ink)] border-b border-[var(--color-line)] last:border-none"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://opportunitygrid.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-sm border border-[var(--color-ink)] px-4 py-3 text-sm font-medium text-[var(--color-ink)]"
            >
              Explore OpportunityGrid
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
