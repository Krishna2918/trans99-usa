export function PageHero({
  kicker,
  title,
  lede,
  image = "/media/yard-sunset.jpg",
}: {
  kicker?: string;
  title: string;
  lede?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/80 to-navy/40" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {kicker ? (
          <p className="text-xs font-semibold tracking-[0.22em] text-white/70 uppercase">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {lede}
          </p>
        ) : null}
      </div>
    </section>
  );
}
