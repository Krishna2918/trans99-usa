import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm({
  submitLabel = "Submit",
  context = "inquiry",
}: {
  submitLabel?: string;
  context?: string;
}) {
  const [done, setDone] = useState(false);
  const [message, setMessage] = useState("");

  if (done) {
    return (
      <div className="rounded-xl border border-line bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-blue" />
        <h3 className="mt-4 font-display text-3xl">Message sent</h3>
        <p className="mt-2 text-sm text-muted">
          Thank you. Our team will reply to your {context} shortly.
        </p>
        <Button className="mt-6" type="button" onClick={() => setDone(false)}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <div className="grid gap-2">
        <Label htmlFor="c-name">First Name *</Label>
        <Input id="c-name" name="name" required autoComplete="given-name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="c-email">Email Address *</Label>
        <Input
          id="c-email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="c-phone">Phone Number</Label>
        <Input id="c-phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="c-msg">Message</Label>
        <Textarea
          id="c-msg"
          name="message"
          maxLength={180}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className="text-right text-xs text-muted">{message.length} / 180</p>
      </div>
      <Button type="submit">{submitLabel}</Button>
    </form>
  );
}
