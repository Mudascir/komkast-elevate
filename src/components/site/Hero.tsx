import heroNetwork from "@/assets/hero-network.jpg";
import { ActionButton } from "./ActionButton";
import { Reveal } from "./Reveal";

const chips = ["AI Automation", "Conversational AI", "CPaaS", "Omnichannel Messaging"];

export function Hero() {
  return (
    <section id="home" className="relative isolate mesh-dark overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <Reveal className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy-foreground/80">
            Global Customer Engagement Company
          </Reveal>
          <Reveal as="h1" delay={80} className="mt-6 text-4xl font-extrabold leading-[1.06] text-navy-foreground sm:text-5xl lg:text-6xl">
            Building Stronger Relationships Through{" "}
            <span className="text-gradient">Intelligent Customer Engagement</span>
          </Reveal>
          <Reveal as="p" delay={160} className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/75">
            Empowering businesses worldwide with AI-powered communication, automation, and customer
            engagement solutions.
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
                Technology-agnostic by design
              </p>
              <p className="mt-1 text-xs leading-relaxed text-navy-foreground/70">
                We select the best-fit platform for every client, then lead the engagement
                end-to-end.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
