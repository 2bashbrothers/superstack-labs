import { processSteps } from "@/lib/process";
import { Reveal } from "@/components/reveal";

export function TestingProcess() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="label-technical">Process</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              From sample to result
            </h2>
          </Reveal>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
          {processSteps.map((step, i) => (
            <Reveal key={step.index} delay={i * 80} as="li">
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-primary">
                    {step.index}
                  </span>
                  <span
                    aria-hidden
                    className="h-px flex-1 bg-border"
                  />
                </div>
                <h3 className="mt-5 text-base font-semibold leading-snug tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
