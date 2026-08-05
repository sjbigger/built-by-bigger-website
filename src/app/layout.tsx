import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { siteConfig } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brandName} | ${siteConfig.legalEntity}`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "Built by Bigger is the product studio of Bigger Enterprises LLC, developing thoughtful, privacy-conscious consumer software including BBB Health.",
  applicationName: siteConfig.brandName,
  authors: [{ name: siteConfig.legalEntity }],
  creator: siteConfig.legalEntity,
  publisher: siteConfig.legalEntity,
  keywords: [
    "Built by Bigger",
    "Bigger Enterprises LLC",
    "BBB Health",
    "nutrition app",
    "meal planning",
    "weight goals",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} | ${siteConfig.legalEntity}`,
    description:
      "Built by Bigger is the product studio of Bigger Enterprises LLC, developing thoughtful, privacy-conscious consumer software including BBB Health.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} | ${siteConfig.legalEntity}`,
    description:
      "Built by Bigger is the product studio of Bigger Enterprises LLC, developing thoughtful, privacy-conscious consumer software including BBB Health.",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

const fontVars = {
  "--font-body":
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  "--font-display":
    'ui-serif, "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, "Times New Roman", serif',
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="flex min-h-full flex-col" style={fontVars}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white dark:focus:text-background"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
