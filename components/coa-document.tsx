import { cn } from "@/lib/utils";
import { LabMark } from "@/components/lab-mark";
import { Chromatogram } from "@/components/chromatogram";
import { Badge } from "@/components/ui/badge";

export type CoaData = {
  certificateId: string;
  sampleId: string;
  compound: string;
  method: string;
  dateReceived: string;
  dateAnalysed: string;
  identity: string;
  purity: string;
  massConfirmation: string;
};

export const sampleCoa: CoaData = {
  certificateId: "COA-2026-001842",
  sampleId: "PX-10482",
  compound: "Semaglutide",
  method: "RP-HPLC + MS",
  dateReceived: "2026-02-11",
  dateAnalysed: "2026-02-14",
  identity: "Consistent with reference",
  purity: "99.2%",
  massConfirmation: "Observed",
};

const metaFields = (data: CoaData) => [
  { label: "Certificate ID", value: data.certificateId, mono: true },
  { label: "Sample ID", value: data.sampleId, mono: true },
  { label: "Compound", value: data.compound },
  { label: "Method", value: data.method },
  { label: "Date received", value: data.dateReceived, mono: true },
  { label: "Date analysed", value: data.dateAnalysed, mono: true },
];

export function CoaDocument({
  data = sampleCoa,
  className,
}: {
  data?: CoaData;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-card shadow-sm",
        className,
      )}
    >
      {/* header */}
      <div className="flex items-center justify-between gap-4 border-b border-border bg-secondary/50 px-6 py-5">
        <div className="flex items-center gap-2.5">
          <LabMark className="size-6 text-primary" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Certificate of Analysis
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Halden Analytical
            </span>
          </div>
        </div>
        <Badge variant="outline" className="gap-1.5 font-mono">
          <span className="size-1.5 rounded-full bg-primary" />
          Complete
        </Badge>
      </div>

      {/* metadata grid */}
      <dl className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3">
        {metaFields(data).map((f) => (
          <div key={f.label} className="bg-card px-6 py-4">
            <dt className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {f.label}
            </dt>
            <dd
              className={cn(
                "mt-1 text-sm text-foreground",
                f.mono && "tabular font-mono",
              )}
            >
              {f.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* results */}
      <div className="border-t border-border px-6 py-5">
        <p className="label-technical">Analytical results</p>
        <dl className="mt-4 flex flex-col gap-px overflow-hidden rounded-md border border-border bg-border">
          <div className="flex items-center justify-between bg-card px-4 py-3">
            <dt className="text-sm text-muted-foreground">Identity</dt>
            <dd className="text-sm font-medium text-foreground">
              {data.identity}
            </dd>
          </div>
          <div className="flex items-center justify-between bg-card px-4 py-3">
            <dt className="text-sm text-muted-foreground">Purity</dt>
            <dd className="tabular font-mono text-sm font-medium text-foreground">
              {data.purity}
            </dd>
          </div>
          <div className="flex items-center justify-between bg-card px-4 py-3">
            <dt className="text-sm text-muted-foreground">Method</dt>
            <dd className="text-sm font-medium text-foreground">
              {data.method}
            </dd>
          </div>
          <div className="flex items-center justify-between bg-card px-4 py-3">
            <dt className="text-sm text-muted-foreground">Mass confirmation</dt>
            <dd className="text-sm font-medium text-foreground">
              {data.massConfirmation}
            </dd>
          </div>
        </dl>
      </div>

      {/* chromatogram */}
      <div className="border-t border-border px-6 py-5">
        <div className="flex items-center justify-between">
          <p className="label-technical">Chromatogram</p>
          <span className="font-mono text-[11px] text-muted-foreground">
            RP-HPLC · 220 nm
          </span>
        </div>
        <div className="mt-4 h-28 w-full">
          <Chromatogram />
        </div>
      </div>

      <p className="border-t border-border px-6 py-3 text-center text-[11px] text-muted-foreground">
        Illustrative report interface. Example data only — not an actual
        laboratory result.
      </p>
    </div>
  );
}
