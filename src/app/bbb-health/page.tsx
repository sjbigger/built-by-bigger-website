import { createPageMetadata } from "@/lib/metadata";
import { mailtoSupport, siteConfig } from "@/lib/config";

export const metadata = createPageMetadata({
  title: "BBB Health",
  description:
    "BBB Health is a plan-first nutrition and weight-goal app for iPhone, currently in private beta from Bigger Enterprises LLC.",
  path: "/bbb-health",
});

const stages = [
  {
    title: "Plan",
    body: "Create reusable eating-day templates with meals, foods, times, preparation reminders, and shopping lists.",
  },
  {
    title: "Track",
    body: "Start from a plan and check foods off as they are eaten. Adjust amounts, add unplanned foods, and record whether the day is complete or partial.",
  },
  {
    title: "Learn",
    body: "Use completed food logs and weigh-ins to estimate personal energy expenditure while communicating the uncertainty of that estimate.",
  },
  {
    title: "Adjust",
    body: "Review weekly results and choose whether to apply the app’s recommended calorie and protein targets.",
  },
] as const;

const controls = [
  "Users decide what to log.",
  "Users distinguish complete from partial days.",
  "Users can edit previous entries.",
  "Users can choose custom calorie and macro targets.",
  "Users can export and restore their information.",
  "The app does not require a social profile or public account.",
] as const;

export default function BbbHealthPage() {
  return (
    <>
      <section className="section-space border-b border-border">
        <div className="container-page max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
            {siteConfig.productName}
          </p>
          <h1 className="display-font mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Plan your nutrition. Track what happened. Adjust with confidence.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            BBB Health brings meal planning, daily food tracking, weight
            progress, and adaptive weekly guidance into one connected workflow.
          </p>
          <p className="mt-4 inline-flex rounded-full border border-border bg-surface-soft px-3 py-1 text-xs font-medium text-muted">
            {siteConfig.productStatus}
          </p>
        </div>
      </section>

      <section className="section-space border-b border-border">
        <div className="container-page">
          <h2 className="display-font text-3xl font-semibold tracking-tight">
            A connected workflow
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {stages.map((stage, index) => (
              <div key={stage.title} className="border-t border-border pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Stage 0{index + 1}
                </p>
                <h3 className="display-font mt-3 text-2xl font-semibold">
                  {stage.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {stage.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-b border-border">
        <div className="container-page max-w-3xl">
          <h2 className="display-font text-3xl font-semibold tracking-tight">
            Designed around user control
          </h2>
          <ul className="mt-8 space-y-4">
            {controls.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-b border-border pb-4 text-base text-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space border-b border-border">
        <div className="container-page max-w-3xl">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="display-font text-2xl font-semibold tracking-tight">
              Private beta
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              BBB Health is currently being tested with a small group of users
              and is not yet publicly available on the App Store.
            </p>
            <a
              href={mailtoSupport("BBB Health Inquiry")}
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover dark:text-background"
            >
              Contact us about BBB Health
            </a>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page max-w-3xl">
          <h2 className="display-font text-2xl font-semibold tracking-tight">
            Wellness disclaimer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            BBB Health is intended for general wellness and informational
            purposes. It does not provide medical diagnosis or treatment and is
            not a substitute for advice from a qualified healthcare
            professional.
          </p>
        </div>
      </section>
    </>
  );
}
