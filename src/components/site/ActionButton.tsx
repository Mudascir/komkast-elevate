import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const actionButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        gradient:
          "relative overflow-hidden bg-gradient-accent text-navy-deep shadow-soft ring-1 ring-inset ring-white/40 hover:shadow-lift hover:-translate-y-0.5",
        solid: "bg-navy-deep text-navy-foreground hover:bg-navy hover:-translate-y-0.5",
        outline:
          "glass text-foreground backdrop-blur-md hover:border-electric/50 hover:text-primary hover:-translate-y-0.5",
        ghostDark:
          "glass-dark text-navy-foreground hover:border-teal/60 hover:bg-navy-foreground/10 hover:-translate-y-0.5",
      },
      size: {
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: { variant: "gradient", size: "md" },
  },
);

type Props = ComponentPropsWithoutRef<"a"> & VariantProps<typeof actionButtonVariants>;

export function ActionButton({ className, variant, size, ...props }: Props) {
  return <a className={cn(actionButtonVariants({ variant, size }), className)} {...props} />;
}

export function ActionSubmit({
  className,
  variant,
  size,
  ...props
}: ComponentPropsWithoutRef<"button"> & VariantProps<typeof actionButtonVariants>) {
  return <button className={cn(actionButtonVariants({ variant, size }), className)} {...props} />;
}
