export type PricingCategory =
  | "GLP-1 Peptides"
  | "Research Peptides"
  | "Growth Hormone"
  | "Steroids"
  | "SARMs"
  | "Pharmaceuticals"
  | "Hormonal Modulators"
  | "Additional Testing";

export type PricingRow = {
  compound: string;
  category: PricingCategory;
  price: number;
  method: string;
};

export const pricingCategories: PricingCategory[] = [
  "GLP-1 Peptides",
  "Research Peptides",
  "Growth Hormone",
  "Steroids",
  "SARMs",
  "Pharmaceuticals",
  "Hormonal Modulators",
  "Additional Testing",
];

export const pricing: PricingRow[] = [
  // GLP-1 Peptides
  { compound: "Semaglutide", category: "GLP-1 Peptides", price: 300, method: "RP-HPLC + MS" },
  { compound: "Tirzepatide", category: "GLP-1 Peptides", price: 300, method: "RP-HPLC + MS" },
  { compound: "Retatrutide", category: "GLP-1 Peptides", price: 320, method: "RP-HPLC + MS" },
  { compound: "Liraglutide", category: "GLP-1 Peptides", price: 300, method: "RP-HPLC + MS" },
  { compound: "Cagrilintide", category: "GLP-1 Peptides", price: 320, method: "RP-HPLC + MS" },

  // Research Peptides
  { compound: "BPC-157", category: "Research Peptides", price: 250, method: "RP-HPLC + MS" },
  { compound: "TB-500 (Thymosin β4)", category: "Research Peptides", price: 260, method: "RP-HPLC + MS" },
  { compound: "GHK-Cu", category: "Research Peptides", price: 240, method: "RP-HPLC-UV" },
  { compound: "Melanotan II", category: "Research Peptides", price: 240, method: "RP-HPLC + MS" },
  { compound: "Semax", category: "Research Peptides", price: 250, method: "RP-HPLC + MS" },
  { compound: "Selank", category: "Research Peptides", price: 250, method: "RP-HPLC + MS" },
  { compound: "Epithalon", category: "Research Peptides", price: 240, method: "RP-HPLC + MS" },

  // Growth Hormone
  { compound: "Somatropin (rHGH)", category: "Growth Hormone", price: 350, method: "RP-HPLC + MS" },
  { compound: "CJC-1295", category: "Growth Hormone", price: 280, method: "RP-HPLC + MS" },
  { compound: "Ipamorelin", category: "Growth Hormone", price: 260, method: "RP-HPLC + MS" },
  { compound: "Sermorelin", category: "Growth Hormone", price: 280, method: "RP-HPLC + MS" },
  { compound: "Tesamorelin", category: "Growth Hormone", price: 300, method: "RP-HPLC + MS" },
  { compound: "IGF-1 LR3", category: "Growth Hormone", price: 320, method: "RP-HPLC + MS" },

  // Steroids
  { compound: "Testosterone Enanthate", category: "Steroids", price: 220, method: "GC-MS" },
  { compound: "Testosterone Cypionate", category: "Steroids", price: 220, method: "GC-MS" },
  { compound: "Nandrolone Decanoate", category: "Steroids", price: 230, method: "GC-MS" },
  { compound: "Trenbolone Acetate", category: "Steroids", price: 240, method: "GC-MS" },
  { compound: "Boldenone Undecylenate", category: "Steroids", price: 230, method: "GC-MS" },
  { compound: "Drostanolone Propionate", category: "Steroids", price: 230, method: "GC-MS" },

  // SARMs
  { compound: "Ostarine (MK-2866)", category: "SARMs", price: 200, method: "LC–MS/MS" },
  { compound: "Ligandrol (LGD-4033)", category: "SARMs", price: 200, method: "LC–MS/MS" },
  { compound: "RAD-140 (Testolone)", category: "SARMs", price: 210, method: "LC–MS/MS" },
  { compound: "Cardarine (GW-501516)", category: "SARMs", price: 200, method: "LC–MS/MS" },
  { compound: "Andarine (S4)", category: "SARMs", price: 200, method: "LC–MS/MS" },
  { compound: "YK-11", category: "SARMs", price: 210, method: "LC–MS/MS" },

  // Pharmaceuticals
  { compound: "Sildenafil", category: "Pharmaceuticals", price: 180, method: "LC–MS/MS" },
  { compound: "Tadalafil", category: "Pharmaceuticals", price: 180, method: "LC–MS/MS" },
  { compound: "Finasteride", category: "Pharmaceuticals", price: 190, method: "LC–MS/MS" },
  { compound: "Metformin", category: "Pharmaceuticals", price: 170, method: "LC–MS/MS" },
  { compound: "Modafinil", category: "Pharmaceuticals", price: 190, method: "LC–MS/MS" },

  // Hormonal Modulators
  { compound: "Tamoxifen", category: "Hormonal Modulators", price: 200, method: "LC–MS/MS" },
  { compound: "Clomiphene", category: "Hormonal Modulators", price: 200, method: "LC–MS/MS" },
  { compound: "Anastrozole", category: "Hormonal Modulators", price: 210, method: "LC–MS/MS" },
  { compound: "Exemestane", category: "Hormonal Modulators", price: 210, method: "LC–MS/MS" },
  { compound: "Enclomiphene", category: "Hormonal Modulators", price: 210, method: "LC–MS/MS" },

  // Additional Testing
  { compound: "Heavy Metal Screening", category: "Additional Testing", price: 150, method: "ICP-MS" },
  { compound: "GC-MS Screening", category: "Additional Testing", price: 160, method: "GC-MS" },
  { compound: "Sterility Testing", category: "Additional Testing", price: 180, method: "Microbiology" },
  { compound: "Endotoxin Testing", category: "Additional Testing", price: 190, method: "LAL Assay" },
  { compound: "Custom Method Development", category: "Additional Testing", price: 0, method: "Quoted" },
];

/** Maximum number of samples allowed in a single order. */
export const MAX_ORDER_QUANTITY = 25;

/** Stable, URL-safe identifier derived from a compound name. */
export function slugify(compound: string): string {
  return compound
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** All compounds that can be ordered online (fixed, non-zero price). */
export const orderableCompounds = pricing.filter((row) => row.price > 0);

/** Look up an orderable compound by its slug. Returns undefined if not found or not orderable. */
export function getOrderableBySlug(slug: string): PricingRow | undefined {
  return orderableCompounds.find((row) => slugify(row.compound) === slug);
}
