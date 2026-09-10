import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { COMPANY, LOCATIONS } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="inline-block">
            <img
              src="/media/logo-white.png"
              alt="Trans99 home"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Trans99 is a full-service transportation and logistics company that
            offers a range of Asset-Based Truckload, fulfillment, and
            warehousing services.
          </p>
          <a
            href={COMPANY.emailHref}
            className="mt-4 block text-sm text-white hover:underline"
          >
            {COMPANY.email}
          </a>
          <p className="mt-2 text-xs text-white/50">{COMPANY.hours}</p>
        </div>

        {LOCATIONS.map((loc) => (
          <FooterCol key={loc.id} title={loc.city}>
            {loc.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <a href={loc.phoneHref} className="pt-1 font-medium text-white">
              {loc.phone}
            </a>
            <a href={loc.map} target="_blank" rel="noreferrer">
              Map
            </a>
          </FooterCol>
        ))}

        <FooterCol title="Company">
          <Link to="/about">About</Link>
          <Link to="/eco-conscious">Eco Conscious</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/quote">Get a Quote</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </FooterCol>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Trans99. All rights reserved.</p>
          <p>Focus · Service · Capacity</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-lg tracking-[0.16em] text-white/90 uppercase">
        {title}
      </h2>
      <div className="mt-4 flex flex-col gap-2 text-sm text-white/70 [&_a:hover]:text-white">
        {children}
      </div>
    </div>
  );
}
