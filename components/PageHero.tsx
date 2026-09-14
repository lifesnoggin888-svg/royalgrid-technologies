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
    <section className="rg-royal-section">
      <div className="rg-container relative py-16 md:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold-soft)]">
          {eyebrow}
        </p>
        <h1 className="font-serif mt-4 max-w-3xl text-3xl leading-[1.15] text-white md:text-5xl">
          {title}
        </h1>
        {body && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted-on-dark)]">
            {body}
          </p>
        )}
      </div>
    </section>
  );
}
