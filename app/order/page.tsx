import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { OrderFlow } from "@/components/order-flow";

export const metadata: Metadata = {
  title: "Order Analysis",
  description:
    "Order an independent analytical report for your compound and pay securely online. Per-sample pricing with results delivered as a certificate of analysis.",
};

export default async function OrderPage({
  searchParams,
}: {
  searchParams: Promise<{ compound?: string }>;
}) {
  const { compound } = await searchParams;

  return (
    <>
      <PageHeader
        eyebrow="Order"
        meta="Secure checkout · USD"
        title="Order an analysis report."
        description="Choose the compound and number of samples, add your submission details, and pay securely. We will follow up with sample submission instructions."
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <OrderFlow initialSlug={compound} />
        </div>
      </section>
    </>
  );
}
