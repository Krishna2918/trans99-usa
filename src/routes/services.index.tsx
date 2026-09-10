import { Link, createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/data/content";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () => ({
    meta: [{ title: "Services – Trans99 USA" }],
  }),
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Our Services"
        title="Reliable Logistics Solutions Built for Every Mile"
        lede="We offer end-to-end transportation services tailored to your business needs. From time-sensitive deliveries to specialized freight, our solutions are designed to keep your supply chain moving smoothly, efficiently, and on schedule. With a strong network, modern fleet, and experienced drivers, we ensure consistent performance you can trust."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group overflow-hidden rounded-xl bg-white ring-1 ring-line"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={s.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <h2 className="font-display text-2xl tracking-wide">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
