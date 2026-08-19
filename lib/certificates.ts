export type CertificateResult = {
  parameter: string;
  method: string;
  result: string;
  status: "Pass" | "Observed" | "Reported";
};

export type Certificate = {
  id: string;
  compound: string;
  category: string;
  sampleType: string;
  dateReceived: string;
  dateReported: string;
  method: string;
  purity: string;
  results: CertificateResult[];
};

export const certificates: Certificate[] = [
  {
    id: "PX-10482",
    compound: "Semaglutide",
    category: "GLP-1 Peptide",
    sampleType: "Lyophilised powder",
    dateReceived: "2026-07-28",
    dateReported: "2026-08-04",
    method: "RP-HPLC-UV + ESI-MS",
    purity: "98.6%",
    results: [
      { parameter: "Identity", method: "ESI-MS", result: "Confirmed (4113.6 Da)", status: "Pass" },
      { parameter: "Chromatographic purity", method: "RP-HPLC-UV, 220 nm", result: "98.6%", status: "Pass" },
      { parameter: "Related substances", method: "RP-HPLC-UV", result: "1.4% total", status: "Reported" },
      { parameter: "Mass confirmation", method: "ESI-MS", result: "Observed", status: "Observed" },
    ],
  },
  {
    id: "PX-10517",
    compound: "BPC-157",
    category: "Research Peptide",
    sampleType: "Lyophilised powder",
    dateReceived: "2026-08-01",
    dateReported: "2026-08-07",
    method: "RP-HPLC-UV + ESI-MS",
    purity: "99.1%",
    results: [
      { parameter: "Identity", method: "ESI-MS", result: "Confirmed (1419.5 Da)", status: "Pass" },
      { parameter: "Chromatographic purity", method: "RP-HPLC-UV, 220 nm", result: "99.1%", status: "Pass" },
      { parameter: "Related substances", method: "RP-HPLC-UV", result: "0.9% total", status: "Reported" },
      { parameter: "Mass confirmation", method: "ESI-MS", result: "Observed", status: "Observed" },
    ],
  },
  {
    id: "MX-20338",
    compound: "Tirzepatide",
    category: "GLP-1 Peptide",
    sampleType: "Reconstituted solution",
    dateReceived: "2026-08-05",
    dateReported: "2026-08-12",
    method: "LC–MS/MS",
    purity: "97.9%",
    results: [
      { parameter: "Identity", method: "LC–MS/MS", result: "Confirmed (4813.5 Da)", status: "Pass" },
      { parameter: "Chromatographic purity", method: "RP-HPLC-UV, 220 nm", result: "97.9%", status: "Pass" },
      { parameter: "Quantity", method: "LC–MS/MS", result: "9.82 mg/vial", status: "Reported" },
      { parameter: "Mass confirmation", method: "LC–MS/MS", result: "Observed", status: "Observed" },
    ],
  },
];

export function findCertificate(id: string): Certificate | null {
  const normalized = id.trim().toUpperCase();
  return certificates.find((c) => c.id.toUpperCase() === normalized) ?? null;
}
