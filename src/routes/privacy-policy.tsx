import { createFileRoute } from "@tanstack/react-router";
import { Bullets, ContactBlock, LegalLayout, P, type LegalBlock } from "@/components/site/Legal";

const title = "Privacy Policy | KomKast Global Technologies";
const description =
  "How KomKast Global Technologies LLC collects, uses, shares, retains, and protects personal information submitted through komkast.net.";

const blocks: LegalBlock[] = [
  {
    id: "introduction",
    heading: "Introduction",
    content: (
      <>
        <P>
          KomKast Global Technologies LLC ("KomKast," "we," "us," or "our") respects your privacy and
          is committed to protecting the information you provide to us.
        </P>
        <P>
          This Privacy Policy explains how KomKast may collect, use, disclose, retain, and protect
          personal information when you visit komkast.net, submit an inquiry, request a consultation,
          communicate with us, or otherwise interact with our website.
        </P>
        <P>
          KomKast is a business development, customer engagement, and technology solutions company
          specializing in AI-powered communications and automation solutions. Our purpose is to help
          organizations connect, communicate, and engage with their customers through intelligent
          communication and automation solutions.
        </P>
        <P>
          By using our website or providing information to us, you acknowledge the practices
          described in this Privacy Policy.
        </P>
      </>
    ),
  },
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    content: (
      <>
        <P>Depending on how you interact with KomKast, we may collect information including:</P>
        <Bullets
          items={[
            "Name",
            "Email address",
            "Company or organization name",
            "Job title or professional role",
            "Telephone number, where provided",
            "Country or general location",
            "Information contained in your inquiry or message",
            "Information provided when requesting a consultation",
            "Business requirements, interests, or areas of inquiry",
            "Communications and correspondence with KomKast",
            "Technical information relating to your use of our website",
          ]}
        />
        <P>
          We aim to collect only information that is reasonably relevant to the purpose for which it
          is provided.
        </P>
      </>
    ),
  },
  {
    id: "information-submitted",
    heading: "Information Submitted Through Our Website",
    content: (
      <>
        <P>Our website may provide contact, consultation, or inquiry forms.</P>
        <P>For example, our contact form may request your:</P>
        <Bullets items={["Name", "Email", "Company", "Message"]} />
        <P>
          Information submitted through these forms may be used to respond to your inquiry,
          understand your business requirements, arrange discussions, and manage the resulting
          business relationship.
        </P>
        <P>
          We may retain information submitted through our website as part of our legitimate business
          records, subject to applicable legal requirements and our retention practices.
        </P>
      </>
    ),
  },
  {
    id: "information-collected-automatically",
    heading: "Information Collected Automatically",
    content: (
      <>
        <P>
          When you visit our website, certain technical information may be collected automatically by
          our website infrastructure or service providers.
        </P>
        <P>Depending on the technologies implemented on the website, this may include:</P>
        <Bullets
          items={[
            "IP address",
            "Browser type",
            "Device type",
            "Operating system",
            "Referring website or page",
            "Pages visited",
            "Date and time of access",
            "General website usage information",
            "Technical and security information",
          ]}
        />
        <P>
          This information may be used for website operation, security, troubleshooting, performance,
          and, where applicable, analytics.
        </P>
        <P>
          We do not intend this section to imply that every listed technology is currently active on
          the website. Our actual use of cookies and similar technologies is addressed in our Cookie
          Policy.
        </P>
      </>
    ),
  },
  {
    id: "how-we-use",
    heading: "How We Use Your Information",
    content: (
      <>
        <P>
          KomKast may use information collected through the website or through direct business
          interactions to:
        </P>
        <Bullets
          items={[
            "Respond to inquiries and requests.",
            "Respond to contact-form submissions.",
            "Arrange consultations, meetings, or demonstrations.",
            "Understand your business objectives and requirements.",
            "Provide requested information.",
            "Discuss relevant solutions and services.",
            "Manage prospective and existing customer relationships.",
            "Communicate with business contacts regarding relevant business matters.",
            "Improve our website, services, and customer experience.",
            "Maintain appropriate business and communication records.",
            "Protect the security and integrity of our website and systems.",
            "Fulfill applicable legal, regulatory, contractual, or business obligations.",
          ]}
        />
        <P>
          This is consistent with KomKast's customer promise to understand business objectives,
          provide reliable and scalable solutions, provide responsive support, protect customer
          information, and continuously improve customer experience.
        </P>
      </>
    ),
  },
  {
    id: "business-communications",
    heading: "Business Communications",
    content: (
      <>
        <P>
          If you contact KomKast, request information, submit an inquiry, or request a consultation,
          we may use the contact information you provide to respond to your request and communicate
          with you regarding related business matters.
        </P>
        <P>
          Where permitted by applicable law, KomKast may also communicate with business contacts
          regarding relevant solutions, services, partnerships, or business opportunities.
        </P>
        <P>
          You may request that we stop sending marketing or promotional communications at any time by
          contacting us at{" "}
          <a className="font-medium text-primary hover:underline" href="mailto:info@komkast.net">
            info@komkast.net
          </a>{" "}
          or by using an unsubscribe mechanism where one is provided.
        </P>
      </>
    ),
  },
  {
    id: "sharing-of-information",
    heading: "Sharing of Information",
    content: (
      <>
        <P>KomKast does not sell personal information.</P>
        <P>We may share information where reasonably necessary with:</P>
        <Bullets
          items={[
            "Technology partners",
            "Service providers",
            "Website and hosting providers",
            "Business and communication platforms",
            "CRM or customer-management providers, when implemented",
            "Professional advisers",
            "Contractors or service providers acting on our behalf",
            "Government, regulatory, or law-enforcement authorities where legally required",
          ]}
        />
        <P>
          Where information is shared with service providers or partners, we seek to limit disclosure
          to information reasonably necessary for the relevant purpose.
        </P>
        <P>
          KomKast operates through a collaborative model in which it works with trusted technology
          partners while leading customer acquisition, market development, solution consulting,
          commercial engagement, and long-term customer relationship management.
        </P>
      </>
    ),
  },
  {
    id: "third-party-services",
    heading: "Third-Party Services and Websites",
    content: (
      <>
        <P>
          KomKast may work with, recommend, represent, integrate, or provide access to solutions and
          services offered by third parties.
        </P>
        <P>
          Information processed directly by third-party services may be subject to the privacy
          policies and terms of those third parties.
        </P>
        <P>
          Our website may also contain links to third-party websites. KomKast is not responsible for
          the privacy practices, security, content, or policies of third-party websites.
        </P>
        <P>
          We encourage users to review the privacy policies of third-party services before providing
          personal information to them.
        </P>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies and Similar Technologies",
    content: (
      <>
        <P>
          KomKast may use cookies and similar technologies to support website functionality,
          security, preferences, and, where implemented, website analytics.
        </P>
        <P>
          Our use of cookies and similar technologies is described in our{" "}
          <a className="font-medium text-primary hover:underline" href="/cookie-policy">
            Cookie Policy
          </a>
          .
        </P>
        <P>
          Where applicable law requires consent for non-essential cookies or similar technologies,
          KomKast will seek the required consent before activating those technologies.
        </P>
      </>
    ),
  },
  {
    id: "data-retention",
    heading: "Data Retention",
    content: (
      <>
        <P>
          KomKast retains personal information for as long as reasonably necessary for the purpose
          for which it was collected, including:
        </P>
        <Bullets
          items={[
            "Responding to inquiries",
            "Managing customer and business relationships",
            "Maintaining business records",
            "Fulfilling contractual or business obligations",
            "Complying with legal or regulatory requirements",
            "Resolving disputes",
            "Protecting our legitimate business interests",
          ]}
        />
        <P>Retention periods may vary depending on the nature and purpose of the information.</P>
        <P>
          KomKast aims to avoid retaining personal information longer than reasonably necessary for
          the relevant purpose.
        </P>
      </>
    ),
  },
  {
    id: "data-security",
    heading: "Data Security",
    content: (
      <>
        <P>
          KomKast takes reasonable organizational and technical measures designed to protect personal
          information against unauthorized access, misuse, loss, alteration, or disclosure.
        </P>
        <P>
          However, no internet transmission, website, electronic storage system, or method of
          transmission can be guaranteed to be completely secure.
        </P>
      </>
    ),
  },
  {
    id: "international-processing",
    heading: "International Data Processing",
    content: (
      <>
        <P>
          KomKast serves organizations across multiple markets and works with technology partners and
          service providers that may operate in different countries.
        </P>
        <P>
          As a result, information may be processed or stored outside the country in which it was
          originally collected.
        </P>
        <P>
          Where applicable law requires specific safeguards for international transfers, KomKast will
          seek to apply appropriate safeguards.
        </P>
      </>
    ),
  },
  {
    id: "privacy-rights",
    heading: "Your Privacy Rights",
    content: (
      <>
        <P>
          Depending on your location and applicable law, you may have rights concerning your personal
          information, including the right to:
        </P>
        <Bullets
          items={[
            "Request access to personal information we hold about you.",
            "Request correction of inaccurate information.",
            "Request deletion of personal information where applicable.",
            "Object to or request restriction of certain processing.",
            "Withdraw consent where processing is based on consent.",
            "Opt out of certain marketing communications.",
          ]}
        />
        <P>These rights may be subject to applicable legal limitations and exceptions.</P>
        <P>
          Privacy requests may be submitted to:{" "}
          <a className="font-medium text-primary hover:underline" href="mailto:info@komkast.net">
            info@komkast.net
          </a>
        </P>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    heading: "Children's Privacy",
    content: (
      <>
        <P>
          The KomKast website is intended primarily for businesses and professional users and is not
          directed toward children.
        </P>
        <P>
          KomKast does not knowingly seek to collect personal information from children through this
          website.
        </P>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to This Privacy Policy",
    content: (
      <>
        <P>
          KomKast may update this Privacy Policy from time to time to reflect changes in:
        </P>
        <Bullets
          items={[
            "Our website",
            "Our business operations",
            "Services or technologies",
            "Privacy practices",
            "Applicable legal or regulatory requirements",
          ]}
        />
        <P>
          The latest version will be published on this website together with its applicable effective
          or updated date.
        </P>
      </>
    ),
  },
  {
    id: "contact-us",
    heading: "Contact Us",
    content: (
      <>
        <P>
          For questions, concerns, or requests relating to this Privacy Policy or personal
          information, please contact:
        </P>
        <ContactBlock />
      </>
    ),
  },
];

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalLayout
      current="/privacy-policy"
      kicker="Legal"
      title="Privacy Policy"
      summary="How KomKast collects, uses, and protects the information you share with us."
      effective="7 September 2026"
      updated="7 September 2026"
      blocks={blocks}
    />
  );
}
