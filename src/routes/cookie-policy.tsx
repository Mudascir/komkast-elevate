import { createFileRoute } from "@tanstack/react-router";
import { Bullets, ContactBlock, LegalLayout, P, type LegalBlock } from "@/components/site/Legal";

const title = "Cookie Policy | KomKast Global Technologies";
const description =
  "How KomKast Global Technologies LLC uses cookies and similar technologies on komkast.net, including consent, third-party cookies, and how to manage them.";

const blocks: LegalBlock[] = [
  {
    id: "introduction",
    heading: "Introduction",
    content: (
      <>
        <P>
          This Cookie Policy explains how KomKast Global Technologies LLC ("KomKast," "we," "us," or
          "our") may use cookies and similar technologies when you visit komkast.net.
        </P>
        <P>
          This Cookie Policy should be read together with our{" "}
          <a className="font-medium text-primary hover:underline" href="/privacy-policy">
            Privacy Policy
          </a>
          .
        </P>
      </>
    ),
  },
  {
    id: "what-are-cookies",
    heading: "What Are Cookies?",
    content: (
      <>
        <P>
          Cookies are small files or similar technologies that allow a website to store or access
          information on a user's device.
        </P>
        <P>Cookies and similar technologies may be used for purposes such as:</P>
        <Bullets
          items={[
            "Website functionality",
            "Security",
            "Remembering preferences",
            "Performance",
            "Analytics",
            "Understanding website usage",
            "Marketing or advertising, where implemented",
          ]}
        />
        <P>
          Cookie rules can also apply to technologies other than traditional cookies where they store
          or access information on a user's device.
        </P>
      </>
    ),
  },
  {
    id: "cookies-we-may-use",
    heading: "Cookies We May Use",
    content: (
      <>
        <P>
          The specific cookies used by the KomKast website may change as website functionality
          develops.
        </P>
        <P>Cookies and similar technologies may fall into the following categories.</P>
      </>
    ),
  },
  {
    id: "strictly-necessary",
    heading: "Strictly Necessary Cookies",
    content: (
      <>
        <P>
          These technologies may be required for the website to operate correctly, securely, or to
          provide functionality specifically requested by the visitor.
        </P>
        <P>Examples may include technologies supporting:</P>
        <Bullets
          items={[
            "Website security",
            "Session management",
            "Basic website functionality",
            "Form functionality",
            "Load balancing",
            "Technical operation",
          ]}
        />
        <P>
          Where applicable law provides an exemption for strictly necessary technologies, consent may
          not be required. However, KomKast will still provide appropriate information about such
          technologies where applicable.
        </P>
        <P>
          The classification of a technology as "strictly necessary" depends on whether it is
          genuinely essential to provide the requested website service; technologies that are merely
          convenient or useful to the website operator may not qualify.
        </P>
      </>
    ),
  },
  {
    id: "functional",
    heading: "Functional Cookies",
    content: (
      <>
        <P>
          Functional technologies may allow the website to remember user preferences or provide
          enhanced functionality.
        </P>
        <P>
          If implemented, these technologies may include preferences relating to website operation or
          user experience.
        </P>
        <P>
          Where applicable law requires consent, appropriate consent will be obtained before such
          technologies are activated.
        </P>
      </>
    ),
  },
  {
    id: "analytics",
    heading: "Analytics and Performance Cookies",
    content: (
      <>
        <P>
          If analytics technologies are implemented, they may help KomKast understand how visitors
          interact with the website.
        </P>
        <P>This may include information such as:</P>
        <Bullets
          items={[
            "Pages visited",
            "General traffic patterns",
            "Website performance",
            "General visitor interaction",
            "Technical performance",
          ]}
        />
        <P>
          Analytics technologies that are not strictly necessary will be treated as non-essential
          where required by applicable law.
        </P>
      </>
    ),
  },
  {
    id: "marketing",
    heading: "Marketing and Advertising Technologies",
    content: (
      <>
        <P>
          KomKast may in the future use marketing or advertising technologies to measure campaigns,
          understand engagement, or provide more relevant communications.
        </P>
        <P>
          Where such technologies require consent, KomKast will obtain the required consent before
          activating them.
        </P>
        <P>
          Marketing and advertising technologies should not be treated as strictly necessary merely
          because they support the commercial operation of a website.
        </P>
      </>
    ),
  },
  {
    id: "third-party",
    heading: "Third-Party Cookies and Technologies",
    content: (
      <>
        <P>
          Certain website features may be provided by third-party service providers. Depending on the
          services implemented, these providers may use cookies or similar technologies in accordance
          with their own policies.
        </P>
        <P>
          Where applicable, KomKast will seek to identify relevant third-party technologies and
          explain their purpose through the website's cookie information or consent mechanism.
        </P>
      </>
    ),
  },
  {
    id: "cookie-consent",
    heading: "Cookie Consent",
    content: (
      <>
        <P>
          At the time of publication of this policy, KomKast's use of cookies and similar technologies
          is subject to the technologies actually implemented on the website.
        </P>
        <P>
          KomKast does not intend to activate non-essential cookies or similar tracking technologies
          where applicable law requires prior consent without first obtaining the required consent.
        </P>
        <P>Where non-essential cookies are used and consent is required, the website may provide visitors with options such as:</P>
        <Bullets items={["Accept All", "Reject Non-Essential", "Cookie Settings"]} />
        <P>
          Consent should involve a clear positive action and should not be inferred simply from
          continued use of the website.
        </P>
      </>
    ),
  },
  {
    id: "managing-cookies",
    heading: "Managing Cookies",
    content: (
      <>
        <P>You can generally manage or delete cookies through your web browser.</P>
        <P>Depending on your browser, you may be able to:</P>
        <Bullets
          items={[
            "View cookies stored on your device.",
            "Delete cookies.",
            "Block cookies.",
            "Block third-party cookies.",
            "Allow or restrict cookies.",
            "Receive warnings before cookies are stored.",
          ]}
        />
        <P>Blocking or deleting certain cookies may affect website functionality.</P>
      </>
    ),
  },
  {
    id: "preference-changes",
    heading: "Cookie Preference Changes",
    content: (
      <>
        <P>
          Where KomKast implements a cookie-consent mechanism, visitors should be provided with a
          reasonable way to review or change their cookie preferences.
        </P>
        <P>
          Where applicable, previously given consent may also need to be renewed if KomKast materially
          changes the cookies or technologies used on the website.
        </P>
      </>
    ),
  },
  {
    id: "current-position",
    heading: "Current Website Position",
    content: (
      <>
        <P>
          The KomKast website currently includes a business contact form through which visitors may
          submit information such as their name, email address, company, and message.
        </P>
        <P>
          The collection and handling of information submitted through that form is governed primarily
          by the Privacy Policy.
        </P>
        <P>
          The future connection of the contact form to a database, CRM, or other business system does
          not by itself make a cookie-consent banner necessary. Cookie requirements depend on the
          cookies and similar technologies actually used by the website.
        </P>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to This Cookie Policy",
    content: (
      <>
        <P>KomKast may update this Cookie Policy when:</P>
        <Bullets
          items={[
            "Website functionality changes.",
            "New technologies are introduced.",
            "Third-party services are added.",
            "Cookie usage changes.",
            "Applicable legal or regulatory requirements change.",
          ]}
        />
        <P>
          The latest version will be published on the website with the applicable effective or updated
          date.
        </P>
      </>
    ),
  },
  {
    id: "contact-us",
    heading: "Contact Us",
    content: (
      <>
        <P>Questions regarding this Cookie Policy may be directed to:</P>
        <ContactBlock />
      </>
    ),
  },
];

export const Route = createFileRoute("/cookie-policy")({
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
  component: CookiePolicy,
});

function CookiePolicy() {
  return (
    <LegalLayout
      current="/cookie-policy"
      kicker="Legal"
      title="Cookie Policy"
      summary="How KomKast uses cookies and similar technologies, and how you can manage them."
      effective="7 September 2026"
      updated="7 September 2026"
      blocks={blocks}
    />
  );
}
