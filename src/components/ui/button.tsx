import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold tracking-wide transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-white hover:bg-navy rounded-pill px-6 py-3 text-sm",
        accent:
          "bg-signal text-white hover:bg-signal/90 rounded-pill px-6 py-3 text-sm",
        outline:
          "border border-white/70 text-white hover:bg-white hover:text-navy rounded-pill px-6 py-3 text-sm",
        ghost:
          "text-navy hover:bg-fog rounded-pill px-4 py-2 text-sm",
        light:
          "bg-white text-navy hover:bg-paper rounded-pill px-6 py-3 text-sm",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
