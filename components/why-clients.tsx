import {
  MicroscopeIcon,
  TargetIcon,
  FileTextIcon,
  TimerIcon,
  FlaskConicalIcon,
  ShieldCheckIcon,
} from "lucide-react";

import { Reveal } from "@/components/reveal";

const reasons = [
  {
    icon: MicroscopeIcon,
    title: "Advanced instrumentation",
    text: "Modern chromatographic and mass spectrometry techniques.",
  },
  {
    icon: TargetIcon,
    title: "Clear analytical scope",
    text: "Testing is defined around the sample and question being investigated.",
  },
  {
    icon: FileTextIcon,
    title: "Transparent reporting",
    text: "Results presented clearly with methodology identified.",
  },
  {
    icon: TimerIcon,
    title: "Responsive turnaround",
    text: "Structured workflows designed to move samples efficiently through analysis.",
  },
  {
    icon: FlaskConicalIcon,
    title: "Specialist analysis",
    text: "Support for peptides, pharmaceuticals and specialty research compounds.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Independent verification",
    text: "Useful for supplier verification, batch review and research characterisation.",
  },
];

export function WhyClients() {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="label-technical">Why the lab</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Built for teams that need to be sure.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col bg-card p-8">
                  <Icon className="size-5 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
                    {r.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {r.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
