import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <SiteLayout>
      <section className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-24 sm:px-6">
        <p className="text-xs tracking-[0.2em] text-muted uppercase">404</p>
        <h1 className="font-display text-5xl">Lane not found</h1>
        <p className="max-w-md text-sm text-muted">
          That page isn’t on this site. Head home or request a quote.
        </p>
        <div className="mt-4 flex gap-3">
          <Button asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/quote">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
