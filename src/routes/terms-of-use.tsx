import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/site/Legal";
import { documentBlocks } from "@/components/site/PolicyContent";
import sections from "@/lib/terms-of-use-content.json";

const blocks = documentBlocks(sections);

const title = "Website Terms & Conditions | KomKast";
const description = "The terms governing your access to and use of the KomKast website.";
export const Route = createFileRoute("/terms-of-use")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: TermsOfUse,
});
function TermsOfUse() {
  return <LegalLayout current="/terms-of-use" kicker="Legal" title="Website Terms & Conditions" summary={description}
    effective="8 November 2026" updated="8 November 2026" blocks={blocks} />;
}
