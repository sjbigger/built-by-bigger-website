/**
 * Central site configuration for Bigger Enterprises LLC / Built by Bigger.
 *
 * NOTE: The privacy policy and terms of use should be reviewed by qualified
 * legal counsel before a broad public launch.
 */

export const siteConfig = {
  legalEntity: "Bigger Enterprises LLC",
  brandName: "Built by Bigger",
  domain: "builtbybigger.com",
  url: "https://builtbybigger.com",
  supportEmail: "support@builtbybigger.com",
  privacyEmail: "privacy@builtbybigger.com",
  productName: "BBB Health",
  productStatus: "Currently in private beta",
  effectiveDate: "August 5, 2026",
  copyrightYear: 2026,
  /**
   * Optional governing-law jurisdiction for the Terms page.
   *
   * Set this to the company's state of formation (or chosen governing law)
   * before relying on the Terms publicly. Leave as an empty string to omit
   * the governing-law section from the rendered page until configured.
   * Do not display placeholder text such as "TODO" or "unknown" to visitors.
   */
  GOVERNING_STATE: "Florida",
} as const;

export type SiteConfig = typeof siteConfig;

export const mailtoSupport = (subject?: string) => {
  const base = `mailto:${siteConfig.supportEmail}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
};

export const mailtoPrivacy = (subject?: string) => {
  const base = `mailto:${siteConfig.privacyEmail}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
};
