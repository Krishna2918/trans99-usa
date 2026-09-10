import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "About – Trans99 USA" }],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Trans99 is a full-service transportation and 3rd Party logistics company that offers a range of asset based truckload transportation, fulfillment and warehousing services."
        image="/media/yard-aerial.jpg"
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="space-y-4 text-base leading-relaxed text-muted">
          <p>
            We incorporate professional customer service, safety and
            environmental sustainability into a streamlined approach for each
            customer intended to provide the best and most dependable operation
            in the industry.
          </p>
          <p>
            We focus on providing a custom solution to our customers through
            expertise and extraordinary customer service provision.
          </p>
          <p>
            Since our founding, we have successfully aided thousands of
            customers across the continent; a number which continues to rapidly
            grow.
          </p>
          <p>
            We put a combined 50 years of experience to action, as we are highly
            skilled and able to provide cross-border transportation through a
            whole host of services and methods. We have a dedicated and highly
            trained team that works systematically to satisfy all customer
            needs. We create a streamlined and logical approach to
            transportation requirements based on your unique needs.
          </p>
        </div>
        <img
          src="/media/truck-close.jpg"
          alt="Trans99 USA power unit"
          className="h-full max-h-[28rem] w-full rounded-xl object-cover object-center"
        />
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">OUR MISSION & VISION</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Trans99 mandate is to integrate our core values of Focus, Service,
              and Safety with our customers to optimally meet the demands of
              their Supply Chain and Logistics Challenges.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Our primary objective is to carefully expand our company while
              increasing our marginal effectiveness towards offering savings to
              our customers by significantly improving the efficiency of their
              transportation and supply chain needs.
            </p>
          </div>
          <div>
            <p className="text-base leading-relaxed text-muted">
              Since its establishment, Trans99 has incorporated a remarkable
              team to carry out its objectives. Teamwork is crucial to achieving
              our goals, and this facilitates our ability to maintain an edge on
              our competitors in the industry. Our team is guided with great
              leadership. Our well-trained leaders ensure our unity as a team,
              and they foster a working environment in which our employees have
              the opportunity to grow into leaders themselves and ensure the
              healthy longevity of our organization.
            </p>
            <video
              className="mt-6 w-full rounded-xl object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/media/office-team.jpg"
            >
              <source src="/media/office.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <article>
          <h2 className="font-display text-3xl">Our Experts</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            TRANS99’s transportation experts have a strong devotion to our
            customers and their shipping demands. We understand that every
            freight movement is unique, and that each movement requires a
            streamlined approach to minimize cost and ensure timeliness. Our
            experts are well trained to meet these challenges. We take advantage
            of the industry’s best technology to provide tracking and ensure
            environmental friendliness. Our experts take time to understand each
            individual customer’s needs, and stop at nothing to strategize and
            improve every component of a shipment. Our team of experts works
            with you to make sure you get seamless freight movements, and on
            time delivery at all times. TRANS99’s devoted experts maintain an
            unparalleled high standard for themselves. Our customers can rest
            assured that they are working with professionals who take their
            concerns and needs with the utmost seriousness.
          </p>
        </article>
        <article>
          <h2 className="font-display text-3xl">Our Customer Service</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            We have a team of dedicated customer care representatives who are
            available 24/7 to attend to all your queries and concerns. We value
            our customers; this is evident in the attention we give them. Our
            representatives are always ready to address customer needs and
            return all inquiries promptly with utmost expertise. We place our
            focus not only on meeting our customer’s transportation needs but
            also on providing them with an exceptional customer service
            experience. Our customers are our top priority.
          </p>
        </article>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-4xl">Quality</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75">
            By integrating technology into the daily operations, Trans 99 has
            also integrated sophisticated error-proofing methods into our
            quality managament. Managers, supervisors and operators are
            throughly trained, tested and continuously involved in improving our
            performance and eliminating errors throughout the system resulting
            in a remarkable value for our customers.
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Managing our quality begins with each new opportunity. Process and work instruction development is a crucial part of our business launch planning.",
              "Trans 99 incorporates best practices from each of our diverse operations segments, into the development of quality management systems for each.",
              "This practice also provides control of critical documents and process management. Managers and trained internal auditors meet regularly to ensure best practices throughout the company.",
              "Development of customer-specific web portals for tracking of defined metrics.",
            ].map((item, i) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/80">
                <span className="font-display text-2xl text-white/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ol>
          <Button asChild variant="light" className="mt-10">
            <Link to="/quote">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
