import { createPageMetadata } from "@/lib/metadata";
import { mailtoSupport, siteConfig } from "@/lib/config";

/**
 * Website and beta product terms for Bigger Enterprises LLC / Built by Bigger.
 *
 * IMPORTANT:
 * - These terms should be reviewed by qualified legal counsel before a broad
 *   public launch.
 * - Set siteConfig.GOVERNING_STATE in src/lib/config.ts before relying on the
 *   Terms publicly. Until configured, the governing-law section is omitted
 *   from the rendered page (no placeholder text is shown to visitors).
 */

export const metadata = createPageMetadata({
  title: "Website and Beta Product Terms",
  description:
    "Website and beta product terms for Built by Bigger and BBB Health, operated by Bigger Enterprises LLC.",
  path: "/terms",
});

export default function TermsPage() {
  const governingState = siteConfig.GOVERNING_STATE.trim();

  return (
    <div className="section-space">
      <article className="container-page prose-legal max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
          Legal
        </p>
        <h1 className="display-font mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Website and Beta Product Terms
        </h1>
        <p className="mt-4 text-sm text-muted">
          Effective date: {siteConfig.effectiveDate}
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted">
          These terms apply to the website at {siteConfig.domain} and to access
          to BBB Health during its private beta. The website and product are
          provided by {siteConfig.legalEntity}, operating under the{" "}
          {siteConfig.brandName} brand.
        </p>

        <h2>Acceptance of terms</h2>
        <p>
          By accessing this website or using BBB Health during the private beta,
          you agree to these terms. If you do not agree, do not use the website
          or the beta product.
        </p>

        <h2>Website information</h2>
        <p>
          Content on this website is provided for general informational
          purposes about {siteConfig.legalEntity}, the {siteConfig.brandName}{" "}
          brand, and BBB Health. Website content may change as products and
          company information evolve.
        </p>

        <h2>BBB Health private beta</h2>
        <p>
          BBB Health is currently in private beta and is not publicly available
          on the App Store. Beta features, availability, and behavior may change
          without notice. Access may be limited, modified, or withdrawn at any
          time.
        </p>

        <h2>General-wellness disclaimer</h2>
        <p>
          BBB Health is intended for general wellness and informational
          purposes. It is designed to help users plan meals, track food intake,
          monitor weight-goal progress, and review personalized guidance based
          on information they enter.
        </p>

        <h2>No medical advice</h2>
        <p>
          BBB Health does not provide medical diagnosis or treatment and is not
          a substitute for advice from a qualified healthcare professional. Do
          not use BBB Health to diagnose, treat, prevent, or cure any medical
          condition.
        </p>

        <h2>User responsibility for entered information and goals</h2>
        <p>
          You are responsible for the accuracy of information you enter into BBB
          Health, including foods, amounts, weigh-ins, goals, and targets. You
          are also responsible for how you interpret and apply recommendations or
          estimates generated from that information.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The website, BBB Health, and related branding, text, design, and
          software are owned by {siteConfig.legalEntity} or its licensors. You
          may not copy, modify, distribute, reverse engineer, or create
          derivative works from the website or beta product except as expressly
          permitted by law or with prior written permission.
        </p>

        <h2>Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the website or beta product for unlawful purposes</li>
          <li>Attempt to disrupt, overload, or compromise the website or related systems</li>
          <li>Misrepresent your identity when contacting {siteConfig.legalEntity}</li>
          <li>Probe, scan, or test the vulnerability of the website except with prior written authorization</li>
          <li>Use automated means to access the website in a manner that impairs its availability</li>
        </ul>

        <h2>Third-party services</h2>
        <p>
          BBB Health may allow you to request food information from the USDA
          food search service. That service is operated independently of{" "}
          {siteConfig.legalEntity}. The website may be delivered through hosting
          and infrastructure providers. Your use of third-party services may be
          subject to those providers’ own terms and policies.
        </p>

        <h2>Availability and changes</h2>
        <p>
          We may update, suspend, or discontinue the website, beta access, or
          any feature at any time. We may also revise these terms by posting an
          updated version with a new effective date.
        </p>

        <h2>Disclaimers</h2>
        <p>
          The website and BBB Health private beta are provided on an “as is”
          and “as available” basis without warranties of any kind, whether
          express or implied, including implied warranties of merchantability,
          fitness for a particular purpose, and non-infringement, to the fullest
          extent permitted by law.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {siteConfig.legalEntity} will
          not be liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of data, profits, or goodwill, arising
          out of or related to your use of the website or BBB Health private
          beta. Our total liability for any claim arising out of or relating to
          these terms or the services described here is limited to the greater
          of (a) the amount you paid to {siteConfig.legalEntity} for access to
          the beta product in the twelve months before the claim, or (b) fifty
          U.S. dollars.
        </p>

        <h2>Termination of beta access</h2>
        <p>
          We may suspend or terminate your access to the BBB Health private beta
          at any time, with or without notice, including if we discontinue the
          beta, if access is no longer appropriate, or if you violate these
          terms.
        </p>

        {governingState ? (
          <>
            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of the State of{" "}
              {governingState}, without regard to its conflict-of-law
              principles.
            </p>
          </>
        ) : null}

        <h2>Contact information</h2>
        <p>
          Questions about these terms may be sent to{" "}
          {siteConfig.legalEntity} at{" "}
          <a href={mailtoSupport()}>{siteConfig.supportEmail}</a>.
        </p>
        <p>
          {siteConfig.legalEntity}
          <br />
          {siteConfig.brandName}
          <br />
          Website: {siteConfig.domain}
        </p>
      </article>
    </div>
  );
}
