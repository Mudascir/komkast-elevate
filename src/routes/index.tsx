import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  About,
  BusinessModel,
  CtaBand,
  Industries,
  Promises,
  Solutions,
  Values,
} from "@/components/site/Sections";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "KomKast Global Technologies | BotNFlow & AI Business Automation";
const description =
  "KomKast develops business communication, AI-enabled customer engagement, CRM and automation solutions, with BotNFlow for SMBs and enterprises worldwide.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <Solutions />
        <BusinessModel />
        <Industries />
        <Promises />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
