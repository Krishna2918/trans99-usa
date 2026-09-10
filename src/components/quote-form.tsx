import { useState, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const EQUIPMENT = SERVICES.map((s) => s.title);

type Status = "idle" | "done";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  if (status === "done") {
    return (
      <div className="rounded-xl border border-line bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-blue" />
        <h3 className="mt-4 font-display text-3xl">Quote request received</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          A Trans99 dispatcher will follow up within one business hour during
          weekday operations — and same-shift on nights and weekends for
          expedited freight.
        </p>
        <Button className="mt-6" type="button" onClick={() => setStatus("idle")}>
          Submit another
        </Button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("done");
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name *" htmlFor="q-name">
          <Input id="q-name" name="name" required autoComplete="name" />
        </Field>
        <Field label="Company" htmlFor="q-company">
          <Input id="q-company" name="company" autoComplete="organization" />
        </Field>
        <Field label="Email *" htmlFor="q-email">
          <Input
            id="q-email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </Field>
        <Field label="Phone *" htmlFor="q-phone">
          <Input
            id="q-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
          />
        </Field>
        <Field label="Origin *" htmlFor="q-origin">
          <Input
            id="q-origin"
            name="origin"
            required
            placeholder="City, ST / Province"
          />
        </Field>
        <Field label="Destination *" htmlFor="q-dest">
          <Input
            id="q-dest"
            name="destination"
            required
            placeholder="City, ST / Province"
          />
        </Field>
        <Field label="Equipment" htmlFor="q-equip">
          <select
            id="q-equip"
            name="equipment"
            className="flex h-12 w-full rounded-md border border-line bg-white px-3 text-sm"
            defaultValue="Truckload Operations"
          >
            {EQUIPMENT.map((eq) => (
              <option key={eq}>{eq}</option>
            ))}
          </select>
        </Field>
        <Field label="Pickup date" htmlFor="q-date">
          <Input id="q-date" name="pickup" type="date" />
        </Field>
      </div>
      {!compact ? (
        <Field label="Freight notes" htmlFor="q-notes">
          <Textarea
            id="q-notes"
            name="notes"
            placeholder="Weight, pallets, temperature, appointment windows…"
          />
        </Field>
      ) : null}
      <Button type="submit" className="mt-2 w-full sm:w-auto">
        Request Quote
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
