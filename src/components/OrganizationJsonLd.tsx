import { siteConfig } from "@/lib/config";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalEntity,
    alternateName: siteConfig.brandName,
    url: siteConfig.url,
    email: siteConfig.supportEmail,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
