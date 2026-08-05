import Link from "next/link";
import { mailtoSupport, siteConfig } from "@/lib/config";

const footerLinks = [
  { href: "/company", label: "Company" },
  { href: "/bbb-health", label: "BBB Health" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="container-page section-space !py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            <p className="display-font text-xl font-semibold tracking-tight">
              {siteConfig.brandName}
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-muted">
              {siteConfig.brandName} is the product and development brand of{" "}
              {siteConfig.legalEntity}.
            </p>
            <a
              href={mailtoSupport()}
              className="inline-flex min-h-11 items-center text-sm font-medium text-accent hover:text-accent-hover"
            >
              {siteConfig.supportEmail}
            </a>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3 md:grid-cols-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={mailtoSupport()}
                  className="inline-flex min-h-11 items-center text-sm text-muted transition-colors hover:text-foreground"
                >
                  {siteConfig.supportEmail}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-sm text-muted">
            © {siteConfig.copyrightYear} {siteConfig.legalEntity}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
