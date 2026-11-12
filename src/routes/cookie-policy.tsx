import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/Legal";
import { documentBlocks, WebsitePrivacyDetails } from "@/components/site/PolicyContent";
import sections from "@/lib/cookie-policy-content.json";

const blocks = documentBlocks(sections);
const detailsIndex = blocks.findIndex(block => block.number === "6");
const existing = blocks[detailsIndex];
if (existing) blocks[detailsIndex] = { ...existing, content: <>{existing.content}<WebsitePrivacyDetails /></> };
const title = "Cookie Policy | KomKast";
const description = "How KomKast uses cookies and similar technologies and how to manage your preferences.";
export const Route = createFileRoute("/cookie-policy")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: CookiePolicy,
});
function CookiePolicy() {
  return <LegalLayout current="/cookie-policy" kicker="Legal" title="Cookie Policy" summary={description}
    effective="8 November 2026" updated="8 November 2026" blocks={blocks} />;
}
