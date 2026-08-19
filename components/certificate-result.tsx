import type { Certificate } from "@/lib/certificates";
import { LabMark } from "@/components/lab-mark";
import { Chromatogram } from "@/components/chromatogram";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const meta = (c: Certificate) => [
  { label: "Certificate ID", value: c.id, mono: true },
  { label: "Compound", value: c.compound },
  { label: "Category", value: c.category },
  { label: "Sample type", value: c.sampleType },
  { label: "Date received", value: c.dateReceived, mono: true },
  { label: "Date reported", value: c.dateReported, mono: true },
];

export function CertificateResult({ certificate }: { certificate: Certificate }) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
      {/* header */}
      <header className="flex flex-col gap-4 border-b border-border bg-secondary/50 px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <LabMark className="size-7 text-primary" />
          <div className="flex flex-col leading-tight">
            <span className="font-semibold tracking-tight">
              Certificate of Analysis
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Superstack Analytical
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="label-technical">Purity</p>
            <p className="tabular font-mono text-2xl font-semibold text-foreground">
              {certificate.purity}
            </p>
          </div>
          <Badge variant="outline" className="gap-1.5 font-mono">
            <span className="size-1.5 rounded-full bg-primary" />
            Complete
          </Badge>
        </div>
      </header>

      {/* metadata */}
      <dl className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3">
        {meta(certificate).map((f) => (
          <div key={f.label} className="bg-card px-6 py-4 md:px-8">
            <dt className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {f.label}
            </dt>
            <dd className={`mt-1 text-sm text-foreground ${f.mono ? "tabular font-mono" : ""}`}>
              {f.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* results table */}
      <div className="border-t border-border px-6 py-6 md:px-8">
        <p className="label-technical">Analytical results</p>
        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Parameter</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Result</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {certificate.results.map((r) => (
                <TableRow key={r.parameter}>
                  <TableCell className="font-medium text-foreground">
                    {r.parameter}
                  </TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {r.method}
                  </TableCell>
                  <TableCell className="text-foreground">{r.result}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={r.status === "Pass" ? "default" : "secondary"}
                      className="font-mono text-[11px]"
                    >
                      {r.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* chromatogram */}
      <div className="border-t border-border px-6 py-6 md:px-8">
        <div className="flex items-center justify-between">
          <p className="label-technical">Representative chromatogram</p>
          <span className="font-mono text-[11px] text-muted-foreground">
            {certificate.method}
          </span>
        </div>
        <div className="mt-4 h-32 w-full">
          <Chromatogram />
        </div>
      </div>

      <footer className="border-t border-border px-6 py-4 md:px-8">
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          This record applies only to the sample identified above and the agreed
          analytical scope. Example data shown for demonstration.
        </p>
      </footer>
    </article>
  );
}
