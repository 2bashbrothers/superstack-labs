import { Hero } from "@/components/hero";
import { CapabilitiesStrip } from "@/components/capabilities-strip";
import { UncoverTruth } from "@/components/uncover-truth";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { TestingProcess } from "@/components/testing-process";
import { CoaPreview } from "@/components/coa-preview";
import { PrinciplesSection } from "@/components/principles-section";
import { WhyClients } from "@/components/why-clients";
import { CtaSection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilitiesStrip />
      <UncoverTruth />
      <CapabilitiesSection />
      <TestingProcess />
      <CoaPreview />
      <PrinciplesSection />
      <WhyClients />
      <CtaSection />
    </>
  );
}
