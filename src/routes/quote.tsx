import { createFileRoute } from "@tanstack/react-router";
import { COMPANY, LOCATIONS } from "@/data/content";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";

export const Route = createFileRoute("/quote")({
  component: QuotePage,
  head: () => ({
    meta: [{ title: "Get a Quote – Trans99 USA" }],
  }),
});

function QuotePage() {
  return (
    <SiteLayout>
      <PageHero
        title="Get a Quote"
        image="/media/truck-dusk.jpg"
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-xl border border-line bg-white p-6 sm:p-8">
          <QuoteForm />
        </div>
        <aside className="rounded-xl bg-navy p-8 text-white">
          <h2 className="font-display text-3xl">Contact Information</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Get in touch with us, and start shaping the future.
          </p>
          <ul className="mt-8 space-y-6">
            {LOCATIONS.map((loc) => (
              <li key={loc.id}>
                <p className="text-xs tracking-[0.16em] text-white/50 uppercase">
                  {loc.label}
                </p>
                <a
                  href={loc.phoneHref}
                  className="mt-1 block font-display text-3xl tracking-wide"
                >
                  {loc.phone}
                </a>
                <p className="mt-2 text-sm text-white/70">
                  {loc.lines.join(", ")}
                </p>
              </li>
            ))}
          </ul>
          <a
            href={COMPANY.emailHref}
            className="mt-8 inline-block text-sm text-white/80 hover:underline"
          >
            {COMPANY.email}
          </a>
        </aside>
      </section>
    </SiteLayout>
  );
}
