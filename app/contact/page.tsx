import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach RoyalGrid Technologies about early access, partnerships, or institutional access.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're trying to access."
        body="Whether you're a business looking for early access, an institution exploring portfolio-level access, or a partner — send a message and the RoyalGrid team will follow up directly."
      />

      <section>
        <div className="rg-container py-16">
          <div className="mx-auto max-w-xl">
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-ink)]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-sm border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-gold)]"
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
                  className="mt-2 w-full rounded-sm border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-gold)]"
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
                  className="mt-2 w-full rounded-sm border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-gold)]"
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
                  className="mt-2 w-full resize-none rounded-sm border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-gold)]"
                />
              </div>
              <button
                type="submit"
                disabled
                aria-disabled="true"
                className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-sm bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-paper)] opacity-60 sm:w-auto"
              >
                Send message
              </button>
              <p className="text-xs leading-relaxed text-[var(--color-muted)]">
                Message routing is being finalized as RoyalGrid&apos;s contact infrastructure is
                set up. This form is not yet connected to a live inbox.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
