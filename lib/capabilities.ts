export type Capability = {
  index: string;
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  approach: string;
  outputs: string[];
  applications: string[];
  methods: string[];
};

export const capabilities: Capability[] = [
  {
    index: "01",
    slug: "peptide-analysis",
    eyebrow: "Peptide Analysis",
    title: "Identity, purity & quantity",
    description:
      "Targeted peptide analysis using chromatographic and mass spectrometric techniques selected according to the submitted material and requested scope.",
    approach:
      "Peptides are analysed by reversed-phase chromatography with UV detection and confirmed by mass spectrometry. The method is selected for the submitted material and the analytical question being investigated.",
    outputs: [
      "Peptide identity confirmation",
      "Chromatographic purity assessment",
      "Quantity analysis where requested",
      "Defined compound panels",
    ],
    applications: [
      "Supplier verification",
      "Batch review",
      "Research characterisation",
      "Formulation checks",
    ],
    methods: ["RP-HPLC-UV", "Mass spectrometry"],
  },
  {
    index: "02",
    slug: "targeted-analysis",
    eyebrow: "Targeted Analysis",
    title: "LC–MS/MS",
    description:
      "Selective analysis of defined target compounds using liquid chromatography coupled with tandem mass spectrometry.",
    approach:
      "Liquid chromatography is coupled with tandem mass spectrometry for selective detection and quantification of defined analytes, with method development carried out where an established method is not available.",
    outputs: [
      "Small molecule quantification",
      "Target compound confirmation",
      "Multi-analyte panels",
      "Method development where required",
    ],
    applications: [
      "Pharmaceutical analysis",
      "Specialty compound testing",
      "Multi-analyte screening",
      "Concentration measurement",
    ],
    methods: ["LC–MS/MS", "Method development"],
  },
  {
    index: "03",
    slug: "structural-investigation",
    eyebrow: "Structural Investigation",
    title: "High-resolution mass spectrometry",
    description:
      "Accurate-mass and fragmentation analysis for applications requiring deeper structural investigation.",
    approach:
      "High-resolution mass spectrometry provides accurate-mass measurement and fragmentation data, supporting investigation of unknown compounds and characterisation of impurities within the agreed scope.",
    outputs: [
      "Accurate mass measurement",
      "Unknown compound investigation",
      "Impurity profiling",
      "Structural interpretation",
    ],
    applications: [
      "Impurity investigation",
      "Unknown identification",
      "Reference characterisation",
      "Structural confirmation",
    ],
    methods: ["HRMS", "Accurate-mass MS"],
  },
  {
    index: "04",
    slug: "screening-services",
    eyebrow: "Supplementary Testing",
    title: "Screening & microbiology",
    description:
      "Additional screening and microbiological testing offered alongside core analytical services to support broader sample assessment.",
    approach:
      "Supplementary tests are selected according to the sample and the requirement. These services complement chromatographic and mass spectrometric analysis where a broader assessment is needed.",
    outputs: [
      "Heavy metal screening",
      "GC-MS screening",
      "Sterility testing",
      "Endotoxin testing",
    ],
    applications: [
      "Elemental screening",
      "Volatile compound screening",
      "Microbial assessment",
      "Endotoxin assessment",
    ],
    methods: ["ICP screening", "GC-MS", "Microbiology"],
  },
];
