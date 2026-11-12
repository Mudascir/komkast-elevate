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
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

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
    body: "To empower businesses through intelligent technology, effective communication, customer engagement and AI-powered automation that create lasting value for customers, partners and communities.",
  },
  {
    icon: Target,
    title: "Vision",
    body: "To become a globally trusted technology company, enabling businesses to connect, communicate, automate and grow through intelligent and innovative solutions.",
  },
  {
    icon: Rocket,
    title: "Mission",
    body: "To develop and deliver innovative technology products and solutions that strengthen business communication, enhance customer experiences, simplify operations, accelerate business growth, create meaningful employment opportunities and contribute positively to society and the global economy.",
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
              Technology for communication, engagement and growth
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              KomKast Global Technologies LLC is a technology company focused on business communication, AI-enabled customer engagement, CRM and business automation solutions for businesses worldwide.
            </p>
            <p>Our primary commercial product, BotNFlow, brings customer interactions, sales and support operations and workflow automation together in one connected platform.</p>
            <Button asChild variant="link" className="h-auto p-0 text-base"><Link to="/about">Explore our company profile</Link></Button>
            <p className="font-display text-xl font-semibold text-foreground">
              Practical, scalable solutions for SMBs through large enterprises.
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
  { icon: Users, title: "Customer Engagement & Communication", body: "Unified conversations across WhatsApp, email, SMS, voice and website live chat." },
  { icon: Building2, title: "CRM & Sales Pipeline", body: "Contact management, customer history, opportunities, deals and sales pipeline visibility." },
  { icon: Target, title: "Lead Generation & Qualification", body: "Lead discovery, website analysis, enrichment, profiling and scoring." },
  { icon: Bot, title: "AI Chatbots & Conversational Automation", body: "Business knowledge-based responses, custom AI instructions and automated customer interactions." },
  { icon: Workflow, title: "No-Code Workflow Automation", body: "Connect business activities and automate follow-ups, notifications, reminders and tasks." },
  { icon: Mic, title: "Calling & Sales Dialer", body: "Browser-based inbound and outbound calling, call recording, dialer and callback management within BotNFlow." },
  { icon: MessageSquareMore, title: "Campaigns & Customer Follow-Ups", body: "WhatsApp, email and SMS campaigns with audience targeting and automated follow-up sequences." },
  { icon: Compass, title: "Bookings, Analytics & Operational Control", body: "Booking pages, calendars, reminders, activity tracking, alerts and operational visibility." },
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
        <Reveal className="mt-10 border-l-2 border-teal pl-6">
          <p className="text-xs font-semibold uppercase text-primary">Primary Commercial Product</p>
          <h3 className="mt-3 text-3xl font-bold">{products[0].name}</h3>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted-foreground">{products[0].description} Built for marketing, sales and customer support teams, with white-label branding, custom domains and website live chat.</p>
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
        <div className="mt-12 border-t border-border pt-8">
          <h3 className="text-xl font-bold">Planned Products & Future Roadmap</h3>
          <p className="mt-3 text-muted-foreground">These products will be introduced as they progress towards commercial readiness.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">{products.filter(product => product.status === "planned").map(product => <div key={product.name} className="border-l-2 border-border pl-5">
            <p className="text-xs font-semibold uppercase text-primary">Planned · Not yet commercially available</p>
            <h4 className="mt-2 text-lg font-bold">{product.name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
          </div>)}</div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Business model / Partnerships ---------------- */

const steps = [
  {
    label: "KomKast",
    role: "Technology + Customer Success",
    body: "Business understanding, solution consulting, technology and product development, and continuous innovation.",
  },
  {
    label: "Implementation & Integration",
    role: "Configure, Deploy & Connect",
    body: "We support customers in configuring, deploying and integrating solutions into their existing business environments.",
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
              Business understanding. Technology expertise. Lasting value.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We work closely with customers to understand their objectives, identify suitable products and integration approaches, and support implementation and ongoing customer success.
            </p>
            <div className="mt-8 glass rounded-3xl p-6">
              <h3 className="font-display text-base font-bold">Our Guiding Principle</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Treat others the way you wish to be treated. This principle guides every decision, every conversation and every relationship.
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
            Supporting businesses across industries and global markets
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
    body: "Understanding your objectives, recommending practical solutions, delivering reliable and scalable technology, protecting customer information and providing responsive support.",
  },
  {
    title: "Partner Promise",
    body: "Fair and transparent relationships, clearly defined responsibilities, timely communication, mutual respect and shared success.",
  },
  {
    title: "Our Commitment",
    body: "Practical solutions, ethical business conduct, confidentiality, transparency and continuous improvement.",
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
          Share your business challenges — we will explore how BotNFlow or a tailored AI automation solution can help.
        </p>
        <ActionButton href="#contact" size="lg" className="mt-9">
          Get in Touch
        </ActionButton>
      </Reveal>
    </section>
  );
}
