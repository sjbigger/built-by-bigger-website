import { createPageMetadata } from "@/lib/metadata";
import { mailtoSupport, siteConfig } from "@/lib/config";

export const metadata = createPageMetadata({
  title: "About Bigger Enterprises",
  description:
    "Built by Bigger is the public product and development brand of Bigger Enterprises LLC, creators of BBB Health.",
  path: "/company",
});

export default function CompanyPage() {
  return (
    <div className="section-space">
      <div className="container-page max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
          Company
        </p>
        <h1 className="display-font mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          About Bigger Enterprises
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-foreground">
          {siteConfig.brandName} is the public product and development brand of{" "}
          {siteConfig.legalEntity}.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {siteConfig.legalEntity} is a software company focused on creating
          clear, practical consumer products. The company’s current work
          includes BBB Health, an iPhone application for nutrition planning,
          food tracking, weight-goal monitoring, and personalized progress
          guidance.
        </p>

        <section className="mt-14 border-t border-border pt-10">
          <h2 className="display-font text-2xl font-semibold tracking-tight">
            What we build
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We build focused consumer software that helps people organize
            information, see patterns in their own data, and make clearer
            everyday decisions. Our current product, BBB Health, brings meal
            planning, food tracking, weight-goal monitoring, and adaptive weekly
            guidance into one connected workflow for iPhone.
          </p>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="display-font text-2xl font-semibold tracking-tight">
            How we work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Product work at {siteConfig.legalEntity} starts with a real
            problem and a clear user workflow. We prefer features that remain
            useful over time, interfaces that stay understandable under pressure,
            and systems that respect the user’s attention. Development is
            deliberate: fewer moving parts, careful defaults, and room for the
            user to stay in control.
          </p>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="display-font text-2xl font-semibold tracking-tight">
            Privacy and responsibility
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Personal health and nutrition information deserves careful
            treatment. BBB Health is being developed with an on-device-first
            approach so that primary nutrition history, weigh-ins, progress
            photos, plans, and recommendations remain on the user’s device unless
            the user deliberately exports a backup. We avoid collecting more
            information than a product genuinely needs.
          </p>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="display-font text-2xl font-semibold tracking-tight">
            Company information
          </h2>
          <dl className="mt-6 space-y-4 text-sm sm:text-base">
            <div className="grid gap-1 sm:grid-cols-[11rem_1fr]">
              <dt className="font-medium text-foreground">Legal entity</dt>
              <dd className="text-muted">{siteConfig.legalEntity}</dd>
            </div>
            <div className="grid gap-1 sm:grid-cols-[11rem_1fr]">
              <dt className="font-medium text-foreground">Website</dt>
              <dd className="text-muted">{siteConfig.domain}</dd>
            </div>
            <div className="grid gap-1 sm:grid-cols-[11rem_1fr]">
              <dt className="font-medium text-foreground">Contact</dt>
              <dd>
                <a
                  href={mailtoSupport()}
                  className="text-accent hover:text-accent-hover"
                >
                  {siteConfig.supportEmail}
                </a>
              </dd>
            </div>
            <div className="grid gap-1 sm:grid-cols-[11rem_1fr]">
              <dt className="font-medium text-foreground">Primary product</dt>
              <dd className="text-muted">{siteConfig.productName}</dd>
            </div>
            <div className="grid gap-1 sm:grid-cols-[11rem_1fr]">
              <dt className="font-medium text-foreground">Product status</dt>
              <dd className="text-muted">Private beta</dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}
