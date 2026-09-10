import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

export function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof Dialog.Content> & {
  side?: "left" | "right";
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-40 bg-navy/50" />
      <Dialog.Content
        className={cn(
          "fixed top-0 z-50 flex h-full w-[min(100%,20rem)] flex-col bg-navy p-6 text-white shadow-xl",
          "focus:outline-none",
          side === "right" ? "right-0" : "left-0",
          className,
        )}
        {...props}
      >
        <Dialog.Description className="sr-only">
          Site navigation
        </Dialog.Description>
        {children}
        <Dialog.Close
          className="absolute top-4 right-4 rounded-pill p-2 text-white/80 hover:bg-white/10 hover:text-white"
          aria-label="Close menu"
        >
          <X className="size-5" />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Title>) {
  return (
    <Dialog.Title
      className={cn("font-display text-2xl tracking-wide", className)}
      {...props}
    />
  );
}
