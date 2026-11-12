import { Link } from "@tanstack/react-router";
import { Bullets, P, type LegalBlock } from "./Legal";

type ContentItem = { kind: string; text: string };
export type DocumentSection = { id: string; number: string; heading: string; items: ContentItem[] };

export function DocumentContent({ items }: { items: ContentItem[] }) {
  const groups: { bullet: boolean; texts: string[] }[] = [];
  for (const item of items) {
    const previous = groups.at(-1);
    if (item.kind === "bullet" && previous?.bullet) previous.texts.push(item.text);
    else groups.push({ bullet: item.kind === "bullet", texts: [item.text] });
  }
  return <>{groups.map((group, index) => group.bullet
    ? <Bullets key={index} items={group.texts} />
    : <P key={index}>{group.texts[0]}</P>)}</>;
}

export function documentBlocks(sections: DocumentSection[]): LegalBlock[] {
  return sections.map(section => ({ ...section, content: <DocumentContent items={section.items} /> }));
}

export function WebsitePrivacyDetails() {
  return <div className="mt-6 space-y-4 border-t border-border pt-6">
    <h3 className="font-display font-bold">Technologies currently used on this website</h3>
    <P>We use Lovable's visitor analytics without cookies. It stores nothing on your device, does not keep IP addresses and does not identify visitors. It records pages visited, referring sources, country, browser, operating system and device type, time on page, page speed, errors and clicks. Detailed data is retained for 90 days and daily summaries for one year.</P>
    <P>For visitors in the EU/EEA, the UK, Switzerland and Canada, or whose location cannot be determined, clicks wait until analytics is accepted. Elsewhere clicks are recorded unless analytics is rejected. Clicks are never recorded when your browser sends Global Privacy Control, even after acceptance. Page visits, time on page, page speed and errors are recorded for every visitor, without cookies or identifying anyone.</P>
    <P>Lovable collects this data for us. <a href="https://lovable.dev/privacy" className="text-primary underline" target="_blank" rel="noreferrer">Lovable's privacy policy</a> explains how it handles it. Your choice is saved in your browser for up to 12 months; a refusal is renewed after approximately six months. You can change it using Cookie settings in the footer.</P>
    <P>Our contact form sends your name, email, company and message to Lovable Cloud for storage and handling of your inquiry. The contact form does not require a visitor account. We do not currently load advertising tags on this site.</P>
    <P>Google Fonts receives browser requests for the website's fonts, including technical connection information such as your IP address. Our embedded OpenStreetMap location map sends browser requests to OpenStreetMap when it loads; its provider receives technical connection information and may use its own storage. External links, including LinkedIn, are governed by those providers' policies when you visit them.</P>
    <P>See our <Link to="/privacy-policy" className="text-primary underline">Privacy Policy</Link> and <Link to="/cookie-policy" className="text-primary underline">Cookie Policy</Link> for additional information.</P>
  </div>;
}