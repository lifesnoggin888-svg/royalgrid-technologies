"use client";

import { useState, type FormEvent } from "react";
import PageHero from "@/components/PageHero";

// No dedicated RoyalGrid inbox exists yet (no domain purchased — see
// docs/company/LEGAL_FACTS.md). Routes to a real, working address rather
// than a disabled button or a fabricated one. Replace once RoyalGrid has
// its own domain and inbox.
const CONTACT_EMAIL = "hardme888@gmail.com";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `RoyalGrid inquiry from ${name || "website visitor"}`;
    const body = [
      organization && `Organization: ${organization}`,
      email && `Reply-to: ${email}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're trying to access."
        body="Whether you're a business looking for early access, an institution exploring portfolio-level access, or a partner — send a message and the RoyalGrid team will follow up directly."
      />

      <section>
        <div className="rg-container py-16">
          <div className="rg-card mx-auto max-w-xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-ink)]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-sm border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-purple)]"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-[var(--color-ink)]">
                  Organization
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="mt-2 w-full rounded-sm border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-purple)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-ink)]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-sm border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-purple)]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-ink)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 w-full resize-none rounded-sm border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-purple)]"
                />
              </div>
              <button type="submit" className="rg-btn-primary w-full sm:w-auto">
                Send message
              </button>
              <p className="text-xs leading-relaxed text-[var(--color-muted)]">
                Opens your email client with this message pre-filled — RoyalGrid does not yet
                have a dedicated inbox connected to this form.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
