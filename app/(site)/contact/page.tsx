import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { RequestForm } from "@/components/request-form";
import { Reveal } from "@/components/reveal";
import { processSteps } from "@/lib/process";

export const metadata: Metadata = {
  title: "Request Testing",
  description:
    "Request analytical testing. Describe your compound, sample matrix and analytical question, and we will determine the appropriate testing scope.",
};

const info = [
  { label: "Laboratory", value: "[LAB ADDRESS]" },
  { label: "Email", value: "[LAB EMAIL]" },
  { label: "Typical response", value: "Within 2 business days" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Request Testing"
        meta="Sample submission enquiry"
        title="Tell us about your sample."
        description="Send us the compound, sample matrix, number of samples and analytical question. We will help determine the appropriate testing scope before you submit."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <RequestForm />
            </div>

            <aside className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="rounded-lg border border-border bg-secondary/40 p-8">
                  <h2 className="text-lg font-semibold tracking-tight">
                    Laboratory details
                  </h2>
                  <dl className="mt-6 flex flex-col gap-5">
                    {info.map((item) => (
                      <div key={item.label}>
                        <dt className="label-technical">{item.label}</dt>
                        <dd className="mt-1.5 text-foreground">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8">
                  <h2 className="label-technical">What happens next</h2>
                  <ol className="mt-5 flex flex-col gap-5">
                    {processSteps.slice(0, 4).map((step) => (
                      <li key={step.index} className="flex gap-4">
                        <span className="font-mono text-sm text-sage">
                          {step.index}
                        </span>
                        <div>
                          <p className="font-medium leading-snug">
                            {step.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
