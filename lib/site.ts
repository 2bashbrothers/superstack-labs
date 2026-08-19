export const site = {
  name: "Superstack Analytical",
  shortName: "Superstack",
  tagline: "Independent Analytical Testing Laboratory",
  email: "info@superstacklabs.com",
  address: "9528 25 Hwy, Halton Hills, ON L9T 2X7",
  location: "Halton Hills, ON, Canada",
} as const;

export const mainNav = [
  { title: "Home", href: "/" },
  { title: "Testing", href: "/testing" },
  { title: "COA Lookup", href: "/coa" },
  { title: "Pricing", href: "/pricing" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
] as const;
