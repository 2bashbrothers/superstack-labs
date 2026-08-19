import Link from "next/link";

import { site } from "@/lib/site";
import { LabMark } from "@/components/lab-mark";

const columns = [
  {
    heading: "Laboratory",
    links: [
      { title: "Testing", href: "/testing" },
      { title: "Pricing", href: "/pricing" },
      { title: "COA Lookup", href: "/coa" },
    ],
  },
  {
    heading: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Request Testing", href: "/contact" },
    ],
  },
  {
    heading: "Information",
    links: [
      { title: "Sample Submission", href: "/contact" },
      { title: "Terms", href: "#" },
      { title: "Privacy", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <LabMark className="size-7 text-primary-foreground" />
              <span className="text-[15px] font-semibold tracking-tight">
                {site.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              {site.tagline}. Precise methods, clear reporting and results you
              can verify.
            </p>
            <dl className="mt-6 flex flex-col gap-1 text-sm text-primary-foreground/70">
              {/* <div className="flex gap-2">
                <dt className="sr-only">Address</dt>
                <dd className="font-mono text-xs uppercase tracking-wider">
                  {site.address}
                </dd>
              </div> */}
              <div className="flex gap-2">
                <dt className="sr-only">Email</dt>
                <dd className="font-mono text-xs uppercase tracking-wider">
                  {site.email}
                </dd>
              </div>
            </dl>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/50">
                {col.heading}
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8">
          <p className="max-w-3xl text-sm leading-relaxed text-primary-foreground/70">
            Analytical results apply only to the submitted sample and the agreed
            analytical scope.
          </p>
          <p className="max-w-3xl text-sm leading-relaxed text-primary-foreground/60">
            Testing services are provided for analytical and research purposes.
            Interpretation and intended use remain the responsibility of the
            submitting party.
          </p>
          <p className="mt-2 text-xs text-primary-foreground/50">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
