import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CoaLookup } from "@/components/coa-lookup";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "COA Lookup",
  description:
    "Independently verify a Superstack Analytical Certificate of Analysis using its unique certificate identifier.",
};

const steps = [
  {
    index: "01",
    title: "Locate the identifier",
    description:
      "Each Certificate of Analysis carries a unique identifier printed in the report header.",
  },
  {
    index: "02",
    title: "Enter it above",
    description:
      "Type the identifier exactly as shown. Identifiers are not case-sensitive.",
  },
  {
    index: "03",
    title: "Review the record",
    description:
      "The retrieved record shows the sample, method and results exactly as issued.",
  },
];

export default function CoaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certificate Verification"
        meta="COA Lookup"
        title="Verify a certificate of analysis."
        description="Every certificate we issue can be retrieved independently. Enter the identifier from your report to view the record as issued."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <CoaLookup />
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <Reveal>
            <p className="label-technical">How verification works</p>
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.index} delay={i * 80}>
                <div className="h-full bg-card px-6 py-8">
                  <span className="font-mono text-sm text-sage">
                    {step.index}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
