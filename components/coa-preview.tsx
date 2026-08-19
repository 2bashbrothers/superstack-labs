import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { CoaDocument } from "@/components/coa-document";

export function CoaPreview() {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="flex flex-col justify-center lg:col-span-5">
          <Reveal>
            <p className="label-technical">Reporting</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Results designed to be understood.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Each Certificate of Analysis identifies the sample, the method used
              and the measured results, presented so the outcome is clear without
              interpretation. Every issued certificate carries a unique
              identifier that can be verified independently.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8">
              <Button variant="outline" render={<Link href="/coa" />} nativeButton={false} className="h-11 px-5">
                Verify a certificate
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <CoaDocument />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
