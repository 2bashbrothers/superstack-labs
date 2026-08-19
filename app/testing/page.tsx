import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { capabilities } from "@/lib/capabilities";
import { PageHeader } from "@/components/page-header";
import { CapabilityDetail } from "@/components/capability-detail";
import { TestingProcess } from "@/components/testing-process";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Testing Capabilities",
  description:
    "Analytical testing capabilities including peptide analysis, LC–MS/MS targeted analysis, high-resolution mass spectrometry and supplementary screening.",
};

export default function TestingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testing Capabilities"
        meta="RP-HPLC · LC–MS/MS · HRMS"
        title="Methods matched to the analytical question."
        description="Every method is selected for the submitted material and the question being investigated. Scope is agreed before testing, and results are reported against that scope."
      />

      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* quick nav */}
        <nav
          aria-label="Capabilities"
          className="flex flex-wrap gap-x-6 gap-y-2 border-b border-border py-6"
        >
          {capabilities.map((capability) => (
            <a
              key={capability.slug}
              href={`#${capability.slug}`}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="font-mono text-xs text-sage">
                {capability.index}
              </span>
              {capability.eyebrow}
            </a>
          ))}
        </nav>

        {capabilities.map((capability) => (
          <CapabilityDetail key={capability.slug} capability={capability} />
        ))}
      </div>

      <TestingProcess />

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-xl">
                <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  Not sure which method applies?
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Describe your compound, matrix and analytical question. We will
                  help determine the appropriate testing scope before you submit a
                  sample.
                </p>
              </div>
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                className="h-12 px-6 text-[15px]"
              >
                Request Testing
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
