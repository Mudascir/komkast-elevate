import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ActionButton } from "./ActionButton";
import { cn } from "@/lib/utils";
import logo from "@/assets/komkast-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "What We Do", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-navy-foreground/10 bg-navy-deep/60 shadow-[0_18px_40px_-30px_oklch(0_0_0/0.8)] backdrop-blur-2xl backdrop-saturate-150"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex flex-col items-center" aria-label="KomKast home">
          <span className="flex items-center gap-1">
            <img src={logo} alt="KomKast logo" className="size-9 object-contain" />
            <span className="font-display text-lg font-extrabold tracking-tight text-navy-foreground">
              Kom<span className="text-gradient">Kast</span>
            </span>
          </span>
          <span className="mt-0.5 text-[0.5rem] font-medium uppercase tracking-[0.22em] text-navy-foreground/60 sm:text-[0.6rem]">
            Connect. Engage. Grow.
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy-foreground/70 transition-colors hover:text-navy-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ActionButton href="#contact" className="hidden lg:inline-flex">
            Book a Consultation
          </ActionButton>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="glass-dark grid size-10 place-items-center rounded-xl text-navy-foreground transition-colors hover:border-teal/60 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-navy-foreground/10 bg-navy-deep/75 px-5 pb-6 pt-2 backdrop-blur-2xl backdrop-saturate-150 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-navy-foreground/10 py-3.5 text-base font-medium text-navy-foreground/80"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <ActionButton href="#contact" onClick={() => setOpen(false)} className="mt-5 w-full">
            Book a Consultation
          </ActionButton>
        </div>
      )}
    </header>
  );
}
