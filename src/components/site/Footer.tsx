import { Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/komkast-logo.png";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "What We Do", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Partnerships", href: "/#partnerships" },
  { label: "Contact", href: "/#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Terms of Use", to: "/terms-of-use" },
] as const;

export function Footer() {
  return (
    <footer className="surface-navy">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="inline-flex flex-col items-center">
              <div className="flex items-center gap-1">
                <img src={logo} alt="KomKast logo" className="size-9 object-contain" />
                <span className="font-display text-lg font-extrabold text-navy-foreground">
                  Kom<span className="text-gradient">Kast</span>
                </span>
              </div>
              <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.22em] text-navy-foreground/60">
                Connect. Engage. Grow.
              </span>
            </div>
            <p className="mt-5 max-w-sm leading-relaxed text-navy-foreground/70">
              Building Stronger Relationships Through Intelligent Customer Engagement.
            </p>
            <a
              href="https://www.linkedin.com/company/komkast/"
              target="_blank"
              rel="noreferrer"
              aria-label="KomKast on LinkedIn"
              className="glass-dark mt-7 inline-grid size-10 place-items-center rounded-xl text-navy-foreground transition-colors hover:border-teal hover:text-teal"
            >
              <Linkedin className="size-5" />
            </a>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-navy-foreground">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-navy-foreground">
              Legal
            </h3>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-navy-foreground">
              Headquarters
            </h3>
            <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-navy-foreground/70">
              <p>1612 Bingham St UNIT B, Houston, TX 77007, USA</p>
              <p>
                <a href="mailto:info@komkast.net" className="hover:text-navy-foreground">
                  info@komkast.net
                </a>
              </p>
              <p>
                <a
                  href="https://komkast.net/"
                  className="hover:text-navy-foreground"
                  target="_blank"
                  rel="noreferrer"
                >
                  komkast.net
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-navy-foreground/10 pt-6">
          <p className="text-xs text-navy-foreground/60">
            © 2026 KomKast Global Technologies LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
