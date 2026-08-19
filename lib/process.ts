export const processSteps = [
  {
    index: "01",
    title: "Define the analytical question",
    description:
      "Confirm analyte, matrix, expected concentration and required outputs before any testing begins.",
  },
  {
    index: "02",
    title: "Submit your sample",
    description:
      "Provide the laboratory with the required sample quantity and identifying information.",
  },
  {
    index: "03",
    title: "Analytical testing",
    description:
      "The sample is analysed using the method appropriate for the agreed analytical scope.",
  },
  {
    index: "04",
    title: "Review your results",
    description:
      "Receive sample-specific analytical results and a Certificate of Analysis.",
  },
  {
    index: "05",
    title: "Verify the record",
    description:
      "Issued certificates can be independently accessed using the COA lookup system.",
  },
] as const;

export const principles = [
  {
    index: "01",
    title: "Scope before claims",
    description:
      "The analyte, sample matrix, analytical method and reporting requirement are agreed before testing begins.",
  },
  {
    index: "02",
    title: "Method identified",
    description:
      "Reports clearly identify the analytical method used for the issued result.",
  },
  {
    index: "03",
    title: "Sample-specific reporting",
    description:
      "Results apply only to the submitted sample and agreed analytical scope.",
  },
  {
    index: "04",
    title: "Retrievable records",
    description:
      "Issued certificates can be accessed through a unique certificate identifier.",
  },
] as const;
