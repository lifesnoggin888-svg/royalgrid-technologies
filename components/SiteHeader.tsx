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
    <header
      className="sticky top-0 z-50 border-b border-[rgba(201,162,74,0.25)] backdrop-blur"
      style={{
        background: "linear-gradient(180deg, rgba(10,6,18,0.97), rgba(26,12,56,0.94))",
      }}
    >
      <div className="rg-container flex h-16 items-center justify-between gap-8">
        <Link href="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-lg tracking-tight text-white">
            RoyalGrid <span className="rg-metallic-dark">Technologies</span>
          </span>
        </Link>

        <nav className="hidden lg:flex flex-1 items-center gap-6 xl:gap-7">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
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
          <a href="https://opportunitygrid.vercel.app" target="_blank" rel="noopener noreferrer" className="rg-btn-primary">
            Explore OpportunityGrid
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-sm border border-[rgba(201,162,74,0.35)]"
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
        <div className="lg:hidden border-t border-[rgba(201,162,74,0.25)]" style={{ background: "var(--color-void)" }}>
          <nav className="rg-container flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-white border-b border-[rgba(201,162,74,0.15)] last:border-none"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://opportunitygrid.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rg-btn-primary mt-4 w-full"
            >
              Explore OpportunityGrid
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
