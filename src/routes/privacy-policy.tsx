import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/Legal";
import { documentBlocks, WebsitePrivacyDetails } from "@/components/site/PolicyContent";
import sections from "@/lib/privacy-policy-content.json";

const blocks = documentBlocks(sections);
const detailsIndex = blocks.findIndex(block => block.number === "6");
const existing = blocks[detailsIndex];
if (existing) blocks[detailsIndex] = { ...existing, content: <>{existing.content}<WebsitePrivacyDetails /></> };
const title = "Privacy Policy | KomKast";
const description = "How KomKast collects, uses, shares and protects personal information.";
export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: PrivacyPolicy,
});
function PrivacyPolicy() {
  return <LegalLayout current="/privacy-policy" kicker="Legal" title="Privacy Policy" summary={description}
    effective="8 November 2026" updated="8 November 2026" blocks={blocks} />;
}
