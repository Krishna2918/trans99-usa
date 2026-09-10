import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { COMPANY, LOCATIONS } from "@/data/content";

export const Route = createFileRoute("/eco-conscious")({
  component: EcoPage,
  head: () => ({
    meta: [{ title: "Eco Conscious – Trans99 USA" }],
  }),
});

function EcoPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Eco Conscious"
        title="Environmental Stewardship"
        image="/media/smartway-bg.jpg"
      />

      <section className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-base leading-relaxed text-muted sm:px-6">
        <p>
          Trans99 and its employees carry out all operations with a focus on
          environmental sustainability. It plays a role in everything that we
          do as an organization, from influencing our efforts in maximizing
          fuel efficiency to reducing emissions.
        </p>
        <p>
          Our aerodynamic and fuel-efficient truck fleet aids us in maintaining
          excellent fuel efficiency. Periodic maintenance and servicing of our
          vehicles and trailers also allows us to be environmentally compliant.
          Our drivers contribute to this mindset as well, conducting training on
          a regular basis pertaining to driving efficiency and safety. Drivers
          incorporate these habits into their driving in order to prevent
          wasting unnecessary fuel.
        </p>
        <p>
          Our satellite and e-log technology allows us to go paperless, ensuring
          that we can provide our customers with all the information they need
          while simultaneously staying green. TRANS99 is SmartWay certified as
          well. Through SmartWay, we maintain a partnership with the EPA in
          which we track our environmental performance, keeping great knowledge
          of our carbon footprint as a result.
        </p>
        <p>
          At TRANS99, we consider it a top priority to keep our planet green,
          and we will undoubtedly aim to carry this vision forward into our
          future as technology allows us to continue to improve in our efforts
          to stay environmentally conscious.
        </p>
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
            <ContactForm submitLabel="Submit" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
