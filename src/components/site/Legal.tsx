import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/komkast-logo.png";
import heroNetwork from "@/assets/hero-network.jpg";
import { ActionButton } from "./ActionButton";
import { cn } from "@/lib/utils";
import { Footer } from "./Footer";

export type LegalBlock = {
  id: string;
  heading: string;
  /** Displayed clause number; defaults to the block's position. */
  number?: string;
  content: ReactNode;
};

const policies = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/cookie-policy", label: "Cookie Policy" },
  { to: "/terms-of-use", label: "Terms of Use" },
] as const;

/** Paragraph inside a legal section. */
export function P({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed text-foreground/80">{children}</p>;
}

/** Bulleted list inside a legal section. */
export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 leading-relaxed text-foreground/80">
          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gradient-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Approved public contact details (KK-PUB-001 v1.1). */
export function ContactBlock() {
  return (
    <div className="glass rounded-2xl p-5 sm:p-6">
      <p className="font-display text-sm font-bold text-foreground">
        KomKast Global Technologies LLC
      </p>
      <address className="mt-2 space-y-1 text-sm not-italic leading-relaxed text-foreground/75">
        <p>1612 Bingham St, Unit B</p>
        <p>Houston, TX 77007, USA</p>
        <p>
          Email:{" "}
          <a className="font-medium text-primary hover:underline" href="mailto:info@komkast.net">
            info@komkast.net
          </a>
        </p>
        <p>
          Website:{" "}
          <a
            className="font-medium text-primary hover:underline"
            href="https://komkast.net/"
            target="_blank"
            rel="noreferrer"
          >
            https://komkast.net/
          </a>
        </p>
      </address>
    </div>
  );
}

/** Cross-links to the other policy documents. */
function RelatedPolicies({ current }: { current: string }) {
  return (
    <aside className="glass mt-12 rounded-2xl p-5 sm:p-6">
      <h2 className="font-display text-sm font-bold text-foreground">Related policies</h2>
      <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
        {policies
          .filter((p) => p.to !== current)
          .map((p) => (
            <li key={p.to}>
              <Link
                to={p.to}
                className="text-sm font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                {p.label}
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  );
}

export function LegalLayout({
  current,
  kicker,
  title,
  summary,
  effective,
  updated,
  blocks,
}: {
  current: string;
  kicker: string;
  title: string;
  summary: string;
  effective: string;
  updated: string;
  blocks: LegalBlock[];
}) {
  const [active, setActive] = useState(blocks[0]?.id ?? "");

  useEffect(() => {
    const targets = blocks
      .map((b) => document.getElementById(b.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-110px 0px -65% 0px", threshold: [0, 1] },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [blocks]);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-navy-foreground/10 bg-navy-deep">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <Link
            to="/"
            aria-label="KomKast home"
            className="flex items-center gap-1 text-navy-foreground"
          >
            <img src={logo} alt="KomKast logo" className="size-8 object-contain" />
            <span className="font-display text-base font-extrabold tracking-tight">
              Kom<span className="text-gradient">Kast</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Policies">
            {policies.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                aria-current={p.to === current ? "page" : undefined}
                className={cn(
                  "text-sm font-medium transition-colors",
                  p.to === current
                    ? "text-navy-foreground"
                    : "text-navy-foreground/60 hover:text-navy-foreground",
                )}
              >
                {p.label}
              </Link>
            ))}
          </nav>

          <ActionButton href="/#contact" className="hidden h-10 px-5 sm:inline-flex">
            Book a Consultation
          </ActionButton>
        </div>
      </header>

      <div className="mesh-dark relative overflow-hidden">
        <img
          src={heroNetwork}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground/70 transition-colors hover:text-navy-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to KomKast
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            {kicker}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-navy-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-navy-foreground/70">{summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="glass-dark rounded-full px-4 py-2 text-xs font-medium text-navy-foreground/80">
              Effective Date: {effective}
            </span>
            <span className="glass-dark rounded-full px-4 py-2 text-xs font-medium text-navy-foreground/80">
              Last Updated: {updated}
            </span>
          </div>
        </div>
      </div>

      <main className="mesh-light">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-8">
          <nav
            aria-label="On this page"
            className="hidden self-start lg:sticky lg:top-24 lg:block lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              On this page
            </p>
            <ul className="mt-4 space-y-1 border-l border-border">
              {blocks.map((b) => (
                <li key={b.id}>
                  <a
                    href={`#${b.id}`}
                    className={cn(
                      "-ml-px block border-l-2 py-1.5 pl-4 text-sm leading-snug transition-colors",
                      active === b.id
                        ? "border-teal font-semibold text-foreground"
                        : "border-transparent text-muted-foreground hover:border-border hover:text-foreground",
                    )}
                  >
                    {b.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="glass-panel rounded-3xl p-6 sm:p-10">
            {blocks.map((b, i) => (
              <section key={b.id} id={b.id} className="scroll-mt-24 pt-10 first:pt-0">
                <h2 className="flex items-baseline gap-3 font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
                  <span className="text-gradient text-sm font-extrabold tabular-nums">
                    {b.number ?? String(i + 1)}
                  </span>
                  {b.heading}
                </h2>
                <div className="mt-4 space-y-4 text-[0.95rem]">{b.content}</div>
              </section>
            ))}

            <RelatedPolicies current={current} />
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
