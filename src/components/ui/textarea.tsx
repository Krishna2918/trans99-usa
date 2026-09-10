import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-fg",
        "placeholder:text-subtle",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
