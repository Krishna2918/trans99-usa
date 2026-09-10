import { createFileRoute } from "@tanstack/react-router";
import { COMPANY, LOCATIONS } from "@/data/content";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [{ title: "Careers – Trans99 USA" }],
  }),
});

const BULLETS = [
  "Great team and great culture – TRANS99 is creating its future growth and leadership through strengthening its company structure. We have a collaborative atmosphere and we take an enthusiastic approach to work.",
  "A safe and healthy workplace – we are highly committed to the wellbeing of our staff through safety training programs.",
  "A fun atmosphere – We are unique in the way we operate, and we succeed in combining hard work with a fun atmosphere. This includes festivities, breakfasts, parties, games, and other enjoyable events to accompany our hard and rewarding work.",
  "Get involved in the local community",
  "Work with highly trained professionals",
  "Get the sense of creativity and innovation",
  "Committed to mutual well-being",
  "Be a part of our ‘Working Green’ mission",
  "Free parking",
];

function CareersPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Why Work for Us ?"
        lede="A number of factors that set us apart when considering employment opportunities"
        image="/media/office-floor.jpg"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <ul className="space-y-4 text-base leading-relaxed text-muted">
          {BULLETS.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-navy" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">Contact Information</h2>
            <p className="mt-6 text-sm">
              <a href={COMPANY.emailHref} className="font-medium text-blue">
                {COMPANY.email}
              </a>
              {LOCATIONS.map((loc) => (
                <span key={loc.id} className="mt-3 block">
                  <span className="block font-display text-xl text-navy">
                    {loc.city}
                  </span>
                  {loc.lines.map((line) => (
                    <span key={line} className="block text-muted">
                      {line}
                    </span>
                  ))}
                  <a href={loc.phoneHref} className="block">
                    {loc.phone}
                  </a>
                </span>
              ))}
            </p>
          </div>
          <div className="rounded-xl border border-line bg-white p-6">
            <ContactForm submitLabel="Submit" context="application" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
