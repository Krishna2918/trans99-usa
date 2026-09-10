import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { SERVICES } from "@/data/content";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/quote-form";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetail,
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.service.title} – Trans99 USA`
          : "Service – Trans99 USA",
      },
    ],
  }),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <img
          src={service.image}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/70 uppercase">
            Service
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-none sm:text-6xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/80">{service.body}</p>
          <Button asChild variant="light" className="mt-8">
            <Link to="/quote">Get a Quote</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-display text-3xl">How we run it</h2>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
            <li>Covered by asset-based capacity and a vetted carrier bench.</li>
            <li>Live tracking and POD from pickup through delivery.</li>
            <li>24/7 dispatch for exceptions, weather, and appointment changes.</li>
            <li>Cross-border documentation when the lane requires it.</li>
          </ul>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="rounded-lg border border-line bg-white p-4 text-sm hover:border-blue"
              >
                <span className="font-display text-lg">{s.title}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-line bg-paper p-6">
          <h2 className="font-display text-2xl">Quote this service</h2>
          <p className="mt-1 mb-6 text-sm text-muted">
            Tell us origin, destination, and timing. We’ll come back with a
            number.
          </p>
          <QuoteForm compact />
        </div>
      </section>
    </SiteLayout>
  );
}
