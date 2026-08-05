import type { Metadata } from "next";
import { siteConfig } from "./config";

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path = "",
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.brandName,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
