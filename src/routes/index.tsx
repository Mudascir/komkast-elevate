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

const title = "KomKast Global Technologies | Intelligent Customer Engagement";
const description =
  "KomKast is a global customer engagement company delivering AI-powered communication, automation, CPaaS and conversational AI solutions for enterprises worldwide.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
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
