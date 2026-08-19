import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

const indicators = [
  "LC–MS/MS",
  "RP-HPLC",
  "HRMS",
  "Sample-specific reporting",
];

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="flex flex-col justify-center lg:col-span-6">
          <Reveal>
            <p className="label-technical">Independent Analytical Testing</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
              Clarity at the molecular level.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Independent laboratory analysis for peptides, pharmaceuticals and
              specialty compounds. Precise methods. Clear reporting. Results you
              can verify.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                className="h-12 px-6 text-[15px]"
              >
                Request Testing
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
              <Button
                variant="outline"
                render={<Link href="/testing" />}
                nativeButton={false}
                className="h-12 px-6 text-[15px]"
              >
                Explore Capabilities
              </Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {indicators.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span
                    aria-hidden
                    className="size-1.5 rounded-full bg-sage"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={160} className="h-full">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/images/lab-hero.png"
                alt="Close-up of LC-MS/MS analytical instrumentation with chromatography sample vials in an autosampler tray"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 w-[190px] rounded-md border border-border/60 bg-background/90 p-4 shadow-sm backdrop-blur">
                <dl className="flex flex-col gap-3 font-mono text-xs">
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Sample
                    </dt>
                    <dd className="tabular text-foreground">PX-10482</dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Analysis
                    </dt>
                    <dd className="text-foreground">RP-HPLC + MS</dd>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Status
                    </dt>
                    <dd className="flex items-center gap-1.5 text-primary">
                      <span className="size-1.5 rounded-full bg-primary" />
                      Complete
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
