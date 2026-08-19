import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { capabilities } from "@/lib/capabilities";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export function CapabilitiesSection() {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="label-technical">Capabilities</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Analytical capabilities
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Every project begins with the analytical question: what is the
              sample, what needs to be measured, and what decision will the
              result support?
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.slug} delay={(i % 2) * 100}>
              <article className="flex h-full flex-col bg-card p-8 lg:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-sage">
                    {cap.index}
                  </span>
                  <span className="label-technical">{cap.eyebrow}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                  {cap.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
                <ul className="mt-6 flex flex-col gap-2.5 border-t border-border pt-6">
                  {cap.outputs.map((output) => (
                    <li
                      key={output}
                      className="flex items-start gap-2.5 text-sm text-foreground/80"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 size-1 shrink-0 rounded-full bg-sage"
                      />
                      {output}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2 pt-2">
                  {cap.methods.map((method) => (
                    <Badge key={method} variant="outline" className="font-mono">
                      {method}
                    </Badge>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10">
            <Link
              href="/testing"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
            >
              View all testing capabilities
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
