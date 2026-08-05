import { createPageMetadata } from "@/lib/metadata";
import { mailtoPrivacy, mailtoSupport, siteConfig } from "@/lib/config";

export const metadata = createPageMetadata({
  title: "BBB Health Support",
  description:
    "Get help with BBB Health private beta, report problems, ask privacy questions, or submit feedback to Bigger Enterprises LLC.",
  path: "/support",
});

const faqs = [
  {
    question: "Is BBB Health publicly available?",
    answer:
      "No. BBB Health is currently in private beta and is not yet publicly available on the App Store.",
  },
  {
    question: "Where is my information stored?",
    answer:
      "BBB Health currently stores its primary nutrition and weight information on your device. The app does not automatically upload your complete nutrition history, weight history, progress photos, or meal plans to Bigger Enterprises LLC.",
  },
  {
    question: "Does BBB Health require an account?",
    answer:
      "No. BBB Health does not currently require an account, social profile, or public profile.",
  },
  {
    question: "How do backups work?",
    answer:
      "You can deliberately export a JSON backup from the app. Once you export or share a backup outside the app, you control where it is stored and who can access it. You can also restore a backup you previously created.",
  },
  {
    question: "Is BBB Health medical advice?",
    answer:
      "No. BBB Health is intended for general wellness and informational purposes. It does not provide medical diagnosis or treatment and is not a substitute for advice from a qualified healthcare professional.",
  },
  {
    question: "How can I report a bug?",
    answer:
      "Email support@builtbybigger.com with what you were trying to do, what happened instead, your iPhone and iOS version, the BBB Health app version, screenshots when appropriate, and whether the issue can be repeated.",
  },
  {
    question:
      "How can I request deletion of information held by Bigger Enterprises LLC?",
    answer:
      "Locally stored app data can be removed through the app’s controls or by deleting the app. The company cannot remotely delete information that exists only on your device. If you want to request deletion of information directly held by Bigger Enterprises LLC, such as support emails or feedback you sent, email privacy@builtbybigger.com.",
  },
] as const;

export default function SupportPage() {
  return (
    <div className="section-space">
      <div className="container-page max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
          Support
        </p>
        <h1 className="display-font mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          BBB Health Support
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          BBB Health is currently in private beta. Beta testers can use this
          page to get help, report problems, or submit feedback.
        </p>

        <section className="mt-14 border-t border-border pt-10">
          <h2 className="display-font text-2xl font-semibold tracking-tight">
            Report a problem
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            When contacting support, please include:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-muted">
            <li>What you were trying to do</li>
            <li>What happened instead</li>
            <li>Your iPhone and iOS version</li>
            <li>The BBB Health app version</li>
            <li>Screenshots when appropriate</li>
            <li>Whether the issue can be repeated</li>
          </ul>
          <a
            href={mailtoSupport("BBB Health Support")}
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover dark:text-background"
          >
            Email support
          </a>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="display-font text-2xl font-semibold tracking-tight">
            Privacy request
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            BBB Health currently stores its primary nutrition and weight
            information on the user’s device. Questions about privacy or
            company-controlled information can be sent to our privacy contact.
          </p>
          <a
            href={mailtoPrivacy("Privacy Request")}
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/20"
          >
            Contact privacy
          </a>
        </section>

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="display-font text-2xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-14 text-sm text-muted">
          Support for {siteConfig.productName} is provided by{" "}
          {siteConfig.legalEntity}.
        </p>
      </div>
    </div>
  );
}
