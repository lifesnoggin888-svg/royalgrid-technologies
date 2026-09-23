import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      {/* Same cinematic poster used on the homepage hero, scaled down to a
          page-banner treatment: darkened + gradient-overlaid so it reads as
          part of the same visual system rather than a leftover flat panel. */}
      <div className="absolute inset-0" aria-hidden>
        <Image src="/hero-poster.jpg" alt="" fill sizes="100vw" className="object-cover object-[center_20%]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(3,6,10,0.95) 0%, rgba(3,6,10,0.88) 38%, rgba(3,6,10,0.62) 70%, rgba(3,6,10,0.42) 100%), linear-gradient(0deg, rgba(3,6,10,0.85) 0%, transparent 60%)",
          }}
        />
      </div>
      <div className="rg-scanline" />
      <div className="rg-container relative py-16 md:py-24">
        <p className="rg-reveal rg-reveal-1 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
          {eyebrow}
        </p>
        <h1 className="rg-reveal rg-reveal-2 font-serif mt-4 max-w-3xl text-3xl leading-[1.15] text-white md:text-5xl">
          {title}
        </h1>
        {body && (
          <p className="rg-reveal rg-reveal-3 mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted-on-dark)]">
            {body}
          </p>
        )}
      </div>
    </section>
  );
}
