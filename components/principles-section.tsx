import { principles } from "@/lib/process";
import { Reveal } from "@/components/reveal";

export function PrinciplesSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="label-technical">Quality</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              A result is only useful when the scope is clear.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.index} delay={(i % 2) * 100}>
              <div className="flex gap-6 border-t border-border py-8">
                <span className="font-mono text-sm text-sage">{p.index}</span>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="max-w-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
