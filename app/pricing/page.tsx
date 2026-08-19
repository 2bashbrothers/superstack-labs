import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { PricingTable } from "@/components/pricing-table";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Per-sample analytical testing fee schedule by compound and method. Turnaround and volume pricing available on request.",
};

const notes = [
  {
    title: "Per-sample pricing",
    description:
      "Prices are quoted per submitted sample for a single analytical scope. Additional analytes on the same sample are quoted separately.",
  },
  {
    title: "Method development",
    description:
      "Where no established method exists, method development is quoted individually based on the compound and matrix.",
  },
  {
    title: "Turnaround & volume",
    description:
      "Standard turnaround is included. Expedited handling and volume arrangements are available on request.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fee Schedule"
        meta="Per sample · USD"
        title="Transparent pricing, per analysis."
        description="Pricing is quoted per submitted sample and analytical scope. The method shown is the technique typically applied for each compound."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <PricingTable />
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {notes.map((note, i) => (
              <Reveal key={note.title} delay={i * 80}>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {note.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {note.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={240}>
            <div className="mt-14 flex flex-col items-start gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg text-pretty text-muted-foreground">
                Need a compound not listed, or a custom analytical scope? Send us
                the details and we will provide a quote.
              </p>
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                className="h-12 shrink-0 px-6 text-[15px]"
              >
                Request a Quote
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
