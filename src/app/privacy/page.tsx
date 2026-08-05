import { createPageMetadata } from "@/lib/metadata";
import { mailtoPrivacy, mailtoSupport, siteConfig } from "@/lib/config";

/**
 * Privacy policy content for Bigger Enterprises LLC / Built by Bigger.
 * This text should be reviewed by qualified legal counsel before a broad
 * public launch.
 */

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for the Built by Bigger website and BBB Health, operated by Bigger Enterprises LLC.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="section-space">
      <article className="container-page prose-legal max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
          Legal
        </p>
        <h1 className="display-font mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">
          Effective date: {siteConfig.effectiveDate}
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted">
          {siteConfig.legalEntity}, operating under the {siteConfig.brandName}{" "}
          brand, is responsible for this website and for the development of BBB
          Health.
        </p>

        <h2>Scope</h2>
        <p>
          This Privacy Policy describes how {siteConfig.legalEntity} handles
          information in connection with the website at {siteConfig.domain} and
          the BBB Health iPhone application currently offered in private beta.
        </p>

        <h2>Information processed by the website</h2>
        <p>
          The website does not use advertising trackers. The website does not
          intentionally use analytics or marketing cookies.
        </p>
        <p>
          The hosting and infrastructure provider may automatically process
          ordinary technical request information needed to deliver and secure
          the website, such as IP address, browser type, timestamps, and
          requested pages.
        </p>
        <p>
          Email sent to the company is processed according to the contents of
          the communication.
        </p>

        <h2>BBB Health information</h2>
        <p>
          BBB Health does not currently require an account. Primary app
          information is stored locally on the user’s device. This can include
          profile settings, nutrition entries, dishes, ingredients, meal
          templates, completed and partial logs, weigh-ins, progress photos,
          targets, estimates, reports, reminders, and app preferences.
        </p>
        <p>
          Personalized energy-expenditure estimates and recommendations are
          calculated on the device.
        </p>
        <p>
          Nutrition-label recognition uses Apple device capabilities and a
          custom parser. The app does not use generative artificial intelligence
          to interpret nutrition labels.
        </p>
        <p>
          The app does not automatically upload the user’s complete nutrition
          history, weight history, progress photos, or meal plans to{" "}
          {siteConfig.legalEntity}.
        </p>
        <p>
          {siteConfig.legalEntity} does not sell personal information and does
          not use health or nutrition information for third-party behavioral
          advertising.
        </p>

        <h2>On-device storage</h2>
        <p>
          BBB Health is designed around an on-device-first approach. Nutrition
          history, weigh-ins, progress photos, plans, recommendations, and
          related records remain on the user’s device unless the user
          deliberately exports or shares them.
        </p>

        <h2>User-directed exports and backups</h2>
        <p>
          Users can deliberately export a JSON backup. Once users export or
          share a backup outside the app, they control where it is stored and
          who can access it. {siteConfig.legalEntity} does not receive exported
          backups unless a user independently chooses to send one to the
          company.
        </p>

        <h2>USDA food search</h2>
        <p>
          When a user deliberately performs a USDA food search, the search
          request is sent to the USDA service so the requested food information
          can be returned. The USDA service is operated independently of{" "}
          {siteConfig.legalEntity}.
        </p>

        <h2>Communications with us</h2>
        <p>
          Support emails and beta feedback may contain information voluntarily
          provided by the user, such as device details, app version information,
          screenshots, or descriptions of issues. Email is processed so we can
          respond and maintain appropriate records.
        </p>

        <h2>Service providers</h2>
        <p>
          We rely on infrastructure providers to host and deliver this website.
          Those providers may process ordinary technical request information as
          described above. When a user initiates a USDA food search from BBB
          Health, the USDA service processes the search request necessary to
          return food information.
        </p>

        <h2>Data retention</h2>
        <p>
          The company retains support communications only as reasonably
          necessary to respond, maintain records, protect the service, or meet
          legal obligations.
        </p>
        <p>
          Information stored only on a user’s device is retained according to
          the user’s own use of the app and any backups the user creates.
        </p>

        <h2>User choices and deletion</h2>
        <p>
          Users can delete locally stored information through available app
          controls or by deleting the application, subject to any backups they
          created separately. {siteConfig.legalEntity} cannot remotely delete
          information that exists only on a user’s device.
        </p>
        <p>
          Users can request deletion of information directly controlled by{" "}
          {siteConfig.legalEntity} by emailing{" "}
          <a href={mailtoPrivacy()}>{siteConfig.privacyEmail}</a>.
        </p>

        <h2>Children’s privacy</h2>
        <p>
          The product is not directed to children under 13. We do not knowingly
          collect personal information from children under 13 through this
          website or BBB Health.
        </p>

        <h2>Security</h2>
        <p>
          We take reasonable steps to protect information under our control. No
          method of electronic storage or transmission can be guaranteed to be
          completely secure.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will revise the effective date at the top of this page. Continued use
          of the website or BBB Health after an update means the revised policy
          applies to that continued use.
        </p>

        <h2>Contact us</h2>
        <p>
          For privacy questions or requests, contact{" "}
          {siteConfig.legalEntity}:
        </p>
        <p>
          {siteConfig.legalEntity}
          <br />
          {siteConfig.brandName}
          <br />
          Privacy contact:{" "}
          <a href={mailtoPrivacy()}>{siteConfig.privacyEmail}</a>
          <br />
          General contact:{" "}
          <a href={mailtoSupport()}>{siteConfig.supportEmail}</a>
          <br />
          Website: {siteConfig.domain}
        </p>
      </article>
    </div>
  );
}
