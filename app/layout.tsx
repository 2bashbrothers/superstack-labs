import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Superstack Analytical — Independent Analytical Testing Laboratory",
    template: "%s — Superstack Analytical",
  },
  description:
    "Independent laboratory analysis for peptides, pharmaceuticals and specialty compounds using advanced chromatographic and mass spectrometry techniques.",
  keywords: [
    "analytical testing",
    "peptide analysis",
    "LC-MS/MS",
    "HPLC",
    "mass spectrometry",
    "certificate of analysis",
    "purity testing",
  ],
  openGraph: {
    title: "Superstack Analytical — Independent Analytical Testing Laboratory",
    description:
      "Independent laboratory analysis for peptides, pharmaceuticals and specialty compounds. Precise methods. Clear reporting. Results you can verify.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full bg-background antialiased",
        inter.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
