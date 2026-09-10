import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Clock3,
  Headphones,
  ShieldCheck,
  Globe2,
} from "lucide-react";
import { CERTS, GALLERY, LOCATIONS, PILLARS, SERVICES } from "@/data/content";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: Home });

const ICONS = [Clock3, ShieldCheck, Headphones, Globe2];

function Home() {
  return (
    <SiteLayout>
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-navy text-white">
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero-poster.jpg"
        >
          <source src="/media/hero-web.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
          <h1 className="max-w-3xl font-display text-6xl leading-[0.9] font-semibold tracking-tight sm:text-7xl md:text-8xl">
            Driven to Deliver.
            <span className="mt-2 block text-white/85">Powered by Trust.</span>
          </h1>
          <div className="mt-8">
            <Button asChild variant="light" size="lg">
              <Link to="/quote">Get a Quote</Link>
            </Button>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-2 gap-6 border-t border-white/15 pt-8">
            <div>
              <dd className="font-display text-5xl font-semibold">24/7</dd>
              <dt className="mt-1 text-xs tracking-[0.18em] text-white/60 uppercase">
                Support
              </dt>
            </div>
            <div>
              <dd className="font-display text-5xl font-semibold">500</dd>
              <dt className="mt-1 text-xs tracking-[0.18em] text-white/60 uppercase">
                Deliveries Monthly
              </dt>
            </div>
          </dl>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-4xl leading-none sm:text-5xl">
              Providing first class transportation services across North America.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Trans99 is a full-service transportation and logistics company
              that offers a range of Asset-Based Truckload, fulfillment, and
              warehousing services.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="/media/truck-close.jpg"
              alt="Trans99 USA tractor"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => {
              const Icon = ICONS[i] ?? Clock3;
              return (
                <article
                  key={p.title}
                  className="rounded-xl border border-line bg-white p-6"
                >
                  <Icon className="size-6 text-blue" strokeWidth={1.75} />
                  <h3 className="mt-4 font-display text-2xl tracking-wide">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <h2 className="font-display text-4xl leading-none sm:text-5xl">
            The company promise
          </h2>
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">
            As your trusted logistics provider, we will continually make every
            effort to fulfill our obligations, while keeping a focus on your
            success. It is our responsibility to ensure the connection is kept
            between Focus, Service and Capacity.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-center text-xs font-semibold tracking-[0.22em] text-muted uppercase">
            Our Certifications
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            {CERTS.map((c) => (
              <img
                key={c.alt}
                src={c.src}
                alt={c.alt}
                className="h-12 w-auto object-contain sm:h-14"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue uppercase">
            Our Services
          </p>
          <h2 className="mt-3 font-display text-4xl leading-none sm:text-5xl">
            Reliable Logistics Solutions Built for Every Mile
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
            We offer end-to-end transportation services tailored to your
            business needs. From time-sensitive deliveries to specialized
            freight, our solutions are designed to keep your supply chain
            moving smoothly, efficiently, and on schedule.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
            With a strong network, modern fleet, and experienced drivers, we
            ensure consistent performance you can trust.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group overflow-hidden rounded-xl border border-line bg-white"
              >
                <img
                  src={s.image}
                  alt=""
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="p-5">
                  <h3 className="font-display text-2xl tracking-wide">
                    {s.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-4xl">Contact Information</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {LOCATIONS.map((loc) => (
              <article
                key={loc.id}
                className="rounded-xl border border-line bg-white p-6"
              >
                <h3 className="font-display text-3xl">{loc.city}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {loc.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <a
                  href={loc.phoneHref}
                  className="mt-4 inline-block text-lg font-semibold text-navy hover:underline"
                >
                  {loc.phone}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {GALLERY.map((shot) => (
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                className="h-40 w-full rounded-xl object-cover sm:h-52 md:h-56"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy text-white">
        <img
          src="/media/yard-sunset.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 sm:px-6 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display text-4xl leading-none sm:text-5xl">
            Get in touch with us, and start shaping the future.
          </h2>
          <Button asChild variant="light" size="lg">
            <Link to="/contact">Enquire Now</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
