import type { Capability } from "@/lib/capabilities";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export function CapabilityDetail({ capability }: { capability: Capability }) {
  return (
    <section
      id={capability.slug}
      className="scroll-mt-24 border-b border-border py-16 md:py-20"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <Reveal>
            <span className="font-mono text-sm text-sage">{capability.index}</span>
            <p className="label-technical mt-4">{capability.eyebrow}</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              {capability.title}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {capability.methods.map((method) => (
                <Badge key={method} variant="secondary" className="font-mono text-[11px]">
                  {method}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal delay={100}>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-foreground/90">
              {capability.description}
            </p>
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {capability.approach}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="label-technical border-b border-border pb-3">
                  Typical outputs
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {capability.outputs.map((output) => (
                    <li
                      key={output}
                      className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="label-technical border-b border-border pb-3">
                  Applications
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {capability.applications.map((application) => (
                    <li
                      key={application}
                      className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-sage"
                        aria-hidden
                      />
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
