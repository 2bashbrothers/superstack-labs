import { Reveal } from "@/components/reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  meta?: string;
};

export function PageHeader({ eyebrow, title, description, meta }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="label-technical">{eyebrow}</span>
            {meta ? (
              <>
                <span className="h-px w-8 bg-border" aria-hidden />
                <span className="font-mono text-xs text-muted-foreground">
                  {meta}
                </span>
              </>
            ) : null}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
