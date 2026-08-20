import Image from "next/image";
import type { ReactNode } from "react";
import { create } from "qrcode";
import {
  BarChart3Icon,
  CalendarDaysIcon,
  CheckCircle2Icon,
  ClipboardCheckIcon,
  FileBadge2Icon,
  FlaskConicalIcon,
  Globe2Icon,
  PackageCheckIcon,
  ShieldCheckIcon,
  TestTube2Icon,
} from "lucide-react";
import { Chromatogram } from "@/components/chromatogram";
import { LabMark } from "@/components/lab-mark";
import type { Certificate } from "@/lib/certificates";

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-AU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(new Date(`${value}T00:00:00Z`))
    .toUpperCase();

const getVerificationUrl = (value: string) =>
  `https://www.superstacklabs.com/coa/${encodeURIComponent(value)}`;

function QrMark({ value }: { value: string }) {
  const verificationUrl = getVerificationUrl(value);
  const qrCode = create(verificationUrl, {
    errorCorrectionLevel: "M",
  });
  const quietZone = 4;
  const viewBoxSize = qrCode.modules.size + quietZone * 2;
  const modules = Array.from(
    { length: qrCode.modules.size * qrCode.modules.size },
    (_, index) => {
      const row = Math.floor(index / qrCode.modules.size);
      const col = index % qrCode.modules.size;

      return qrCode.modules.get(row, col)
        ? `M${col + quietZone} ${row + quietZone}h1v1H${col + quietZone}z`
        : "";
    },
  ).join("");

  return (
    <div
      className="coa-qr-mark size-[74px] rounded-md border border-primary/20 bg-white"
      aria-label={`QR code for ${verificationUrl}`}
      role="img"
    >
      <svg
        aria-hidden="true"
        className="size-full"
        focusable="false"
        shapeRendering="crispEdges"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      >
        <rect width={viewBoxSize} height={viewBoxSize} fill="white" />
        <path d={modules} fill="black" />
      </svg>
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-h-16 items-center gap-3 border border-border bg-card px-4 py-3">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-primary/20 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 break-words font-mono text-sm font-semibold text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-h-24 items-center gap-4 border border-border bg-card px-5 py-4">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/25 text-primary">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
          {label}
        </p>
        <p className="mt-1 text-2xl font-bold tracking-tight text-primary">
          {value}
        </p>
      </div>
    </div>
  );
}

function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[minmax(9rem,0.9fr)_1.2fr] gap-4 border-b border-border py-2.5 last:border-b-0">
      <dt className="text-xs font-medium text-muted-foreground">{label}</dt>
      <dd className="text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}

function Stamp() {
  return (
    <div className="coa-badge relative mx-auto size-36">
      <Image
        src="/images/badge.png"
        alt="Superstack Analytical quality verified badge"
        fill
        className="object-contain"
        sizes="144px"
      />
    </div>
  );
}

function MassSpectrum() {
  const bars = [
    { left: "22%", height: "18%" },
    { left: "38%", height: "34%" },
    { left: "52%", height: "72%" },
    { left: "64%", height: "55%" },
    { left: "77%", height: "22%" },
  ];

  return (
    <div className="relative h-28 border-l border-b border-border">
      {bars.map((bar) => (
        <span
          key={bar.left}
          className="absolute bottom-0 w-px bg-primary"
          style={{ left: bar.left, height: bar.height }}
        />
      ))}
      <span className="absolute left-1 top-1 text-[9px] text-muted-foreground">
        Inten.
      </span>
      <span className="absolute bottom-1 right-1 text-[9px] text-muted-foreground">
        m/z
      </span>
    </div>
  );
}

