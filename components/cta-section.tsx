import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* oversized decorative reference number */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 bottom-[-3rem] select-none font-mono text-[10rem] font-semibold leading-none tracking-tighter text-primary-foreground/[0.06] sm:text-[16rem]"
      >
        PX-10482
      </span>

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground/60">
              Start a project
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              Tell us what you need to know about your sample.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-primary-foreground/75">
              Send us the compound, sample matrix, number of samples and
              analytical question. We&apos;ll help determine the appropriate
              testing scope.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="secondary"
                render={<Link href="/contact" />}
                nativeButton={false}
                className="h-12 bg-primary-foreground px-6 text-[15px] text-primary hover:bg-primary-foreground/90"
              >
                Request Testing
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
              <Button
                variant="outline"
                render={<Link href="/pricing" />}
                nativeButton={false}
                className="h-12 border-primary-foreground/30 bg-transparent px-6 text-[15px] text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                View Pricing
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
