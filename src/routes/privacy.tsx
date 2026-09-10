import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { COMPANY } from "@/data/content";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [{ title: "Privacy Policy – Trans99 USA" }],
  }),
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero kicker="Legal" title="Privacy policy" />
      <article className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-sm leading-relaxed text-muted sm:px-6">
        <p>
          Trans99 collects only what we need to quote, haul, invoice, and
          support your freight: contact details, shipment data, and the
          communications you send us through this site.
        </p>
        <p>
          We do not sell personal information. Quote and contact forms are
          processed by our operations team. Load tracking data is shared with
          the customer of record and required customs or safety authorities.
        </p>
        <p>
          Questions:{" "}
          <a href={COMPANY.emailHref} className="text-blue">
            {COMPANY.email}
          </a>
          .
        </p>
      </article>
    </SiteLayout>
  );
}
