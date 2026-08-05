import Link from "next/link";
import { ProductVisual } from "@/components/ProductVisual";
import { createPageMetadata } from "@/lib/metadata";
import { mailtoSupport, siteConfig } from "@/lib/config";

export const metadata = createPageMetadata({
  title: `${siteConfig.brandName} | ${siteConfig.legalEntity}`,
  description:
    "Built by Bigger is the product studio of Bigger Enterprises LLC, developing thoughtful, privacy-conscious consumer software including BBB Health.",
  path: "",
  absoluteTitle: true,
});

const principles = [
  {
    title: "Clear over complicated",
    body: "Complex systems should produce understandable experiences.",
  },
  {
    title: "Privacy by design",
    body: "Products should collect and transmit only what they genuinely need.",
  },
  {
    title: "Useful in real life",
    body: "Features should solve repeatable problems, not simply add complexity.",
  },
] as const;

const features = [
  "Reusable meal-planning templates",
  "Check-off food tracking",
  "Complete and partial daily logs",
  "Weight-goal progress and projections",
  "Personalized calorie and macronutrient targets",
  "Adaptive energy-expenditure estimates",
  "Weekly progress reports",
  "On-device nutrition and weight history",
  "User-controlled JSON backup and restore",
] as const;

export default function HomePage() {
  return (
    <>
      <section className="section-space border-b border-border">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="animate-fade-up">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
              {siteConfig.legalEntity}
            </p>
            <h1 className="display-font mt-4 max-w-xl text-4xl font-semibold text-foreground sm:text-5xl">
              Thoughtful software for better everyday decisions.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.brandName} is the product studio of{" "}
              {siteConfig.legalEntity}. We design focused, privacy-conscious
              software that turns complicated information into clear, useful
              action.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/bbb-health"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover dark:text-background"
              >
                Explore BBB Health
              </Link>
              <Link
                href="/company"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/20"
              >
                About the company
              </Link>
            </div>
          </div>

          <div className="animate-fade-up-delay">
            <ProductVisual />
          </div>
        </div>
      </section>

      <section className="section-space border-b border-border">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="display-font text-3xl font-semibold tracking-tight sm:text-4xl">
              Built with purpose
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.legalEntity} develops consumer software centered on
              clarity, usefulness, and responsible handling of personal
              information. Our products are designed to help people understand
              their own data and make more informed everyday decisions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="border-t border-border pt-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="display-font mt-3 text-xl font-semibold">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-b border-border">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
              Featured product
            </p>
            <h2 className="display-font mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {siteConfig.productName}
            </h2>
            <p className="mt-3 inline-flex rounded-full border border-border bg-surface-soft px-3 py-1 text-xs font-medium text-muted">
              {siteConfig.productStatus}
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              BBB Health is a plan-first nutrition and weight-goal app for
              iPhone. It helps people prepare reusable eating plans, track what
              they actually eat, monitor weight trends, and receive
              recommendations informed by their completed logs and progress.
            </p>
            <Link
              href="/bbb-health"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover dark:text-background"
            >
              Learn more about BBB Health
            </Link>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 border-b border-border pb-3 text-sm text-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space border-b border-border">
        <div className="container-page max-w-3xl">
          <h2 className="display-font text-3xl font-semibold tracking-tight sm:text-4xl">
            Personal information deserves careful treatment.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            BBB Health is being developed around an on-device-first approach.
            Nutrition history, weigh-ins, progress photos, plans, and
            recommendations are stored locally on the user’s device unless the
            user deliberately exports a backup.
          </p>
          <Link
            href="/privacy"
            className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-accent hover:text-accent-hover"
          >
            Read the privacy policy
          </Link>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page max-w-3xl">
          <h2 className="display-font text-3xl font-semibold tracking-tight sm:text-4xl">
            Contact Bigger Enterprises
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            For company, product, support, or business inquiries, contact{" "}
            {siteConfig.legalEntity} using our domain-based email address.
          </p>
          <a
            href={mailtoSupport()}
            className="mt-6 inline-flex min-h-11 items-center text-lg font-semibold text-accent hover:text-accent-hover"
          >
            {siteConfig.supportEmail}
          </a>
        </div>
      </section>
    </>
  );
}
