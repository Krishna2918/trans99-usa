import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { COMPANY, LOCATIONS } from "@/data/content";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [{ title: "Terms & Conditions – Trans99 USA" }],
  }),
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero kicker="Legal" title="Terms & conditions" />
      <article className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-sm leading-relaxed text-muted sm:px-6">
        <p>
          Quotes issued through this site are invitations to treat until a
          Trans99 representative confirms rate, equipment, and transit in
          writing. Confirmed loads move under our standard bill of lading,
          tariff, and applicable Carmack / Canadian motor-carrier rules.
        </p>
        <p>
          Accessorials (detention, layover, extra stops, tarps, lumper, border
          exam) are billed as incurred unless a written contract says otherwise.
          Claims must be filed in writing with supporting documents.
        </p>
        <p>
          For contracts and insurance certificates contact{" "}
          <a href={COMPANY.emailHref} className="text-blue">
            {COMPANY.email}
          </a>{" "}
          or {LOCATIONS.map((l) => l.phone).join(" / ")}.
        </p>
      </article>
    </SiteLayout>
  );
}