export function CoaCertificate({ certificate }: { certificate: Certificate }) {
  const productFields = [
    { label: "Product Name:", value: certificate.compound },
    { label: "Strength:", value: certificate.strength },
    { label: "Batch / Lot Number:", value: certificate.batchLot },
    { label: "Sample ID:", value: certificate.id },
    { label: "Appearance:", value: certificate.appearance },
    { label: "Company Website:", value: certificate.companyWebsite },
  ];

  const clientFields = [
    { label: "Client:", value: certificate.client },
    { label: "Source:", value: certificate.source },
    { label: "Received:", value: formatDate(certificate.dateReceived) },
    { label: "Analysis Completed:", value: formatDate(certificate.dateCompleted) },
    { label: "Test Method:", value: certificate.method },
  ];

  const reviewItems = [
    "Batch identification verified",
    "Laboratory documentation reviewed",
    "Identity result reviewed",
    "Purity result reviewed",
    "Net content reviewed",
    "Batch meets Superstack specification",
  ];

  return (
    <article className="coa-certificate mx-auto max-w-5xl bg-card px-5 py-6 text-foreground shadow-sm ring-1 ring-border sm:px-8 lg:px-10">
      <header className="flex flex-col gap-5 border-b-2 border-primary/25 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-3">
          <LabMark className="size-10 text-primary" />
          <p className="text-2xl font-bold tracking-tight">
            Superstack Analytical
          </p>
        </div>
        <div className="text-left sm:text-right">
          <h1 className="text-3xl font-bold tracking-tight">
            Certificate of Analysis
          </h1>
          <p className="mt-1 text-sm text-primary">
            Independent analytical testing
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Website: www.superstacklabs.com
          </p>
          <p className="text-xs text-muted-foreground">
            Email: info@superstacklabs.com
          </p>
          <div className="mt-3 inline-flex items-center gap-2 border-t-2 border-primary pt-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            COA Verified
          </div>
        </div>
      </header>

      <section className="coa-meta-grid mt-5 grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
        <InfoCard
          icon={<FileBadge2Icon className="size-5" />}
          label="COA No:"
          value={certificate.coaNumber}
        />
        <InfoCard
          icon={<CalendarDaysIcon className="size-5" />}
          label="Report Date:"
          value={formatDate(certificate.dateReported)}
        />
        <InfoCard
          icon={<ShieldCheckIcon className="size-5" />}
          label="Verification ID:"
          value={certificate.verificationId}
        />

        <div className="coa-qr-cell flex items-center justify-center">
          <QrMark value={certificate.verificationId} />
        </div>
       
      </section>

      <section className="mt-5">
        <h2 className="border-b-2 border-primary pb-1 text-sm font-bold uppercase tracking-[0.08em]">
          1. Product Identification
        </h2>
        <div className="coa-product-grid mt-3 grid gap-5 lg:grid-cols-[1fr_1fr_10rem]">
          <dl>
            {productFields.map((field) => (
              <FieldRow key={field.label} {...field} />
            ))}
          </dl>
          <dl>
            {clientFields.map((field) => (
              <FieldRow key={field.label} {...field} />
            ))}
          </dl>
          <div className="coa-photo border border-primary/50 p-2">
            <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
              Submitted Via Photo
            </p>
            <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
              <Image
                src="/images/pepwise-vial-2026-08-20.jpg"
                alt={`${certificate.compound} submitted sample vial`}
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <h2 className="border-b-2 border-primary pb-1 text-sm font-bold uppercase tracking-[0.08em]">
          2. Sample Summary
        </h2>
        <div className="coa-summary-grid mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            icon={<BarChart3Icon className="size-7" />}
            label="Purity"
            value={certificate.purity}
          />
          <MetricCard
            icon={<ShieldCheckIcon className="size-7" />}
            label="Identity"
            value={certificate.identity}
          />
          <MetricCard
            icon={<PackageCheckIcon className="size-7" />}
            label="Net Content"
            value={certificate.netContent}
          />
          <MetricCard
            icon={<CheckCircle2Icon className="size-7" />}
            label="Status"
            value={certificate.status}
          />
        </div>
      </section>

      <section className="mt-5">
        <h2 className="border-b-2 border-primary pb-1 text-sm font-bold uppercase tracking-[0.08em]">
          3. Analytical Results
        </h2>
        <div className="mt-3 overflow-hidden border border-border">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">Test</th>
                <th className="px-3 py-2 text-left font-semibold">Method</th>
                <th className="px-3 py-2 text-left font-semibold">
                  Specification
                </th>
                <th className="px-3 py-2 text-left font-semibold">Result</th>
                <th className="px-3 py-2 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {certificate.results.map((result) => (
                <tr key={result.parameter} className="border-t border-border">
                  <td className="px-3 py-2 font-semibold">{result.parameter}</td>
                  <td className="px-3 py-2">{result.method}</td>
                  <td className="px-3 py-2">{result.specification}</td>
                  <td className="px-3 py-2 font-medium">{result.result}</td>
                  <td className="px-3 py-2">
                    <span className="inline-flex items-center gap-1.5 font-bold uppercase text-primary">
                      <CheckCircle2Icon className="size-4" />
                      {result.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="coa-review-grid mt-5 grid gap-4 lg:grid-cols-[1fr_13rem_1.35fr]">
        <div>
          <h2 className="border-b-2 border-primary pb-1 text-sm font-bold uppercase tracking-[0.08em]">
            4. Superstack Quality Review
          </h2>
          <ul className="mt-3 space-y-2">
            {reviewItems.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs font-medium">
                <CheckCircle2Icon className="size-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Stamp />
        <div>
          <h2 className="border-b-2 border-primary pb-1 text-sm font-bold uppercase tracking-[0.08em]">
            6. Analytical Evidence
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="border border-border p-3">
              <div className="mb-2 flex items-center gap-2">
                <ClipboardCheckIcon className="size-4 text-primary" />
                <p className="text-xs font-bold uppercase tracking-[0.08em]">
                  Chromatogram
                </p>
              </div>
              <div className="h-28">
                <Chromatogram showBaseline={false} />
              </div>
              <p className="mt-2 text-[10px] text-muted-foreground">
                Chromatogram reference
              </p>
            </div>
            <div className="border border-border p-3">
              <div className="mb-2 flex items-center gap-2">
                <TestTube2Icon className="size-4 text-primary" />
                <p className="text-xs font-bold uppercase tracking-[0.08em]">
                  Mass Confirmation
                </p>
              </div>
              <MassSpectrum />
              <p className="mt-2 text-[10px] text-muted-foreground">
                Mass confirmation reference
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-5 grid gap-3 border-t-2 border-primary/25 pt-3 text-xs sm:grid-cols-[1fr_2fr_1fr]">
        <div className="flex items-center gap-2 font-semibold">
          <FlaskConicalIcon className="size-7 text-primary" />
          For research purposes only
        </div>
        <p className="text-center leading-relaxed text-muted-foreground">
          Results relate only to the specific submitted sample and the reviewed
          analytical documentation. This certificate is issued for research-use
          verification only.
        </p>
        <div className="flex items-center gap-2 sm:justify-end">
          <Globe2Icon className="size-7 text-primary" />
          <span>
            Verify at
            <br />
            superstacklabs.com/coa
          </span>
        </div>
      </footer>
    </article>
  );
}
