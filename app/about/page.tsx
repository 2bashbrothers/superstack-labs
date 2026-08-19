import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { PrinciplesSection } from "@/components/principles-section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Superstack Analytical is an independent analytical testing laboratory focused on precise methods, clear reporting and verifiable results.",
};

const values = [
  {
    title: "Independence",
    body: "We test submitted samples on their own terms. Results describe the material in front of us — nothing more, nothing less.",
  },
  {
    title: "Method transparency",
    body: "Every report identifies the analytical method used. A result without its method is not a result you can act on.",
  },
  {
    title: "Defined scope",
    body: "Analyte, matrix and reporting requirement are agreed before testing. Clear scope is what makes a result meaningful.",
  },
  {
    title: "Verifiable records",
    body: "Issued certificates carry a unique identifier and can be retrieved independently at any time.",
  },
];

const stats = [
  { value: "4", label: "Core analytical platforms" },
  { value: "40+", label: "Compounds in the fee schedule" },
  { value: "100%", label: "Reports with method stated" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Laboratory"
        meta="Independent · Analytical"
        title="A laboratory built around clarity."
        description="Superstack Analytical is an independent analytical testing laboratory. We apply established chromatographic and mass spectrometric methods to answer specific analytical questions about submitted samples."
      />

      {/* intro + image */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="flex flex-col gap-6">
                <p className="text-pretty text-xl leading-relaxed text-foreground/90">
                  Analytical results are only as useful as they are clear. Our
                  work begins with a defined question and ends with a record you
                  can verify.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  We focus on peptides, pharmaceuticals and specialty compounds,
                  using reversed-phase chromatography, tandem mass spectrometry
                  and high-resolution mass spectrometry. Each method is selected
                  for the submitted material and the analytical question being
                  investigated, and every report states the method used so the
                  outcome can be understood without interpretation.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Results apply to the submitted sample and the agreed analytical
                  scope. We do not make claims beyond what was tested.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border">
                <Image
                  src="/images/lab-instrument.png"
                  alt="Mass spectrometry and HPLC instrumentation in the analytical laboratory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px bg-primary-foreground/15 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-primary px-6 py-10 md:px-8">
              <p className="tabular font-mono text-4xl font-semibold md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-primary-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* values */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <Reveal>
            <p className="label-technical">How we work</p>
            <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Principles that hold across every sample.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <div className="border-t border-border pt-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PrinciplesSection />

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-xl">
                <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  Have a sample to analyse?
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  Tell us about your compound and analytical question. We will
                  help determine the appropriate testing scope.
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
