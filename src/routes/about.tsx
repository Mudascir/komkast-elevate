import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ActionButton } from "@/components/site/ActionButton";
import profile from "@/lib/company-profile.json";
import heroNetwork from "@/assets/hero-network.jpg";

const title = "About KomKast | Corporate Profile";
const description = "Meet KomKast Global Technologies LLC: our purpose, iCARE principles, BotNFlow platform, technology capabilities and commitment to lasting partnerships.";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  return <div className="min-h-screen bg-background">
    <Header solid />
    <main>
      <section className="surface-navy relative isolate overflow-hidden pb-16 pt-32 sm:pb-20">
        <img src={heroNetwork} alt="" aria-hidden className="absolute inset-0 -z-10 size-full object-cover opacity-25" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-semibold text-teal">About Us</p>
          <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">KomKast Global Technologies LLC</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/85">Connecting Businesses. Enabling Conversations. Driving Growth.</p>
          <p className="mt-7 text-xs text-navy-foreground/65">Corporate Profile · KK-PUB-001 · Version 1.0 · Effective 5 November 2026</p>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[230px_minmax(0,1fr)] lg:px-8 lg:py-20">
        <nav aria-label="Company profile sections" className="self-start lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto">
          <p className="text-xs font-semibold uppercase text-muted-foreground">Company Profile</p>
          <ul className="mt-4 space-y-3 border-l border-border pl-4">{profile.filter(section => !section.number.includes(".")).map(section => <li key={section.id}><a href={`#${section.id}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">{section.heading}</a></li>)}</ul>
        </nav>
        <article className="min-w-0">{profile.map(section => <section key={section.id} id={section.id} className="scroll-mt-24 border-b border-border py-10 first:pt-0 last:border-0">
          <h2 className="flex items-baseline gap-3 text-xl font-bold sm:text-2xl"><span className="text-sm tabular-nums text-primary">{section.number}</span>{section.heading}</h2>
          <div className="mt-6 space-y-4">{section.items.map((item, index) => item.kind === "heading"
            ? <h3 key={index} className="pt-3 text-base font-bold">{item.text}</h3>
            : item.kind === "bullet"
              ? <ul key={index} className="list-disc pl-5 marker:text-primary"><li className="leading-relaxed text-muted-foreground">{item.text}</li></ul>
              : <p key={index} className="leading-relaxed text-muted-foreground">{item.text}</p>)}</div>
        </section>)}</article>
      </div>
      <section className="surface-navy py-14"><div className="mx-auto max-w-7xl px-5 lg:px-8"><h2 className="text-2xl font-bold">Building long-term partnerships</h2><p className="mt-4 max-w-2xl text-navy-foreground/75">Tell us about your business and the challenges you want to address.</p><ActionButton href="/#contact" className="mt-6">Start a Conversation</ActionButton></div></section>
    </main>
    <Footer />
  </div>;
}