import { createFileRoute } from "@tanstack/react-router";
import { Bullets, ContactBlock, LegalLayout, P, type LegalBlock } from "@/components/site/Legal";

const title = "Terms of Use | KomKast Global Technologies";
const description =
  "Terms of Use for komkast.net, operated by KomKast Global Technologies LLC: acceptable use, intellectual property, technology partners, disclaimers and governing law.";

const blocks: LegalBlock[] = [
  {
    id: "introduction",
    heading: "Introduction",
    content: (
      <>
        <P>
          These Terms of Use ("Terms") govern your access to and use of the website operated by
          KomKast Global Technologies LLC ("KomKast," "we," "us," or "our").
        </P>
        <P>
          By accessing or using this website, you agree to these Terms. If you do not agree with
          these Terms, please discontinue use of the website.
        </P>
      </>
    ),
  },
  {
    id: "about-komkast",
    heading: "About KomKast",
    content: (
      <>
        <P>
          KomKast Global Technologies LLC is a business development, customer engagement, and
          technology solutions company specializing in AI-powered communications and automation
          solutions.
        </P>
        <P>
          KomKast works with trusted technology partners to provide appropriate solutions to
          customers while maintaining a technology-agnostic approach.
        </P>
      </>
    ),
  },
  {
    id: "website-purpose",
    heading: "Website Purpose",
    content: (
      <>
        <P>The information provided through this website is intended to provide general information about:</P>
        <Bullets
          items={[
            "KomKast",
            "Our capabilities",
            "Solutions and services",
            "Industries we serve",
            "Partnerships",
            "Customer engagement and automation solutions",
            "Ways to contact or engage with KomKast",
          ]}
        />
        <P>
          Website content is provided for informational purposes and does not, by itself, constitute
          a binding commercial offer or contractual commitment.
        </P>
      </>
    ),
  },
  {
    id: "acceptable-use",
    heading: "Acceptable Use",
    content: (
      <>
        <P>You agree to use this website only for lawful purposes. You must not:</P>
        <Bullets
          items={[
            "Use the website in violation of applicable laws or regulations.",
            "Attempt unauthorized access to the website or its systems.",
            "Introduce malicious code, malware, or harmful software.",
            "Interfere with website availability, security, or performance.",
            "Misuse contact or inquiry forms.",
            "Attempt to obtain information through unauthorized means.",
            "Use website content for fraudulent, unlawful, or misleading purposes.",
            "Infringe the intellectual-property rights of KomKast or third parties.",
          ]}
        />
      </>
    ),
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property",
    content: (
      <>
        <P>Unless otherwise stated, content published on this website, including:</P>
        <Bullets
          items={[
            "Text",
            "Logos",
            "Branding",
            "Graphics",
            "Images",
            "Website design",
            "Layout",
            "Other original materials",
          ]}
        />
        <P>
          is owned by or licensed to KomKast and may be protected by applicable intellectual-property
          laws.
        </P>
        <P>
          You may access and view website content for legitimate informational or business purposes.
        </P>
        <P>
          You may not reproduce, modify, distribute, publish, commercially exploit, or otherwise use
          KomKast-owned content without prior authorization, except where permitted by applicable
          law.
        </P>
        <P>
          Third-party names, trademarks, logos, products, and services remain the property of their
          respective owners.
        </P>
      </>
    ),
  },
  {
    id: "technology-partners",
    heading: "Technology Partners and Third-Party Solutions",
    content: (
      <>
        <P>
          KomKast works with trusted technology partners and may market, recommend, represent,
          facilitate, integrate, or provide access to third-party solutions.
        </P>
        <P>
          The ownership, development, operation, licensing, and technical support of such solutions
          may remain with the applicable technology provider.
        </P>
        <P>Third-party products and services may be subject to separate:</P>
        <Bullets
          items={[
            "Terms and conditions",
            "Privacy policies",
            "Licensing agreements",
            "Service agreements",
            "Commercial agreements",
          ]}
        />
        <P>
          Nothing on the KomKast website should be interpreted as KomKast claiming ownership of a
          third-party product or technology unless expressly stated.
        </P>
        <P>
          This reflects KomKast's approved business model, under which technology partners may
          design, develop, and support underlying technology platforms while KomKast leads customer
          acquisition, market development, solution consulting, commercial engagement, and long-term
          customer relationship management.
        </P>
      </>
    ),
  },
  {
    id: "accuracy-of-information",
    heading: "Accuracy of Information",
    content: (
      <>
        <P>KomKast makes reasonable efforts to provide accurate and useful information.</P>
        <P>
          However, website information is provided for general informational purposes and may be
          changed, updated, or withdrawn without notice.
        </P>
        <P>
          KomKast does not guarantee that all website information will always be complete, current,
          or error-free.
        </P>
      </>
    ),
  },
  {
    id: "solutions-features-availability",
    heading: "Solutions, Features, and Availability",
    content: (
      <>
        <P>
          Descriptions of solutions, services, capabilities, integrations, and features appearing on
          this website are general in nature.
        </P>
        <P>Actual availability may depend on:</P>
        <Bullets
          items={[
            "Customer requirements",
            "Solution configuration",
            "Technology partner",
            "Geographic market",
            "Third-party platforms",
            "Technical feasibility",
            "Commercial arrangements",
            "Applicable contractual terms",
          ]}
        />
        <P>
          Specific commitments relating to functionality, pricing, implementation, service levels, or
          deliverables apply only when confirmed through an applicable written agreement.
        </P>
      </>
    ),
  },
  {
    id: "no-professional-advice",
    heading: "No Professional Advice",
    content: (
      <>
        <P>
          Information provided through this website is for general business and informational
          purposes.
        </P>
        <P>
          Nothing on this website constitutes legal, financial, tax, investment, technical, or other
          regulated professional advice.
        </P>
        <P>Where appropriate, users should seek advice from qualified professionals.</P>
      </>
    ),
  },
  {
    id: "third-party-links",
    heading: "Third-Party Links",
    content: (
      <>
        <P>
          This website may contain links to websites or services operated by third parties.
        </P>
        <P>
          Such links may be provided for convenience or informational purposes and do not
          necessarily constitute endorsement by KomKast.
        </P>
        <P>
          KomKast does not control and is not responsible for third-party websites, their content,
          security, availability, privacy practices, or terms.
        </P>
      </>
    ),
  },
  {
    id: "disclaimer-limitation",
    heading: "Disclaimer and Limitation of Liability",
    content: (
      <>
        <P>
          To the maximum extent permitted by applicable law, KomKast shall not be responsible for
          indirect, incidental, special, consequential, or similar losses arising solely from your
          access to, inability to access, or reliance upon general information provided through this
          website.
        </P>
        <P>
          Nothing in these Terms excludes or limits liability where such exclusion or limitation is
          prohibited by applicable law.
        </P>
      </>
    ),
  },
  {
    id: "privacy-and-cookies",
    heading: "Privacy and Cookies",
    content: (
      <>
        <P>
          Information collected through the website is handled in accordance with our{" "}
          <a
            className="font-medium text-primary hover:underline"
            href="/privacy-policy"
          >
            Privacy Policy
          </a>
          .
        </P>
        <P>
          The use of cookies and similar technologies is addressed in our{" "}
          <a className="font-medium text-primary hover:underline" href="/cookie-policy">
            Cookie Policy
          </a>
          .
        </P>
      </>
    ),
  },
  {
    id: "changes-to-the-website",
    heading: "Changes to the Website",
    content: (
      <>
        <P>
          KomKast may modify, update, suspend, or discontinue any part of the website at any time.
        </P>
        <P>
          We do not guarantee that the website or any particular content, feature, or functionality
          will always be available.
        </P>
      </>
    ),
  },
  {
    id: "changes-to-these-terms",
    heading: "Changes to These Terms",
    content: (
      <>
        <P>KomKast may update these Terms from time to time.</P>
        <P>
          The updated version will be published on the website and will become effective upon
          publication unless otherwise stated.
        </P>
        <P>
          Your continued use of the website after updated Terms are published constitutes acceptance
          of the revised Terms to the extent permitted by applicable law.
        </P>
      </>
    ),
  },
  {
    id: "governing-law",
    heading: "Governing Law",
    content: (
      <P>
        These Terms shall be governed by the laws applicable in the State of Texas, United States,
        without regard to conflict-of-law principles, except where mandatory applicable law provides
        otherwise.
      </P>
    ),
  },
  {
    id: "contact-us",
    heading: "Contact Us",
    content: (
      <>
        <P>Questions regarding these Terms may be directed to:</P>
        <ContactBlock />
      </>
    ),
  },
];

export const Route = createFileRoute("/terms-of-use")({
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
  component: TermsOfUse,
});

function TermsOfUse() {
  return (
    <LegalLayout
      current="/terms-of-use"
      kicker="Legal"
      title="Website Terms of Use"
      summary="The terms that apply when you access and use the KomKast website."
      effective="7 September 2026"
      updated="7 September 2026"
      blocks={blocks}
    />
  );
}
