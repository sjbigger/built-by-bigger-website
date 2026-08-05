import Link from "next/link";
import { siteConfig } from "@/lib/config";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 no-underline ${className}`}
      aria-label={`${siteConfig.brandName} home`}
    >
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-[0.7rem] font-semibold tracking-tight text-accent"
      >
        Bb
      </span>
      <span className="display-font text-[1.05rem] font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
        {siteConfig.brandName}
      </span>
    </Link>
  );
}
