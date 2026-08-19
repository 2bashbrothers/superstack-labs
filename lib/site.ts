export const site = {
  name: "Superstack Analytical",
  shortName: "Superstack",
  tagline: "Independent Analytical Testing Laboratory",
  email: "[LAB EMAIL]",
  address: "[LAB ADDRESS]",
  location: "[LABORATORY LOCATION]",
} as const;

export const mainNav = [
  { title: "Home", href: "/" },
  { title: "Testing", href: "/testing" },
  { title: "COA Lookup", href: "/coa" },
  { title: "Pricing", href: "/pricing" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
] as const;
