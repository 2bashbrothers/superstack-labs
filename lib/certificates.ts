export type CertificateResult = {
  parameter: string;
  method: string;
  specification: string;
  result: string;
  status: "Pass" | "Observed" | "Reported";
};

export type Certificate = {
  id: string;
  coaNumber: string;
  verificationId: string;
  compound: string;
  client: string;
  category: string;
  sampleType: string;
  strength: string;
  batchLot: string;
  appearance: string;
  source: string;
  dateReceived: string;
  dateReported: string;
  dateCompleted: string;
  method: string;
  purity: string;
  netContent: string;
  companyWebsite: string;
  identity: string;
  status: "Approved" | "Reviewed";
  massConfirmation: string;
  results: CertificateResult[];
};

export const certificates: Certificate[] = [
  {
    id: "PX-10482",
    coaNumber: "SSL-COA-2608-001",
    verificationId: "SSL-8H2K-10482",
    compound: "Retatrutide",
    client: "Pepwise",
    category: "Research Peptide",
    sampleType: "White lyophilized powder",
    strength: "10 mg / vial",
    batchLot: "PW-1048",
    appearance: "White lyophilized powder",
    source: "Client-submitted sample",
    dateReceived: "2026-08-18",
    dateReported: "2026-08-20",
    dateCompleted: "2026-08-19",
    method: "RP-HPLC + LC-MS",
    purity: "99.93%",
    netContent: "9.73 mg",
    companyWebsite: "www.pepwise.com.au",
    identity: "Confirmed",
    status: "Approved",
    massConfirmation: "Observed",
    results: [
      { parameter: "Appearance", method: "Visual", specification: "White lyophilized powder", result: "Conforms", status: "Pass" },
      { parameter: "Identity", method: "LC-MS", specification: "Conforms to reference standard", result: "Confirmed", status: "Pass" },
      { parameter: "Purity", method: "RP-HPLC", specification: ">=98.0%", result: "99.93%", status: "Pass" },
      { parameter: "Net Content", method: "HPLC", specification: "Target specification", result: "9.73 mg", status: "Pass" },
    ],
  },
  {
    id: "PX-10517",
    coaNumber: "SSL-COA-2608-002",
    verificationId: "SSL-4BPC-10517",
    compound: "BPC-157",
    client: "Research Client",
    category: "Research Peptide",
    sampleType: "Lyophilized powder",
    strength: "5 mg / vial",
    batchLot: "RC-1051",
    appearance: "White lyophilized powder",
    source: "Client-submitted sample",
    dateReceived: "2026-08-01",
    dateReported: "2026-08-07",
    dateCompleted: "2026-08-06",
    method: "RP-HPLC-UV + ESI-MS",
    purity: "99.1%",
    netContent: "5.02 mg",
    companyWebsite: "client supplied",
    identity: "Confirmed",
    status: "Approved",
    massConfirmation: "Observed",
    results: [
      { parameter: "Identity", method: "ESI-MS", specification: "Conforms to reference standard", result: "Confirmed (1419.5 Da)", status: "Pass" },
      { parameter: "Chromatographic purity", method: "RP-HPLC-UV, 220 nm", specification: ">=98.0%", result: "99.1%", status: "Pass" },
      { parameter: "Related substances", method: "RP-HPLC-UV", specification: "Report total", result: "0.9% total", status: "Reported" },
      { parameter: "Mass confirmation", method: "ESI-MS", specification: "Expected ion envelope", result: "Observed", status: "Observed" },
    ],
  },
  {
    id: "MX-20338",
    coaNumber: "SSL-COA-2608-003",
    verificationId: "SSL-TIRZ-20338",
    compound: "Tirzepatide",
    client: "Research Client",
    category: "GLP-1 Peptide",
    sampleType: "Reconstituted solution",
    strength: "10 mg / vial",
    batchLot: "RC-2033",
    appearance: "Clear, colorless solution",
    source: "Client-submitted sample",
    dateReceived: "2026-08-05",
    dateReported: "2026-08-12",
    dateCompleted: "2026-08-11",
    method: "LC-MS/MS",
    purity: "97.9%",
    netContent: "9.82 mg",
    companyWebsite: "client supplied",
    identity: "Confirmed",
    status: "Reviewed",
    massConfirmation: "Observed",
    results: [
      { parameter: "Identity", method: "LC-MS/MS", specification: "Conforms to reference standard", result: "Confirmed (4813.5 Da)", status: "Pass" },
      { parameter: "Chromatographic purity", method: "RP-HPLC-UV, 220 nm", specification: "Report value", result: "97.9%", status: "Pass" },
      { parameter: "Quantity", method: "LC-MS/MS", specification: "Target specification", result: "9.82 mg/vial", status: "Reported" },
      { parameter: "Mass confirmation", method: "LC-MS/MS", specification: "Expected ion envelope", result: "Observed", status: "Observed" },
    ],
  },
  {
    id: "PX-10544",
    coaNumber: "SSL-COA-2608-004",
    verificationId: "SSL-RETA-10544",
    compound: "Retatrutide",
    client: "Research Client",
    category: "Research Peptide",
    sampleType: "Lyophilized powder",
    strength: "10 mg / vial",
    batchLot: "RC-1054",
    appearance: "White lyophilized powder",
    source: "Client-submitted sample",
    dateReceived: "2026-08-01",
    dateReported: "2026-08-07",
    dateCompleted: "2026-08-06",
    method: "RP-HPLC-UV + ESI-MS",
    purity: "99.1%",
    netContent: "9.98 mg",
    companyWebsite: "client supplied",
    identity: "Confirmed",
    status: "Approved",
    massConfirmation: "Observed",
    results: [
      { parameter: "Identity", method: "ESI-MS", specification: "Conforms to reference standard", result: "Confirmed (1419.5 Da)", status: "Pass" },
      { parameter: "Chromatographic purity", method: "RP-HPLC-UV, 220 nm", specification: ">=98.0%", result: "99.1%", status: "Pass" },
      { parameter: "Related substances", method: "RP-HPLC-UV", specification: "Report total", result: "0.9% total", status: "Reported" },
      { parameter: "Mass confirmation", method: "ESI-MS", specification: "Expected ion envelope", result: "Observed", status: "Observed" },
    ],
  },
];

export function findCertificate(id: string): Certificate | null {
  const normalized = id.trim().toUpperCase();

  return (
    certificates.find(
      (certificate) =>
        certificate.id.toUpperCase() === normalized ||
        certificate.verificationId.toUpperCase() === normalized ||
        certificate.coaNumber.toUpperCase() === normalized,
    ) ?? null
  );
}
