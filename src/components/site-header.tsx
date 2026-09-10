import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { COMPANY, LOCATIONS, NAV } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 text-fg backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 shrink-0 items-center py-2" aria-label="Trans99 home">
          <img
            src="/media/logo-dark.png"
            alt="Trans99"
            className="h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-pill px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-navy text-white"
                    : "text-muted hover:bg-fog hover:text-navy",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm">
            <Link to="/quote">
              <span className="sm:hidden">Quote</span>
              <span className="hidden sm:inline">Get a Quote</span>
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex size-11 items-center justify-center rounded-md text-navy lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="pr-8">Trans99</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base text-white/85 hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Button asChild variant="light" className="mt-6 w-full">
                <Link to="/quote" onClick={() => setOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
              <div className="mt-6 flex flex-col gap-2 text-sm text-white/70">
                {LOCATIONS.map((loc) => (
                  <a key={loc.id} href={loc.phoneHref} className="hover:text-white">
                    {loc.city} · {loc.phone}
                  </a>
                ))}
                <a href={COMPANY.emailHref} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
