import { createFileRoute } from "@tanstack/react-router";
import { COMPANY, LOCATIONS } from "@/data/content";
import { SiteLayout } from "@/components/site-layout";
import { ContactForm } from "@/components/contact-form";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: "Contact – Trans99 USA" }],
  }),
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="rounded-xl border border-line bg-white p-6 sm:p-8">
          <ContactForm />
        </div>
        <div>
          <h1 className="font-display text-4xl">Contact Information</h1>
          <ul className="mt-6 space-y-6 text-sm">
            <li>
              <a href={COMPANY.emailHref} className="text-base font-medium">
                {COMPANY.email}
              </a>
            </li>
            {LOCATIONS.map((loc) => (
              <li key={loc.id}>
                <p className="font-display text-2xl">{loc.city}</p>
                {loc.lines.map((line) => (
                  <p key={line} className="text-muted">
                    {line}
                  </p>
                ))}
                <a
                  href={loc.phoneHref}
                  className="mt-1 inline-block font-medium text-navy hover:underline"
                >
                  {loc.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
