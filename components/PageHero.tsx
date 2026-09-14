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
    <section className="rg-royal-section rg-circuit">
      <div className="rg-scanline" />
      <div className="rg-container relative py-16 md:py-24">
        <p className="rg-reveal rg-reveal-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold-soft)]">
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
