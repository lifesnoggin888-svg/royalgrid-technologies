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
    <section className="border-b border-[var(--color-line)]">
      <div className="rg-container py-16 md:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
          {eyebrow}
        </p>
        <h1 className="font-serif mt-4 max-w-3xl text-3xl leading-[1.15] text-[var(--color-ink)] md:text-5xl">
          {title}
        </h1>
        {body && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
            {body}
          </p>
        )}
      </div>
    </section>
  );
}
