import { Reveal } from "@/components/reveal";
import { Chromatogram } from "@/components/chromatogram";

const principles = [
  {
    label: "Identity",
    text: "Determine whether the submitted compound corresponds with the expected analyte.",
  },
  {
    label: "Purity",
    text: "Assess chromatographic purity and detect relevant impurities within the agreed analytical scope.",
  },
  {
    label: "Quantity",
    text: "Measure the amount of target material where quantitative testing is requested.",
  },
];

export function UncoverTruth() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Your supplier gives you a specification. We give you the data.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Analytical testing independently examines the identity, purity and
              quantity of submitted materials, so a specification can be assessed
              against measured results rather than accepted on trust.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10 h-24 w-full overflow-hidden rounded-md border border-border bg-card p-3">
              <Chromatogram animate />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <dl className="flex flex-col">
            {principles.map((p, i) => (
              <Reveal key={p.label} delay={i * 100}>
                <div className="flex flex-col gap-2 border-t border-border py-8 first:border-t-0 first:pt-0 sm:flex-row sm:gap-10">
                  <dt className="flex items-baseline gap-3 sm:w-48 sm:shrink-0">
                    <span className="font-mono text-xs text-sage">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl font-semibold tracking-tight text-foreground">
                      {p.label}
                    </span>
                  </dt>
                  <dd className="max-w-md leading-relaxed text-muted-foreground">
                    {p.text}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
