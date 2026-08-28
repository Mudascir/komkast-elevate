import {
  Accessibility,
  Bot,
  Building2,
  Compass,
  Cpu,
  Fingerprint,
  GraduationCap,
  Handshake,
  Heart,
  HeartPulse,
  Landmark,
  Lightbulb,
  MessageSquareMore,
  Mic,
  Package,
  Pill,
  Radio,
  Rocket,
  RouteIcon,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Truck,
  Users,
  Workflow,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { ActionButton } from "./ActionButton";

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{children}</span>
  );
}

/* ---------------- About ---------------- */

const pillars = [
  {
    icon: Compass,
    title: "Purpose",
    body: "To help businesses build stronger relationships through intelligent communication, trusted customer engagement, and innovative technology that creates lasting value.",
  },
  {
    icon: Target,
    title: "Vision",
    body: "To become a globally trusted leader in customer engagement, transforming how businesses connect, communicate, and build lasting relationships.",
  },
  {
    icon: Rocket,
    title: "Mission",
    body: "To empower organizations with intelligent customer engagement solutions that strengthen relationships, enhance experiences, accelerate growth, and create meaningful employment opportunities.",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-border/50 mesh-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              A Customer Engagement Company
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              KomKast Global Technologies LLC empowers organizations to build stronger customer
              relationships through intelligent communication, AI-driven engagement, automation, and
              innovative digital technologies.
            </p>
            <p className="font-display text-xl font-semibold text-foreground">
              Technology is our capability — not our identity.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 100}
              className="glass glass-sheen glass-hover rounded-3xl p-8"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-accent">
                <p.icon className="size-6 text-navy-deep" strokeWidth={2} />
              </span>
              <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- iCARE Values ---------------- */

const values = [
  {
    letter: "I",
    icon: Fingerprint,
    title: "Integrity",
    body: "Honest, ethical, transparent in every interaction.",
  },
  {
    letter: "C",
    icon: Heart,
    title: "Customer Success",
    body: "We measure our success by our customers' success.",
  },
  {
    letter: "A",
    icon: ShieldCheck,
    title: "Accountability",
    body: "We own our commitments and deliver on our promises.",
  },
  {
    letter: "R",
    icon: Accessibility,
    title: "Respect",
    body: "Trust, professionalism, and mutual respect in every relationship.",
  },
  {
    letter: "E",
    icon: Sparkles,
    title: "Excellence",
    body: "Continuous improvement in people, process, and solutions.",
  },
];

const supporting = [
  {
    icon: Handshake,
    title: "Partnership",
    body: "Long-term, collaborative relationships that compound value for everyone involved.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "Continuous exploration of new technology and smarter ways to engage customers.",
  },
];

export function Values() {
  return (
    <section className="surface-navy relative isolate overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(40rem_24rem_at_85%_10%,oklch(0.66_0.19_253/0.28),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal">Core Values</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            The <span className="text-gradient">iCARE</span> Principles
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-foreground/70">
            Five principles that shape how we work, plus the two pillars that carry them forward.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => (
            <Reveal
              key={v.letter}
              delay={i * 80}
              className="glass-dark glass-sheen glass-dark-hover rounded-3xl p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-extrabold text-gradient">
                  {v.letter}
                </span>
                <v.icon className="size-5 text-teal" />
              </div>
              <h3 className="mt-5 text-base font-bold text-navy-foreground">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{v.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {supporting.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 100}
              className="glass-dark glass-sheen glass-dark-hover flex gap-5 rounded-3xl p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-accent">
                <s.icon className="size-5 text-navy-deep" />
              </span>
              <div>
                <h3 className="text-base font-bold text-navy-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="blockquote"
          delay={120}
          className="mx-auto mt-16 max-w-3xl text-center font-display text-2xl font-bold leading-snug text-navy-foreground sm:text-3xl"
        >
          “We CARE by building lasting{" "}
          <span className="text-gradient">Partnerships</span> and driving continuous{" "}
          <span className="text-gradient">Innovation</span>.”
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Solutions ---------------- */

const solutions = [
  {
    icon: Bot,
    title: "AI Automation Solutions",
    body: "Intelligent automation that removes friction across service, sales, and operations.",
  },
  {
    icon: Users,
    title: "Customer Engagement Solutions & Platforms",
    body: "Engagement platforms that unify every customer conversation and touchpoint.",
  },
  {
    icon: Radio,
    title: "CPaaS Solutions",
    body: "Communications platform capabilities embedded directly into your products and journeys.",
  },
  {
    icon: MessageSquareMore,
    title: "Conversational AI",
    body: "AI assistants that understand intent and resolve requests in natural language.",
  },
  {
    icon: Mic,
    title: "Voice AI",
    body: "Natural, human-like voice experiences for inbound and outbound engagement.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    body: "Automated processes that connect teams, systems, and customer outcomes.",
  },
  {
    icon: RouteIcon,
    title: "Business Messaging (Omnichannel)",
    body: "One consistent conversation across messaging, chat, email, and voice channels.",
  },
  {
    icon: Cpu,
    title: "Digital Transformation Consulting",
    body: "Advisory that turns engagement strategy into pragmatic, measurable delivery.",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="border-b border-border/50 mesh-light-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            Intelligent engagement, delivered end-to-end
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 4) * 80}
              className="glass glass-sheen glass-hover group rounded-3xl p-7"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-accent/70 backdrop-blur-sm transition-colors group-hover:bg-gradient-accent">
                <s.icon className="size-5 text-primary transition-colors group-hover:text-navy-deep" />
              </span>
              <h3 className="mt-6 text-base font-bold leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Business model / Partnerships ---------------- */

const steps = [
  {
    label: "KomKast",
    role: "Commercial Leadership + Customer Success",
    body: "Business development, customer acquisition, solution consulting, and long-term relationship management.",
  },
  {
    label: "Technology Partners",
    role: "Build & Support",
    body: "Trusted partners design, build, and support the underlying platforms and integrations.",
  },
  {
    label: "Customer Success",
    role: "Measurable Outcomes",
    body: "Stronger relationships, better experiences, and accelerated growth for every client.",
  },
];

export function BusinessModel() {
  return (
    <section id="partnerships" className="border-b border-border/50 mesh-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <Eyebrow>How We Deliver Value</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              A technology-agnostic, partner-driven model
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              KomKast leads customer acquisition, market development, solution consulting, and
              long-term relationship management, while trusted technology partners design, build,
              and support the platforms.
            </p>
            <div className="mt-8 glass rounded-3xl p-6">
              <h3 className="font-display text-base font-bold">Platform Independence</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Freedom to select the best-fit technology for each client — no vendor lock-in, no
                compromise on outcomes.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {steps.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 120}
                className="glass glass-sheen glass-hover rounded-3xl p-7"
              >
                <span className="font-display text-sm font-extrabold text-primary">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-xl font-bold">{s.label}</h3>
                <p className="mt-1 text-sm font-semibold text-gradient">{s.role}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Industries ---------------- */

const industries = [
  { icon: Landmark, label: "Banking & Financial Services" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Pill, label: "Pharmaceuticals" },
  { icon: ShoppingBag, label: "Retail & E-commerce" },
  { icon: Truck, label: "Logistics" },
  { icon: GraduationCap, label: "Education" },
  { icon: Radio, label: "Telecommunications" },
  { icon: Building2, label: "Government" },
  { icon: Package, label: "Hospitality" },
  { icon: Users, label: "Professional Services" },
];

export function Industries() {
  return (
    <section id="industries" className="border-b border-border/50 mesh-light-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Industries We Serve</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            Engagement expertise across regulated and high-volume sectors
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <Reveal
              key={ind.label}
              delay={(i % 5) * 70}
              className="glass glass-sheen glass-hover flex items-center gap-3 rounded-2xl px-5 py-4"
            >
              <ind.icon className="size-5 shrink-0 text-primary" />
              <span className="text-sm font-semibold leading-snug">{ind.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Promises ---------------- */

const promises = [
  {
    title: "Customer Promise",
    body: "Secure, scalable, reliable, innovative solutions with exceptional service and long-term partnership.",
  },
  {
    title: "Partner Promise",
    body: "Fair, transparent, collaborative relationships built on trust and shared success.",
  },
  {
    title: "People Promise",
    body: "A respected, empowered, growth-focused environment.",
  },
];

const measures = ["Customer Success", "Business Growth", "People Development", "Innovation"];

export function Promises() {
  return (
    <section className="border-b border-border/50 mesh-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Why Choose KomKast</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
            Three promises we hold ourselves to
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {promises.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 100}
              className="glass glass-sheen glass-hover rounded-3xl p-8"
            >
              <span className="block h-1.5 w-14 rounded-full bg-gradient-accent" />
              <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={120}
          className="mt-16 glass-panel rounded-4xl p-8 lg:p-10"
        >
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
            How We Measure Success
          </h3>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {measures.map((m) => (
              <div key={m} className="border-l-2 border-electric pl-5">
                <p className="font-display text-lg font-bold leading-snug">{m}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CTA band ---------------- */

export function CtaBand() {
  return (
    <section className="mesh-dark py-20 lg:py-24">
      <Reveal className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <h2 className="text-3xl font-extrabold leading-tight text-navy-foreground sm:text-4xl lg:text-5xl">
          Let's Build Something Meaningful Together
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-navy-foreground/75">
          Tell us where customer engagement should go next — we'll bring the strategy, the partners,
          and the technology.
        </p>
        <ActionButton href="#contact" size="lg" className="mt-9">
          Get in Touch
        </ActionButton>
      </Reveal>
    </section>
  );
}
