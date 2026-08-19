const items = [
  "RP-HPLC",
  "LC–MS/MS",
  "High-resolution MS",
  "Peptide analysis",
  "Impurity profiling",
  "Screening",
];

export function CapabilitiesStrip() {
  return (
    <section
      aria-label="Analytical capabilities"
      className="border-b border-border bg-secondary/50"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:gap-8">
        <p className="label-technical shrink-0">Analytical capabilities</p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="text-sm font-medium text-foreground/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
