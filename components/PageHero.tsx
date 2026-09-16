import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  body,
  logo,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  logo?: boolean;
}) {
  return (
    <section className="rg-royal-section rg-circuit">
      <div className="rg-scanline" />
      <div className="rg-container relative py-16 md:py-24">
        {logo && (
          <Image
            src="/logo-hero.png"
            alt="RoyalGrid Technologies"
            width={352}
            height={192}
            priority
            className="rg-reveal mb-8 h-auto w-64 object-contain sm:w-80 md:w-96"
          />
        )}
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
