import heroNetwork from "@/assets/hero-network.jpg";
import { ActionButton } from "./ActionButton";
import { Reveal } from "./Reveal";

const chips = ["BotNFlow", "Customer Engagement", "CRM", "AI Automation"];

export function Hero() {
  return (
    <section id="home" className="relative isolate mesh-dark overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <Reveal className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy-foreground/80">
            KomKast Global Technologies LLC
          </Reveal>
          <Reveal as="h1" delay={80} className="mt-6 text-3xl font-extrabold leading-[1.15] text-navy-foreground sm:text-5xl lg:text-5xl">
            Connecting Businesses. Enabling Conversations. <span className="text-gradient">Driving Growth.</span>
          </Reveal>
          <Reveal as="p" delay={160} className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/75">
            Business communication, AI-enabled customer engagement, CRM and automation — brought together with BotNFlow for businesses worldwide.
          </Reveal>
          <Reveal delay={240} className="mt-9 flex flex-wrap gap-3">
            <ActionButton href="#contact" size="lg">
              Talk to Us
            </ActionButton>
            <ActionButton href="#solutions" variant="ghostDark" size="lg">
              Explore Solutions
            </ActionButton>
          </Reveal>
          <Reveal delay={320} className="mt-10 flex flex-wrap gap-2.5">
            {chips.map((c) => (
              <span
                key={c}
                className="glass-dark rounded-full px-3.5 py-1.5 text-xs font-medium text-navy-foreground/75 transition-colors hover:border-teal/50 hover:text-navy-foreground"
              >
                {c}
              </span>
            ))}
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="glass-dark glass-sheen relative overflow-hidden rounded-4xl p-1.5 shadow-lift">
            <img
              src={heroNetwork}
              alt="Abstract network of connected nodes representing AI-powered customer communication"
              width={1408}
              height={1104}
              className="h-full w-full rounded-[calc(var(--radius)+10px)] object-cover"
            />
            <div className="glass-dark absolute inset-x-4 bottom-4 rounded-2xl p-4">
              <p className="font-display text-sm font-semibold text-navy-foreground">
                BotNFlow: one connected platform
              </p>
              <p className="mt-1 text-xs leading-relaxed text-navy-foreground/70">
                Customer communication, calling, CRM, lead generation and workflow automation in one connected environment.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
