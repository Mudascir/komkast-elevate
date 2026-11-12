import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { DocumentContent } from "@/components/site/PolicyContent";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import sections from "@/lib/faqs-content.json";

const title = "Frequently Asked Questions | KomKast & BotNFlow";
const description = "Answers about KomKast, BotNFlow, AI automation, customer engagement, partnerships and getting started.";
const groups = [
  { name: "About KomKast", from: 1, to: 4 },
  { name: "BotNFlow", from: 5, to: 21 },
  { name: "Solutions and Engagement", from: 22, to: 26 },
  { name: "Business and Partnerships", from: 27, to: 29 },
  { name: "Getting Started", from: 30, to: 32 },
];

export const Route = createFileRoute("/faqs")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: FAQs,
});

function FAQs() {
  return <div className="min-h-screen bg-background">
    <header className="surface-navy"><div className="mx-auto max-w-7xl px-5 py-6 lg:px-8"><Link to="/" className="inline-flex items-center gap-2 text-sm"><ArrowLeft className="size-4" />Back to KomKast</Link></div></header>
    <main>
      <div className="surface-navy"><div className="mx-auto max-w-4xl px-5 pb-14 pt-8">
        <p className="text-sm font-semibold text-teal">KomKast Global Technologies LLC</p>
        <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h1>
        <p className="mt-4 text-navy-foreground/75">Connecting Businesses. Enabling Conversations. Driving Growth.</p>
        <p className="mt-5 text-xs text-navy-foreground/60">Updated 8 November 2026</p>
      </div></div>
      <div className="mx-auto max-w-4xl space-y-12 px-5 py-14">
        {groups.map(group => <section key={group.name}>
          <h2 className="mb-5 font-display text-xl font-bold">{group.name}</h2>
          <Accordion type="multiple">{sections.filter(section => Number(section.number) >= group.from && Number(section.number) <= group.to).map(section => <AccordionItem key={section.id} value={section.id}>
            <AccordionTrigger className="gap-4 py-5 text-base"><span className="flex items-baseline gap-3"><span className="text-sm tabular-nums text-primary">{section.number}</span>{section.heading}</span></AccordionTrigger>
            <AccordionContent className="space-y-4 text-[0.95rem]"><DocumentContent items={section.items} /></AccordionContent>
          </AccordionItem>)}</Accordion>
        </section>)}
      </div>
    </main>
    <Footer />
  </div>;
}