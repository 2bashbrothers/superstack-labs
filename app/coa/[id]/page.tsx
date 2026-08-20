import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CoaCertificate } from "@/components/coa-certificate";
import { CoaPrintButton } from "@/components/coa-print-button";
import { certificates, findCertificate } from "@/lib/certificates";

type CoaCertificatePageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return certificates.map((certificate) => ({
    id: certificate.verificationId,
  }));
}

export async function generateMetadata({
  params,
}: CoaCertificatePageProps): Promise<Metadata> {
  const { id } = await params;
  const certificate = findCertificate(id);

  if (!certificate) {
    return {
      title: "Certificate Not Found",
    };
  }

  return {
    title: `${certificate.verificationId} COA`,
    description: `Certificate of Analysis for ${certificate.compound}, sample ${certificate.id}.`,
  };
}

export default async function CoaCertificatePage({
  params,
}: CoaCertificatePageProps) {
  const { id } = await params;
  const certificate = findCertificate(id);

  if (!certificate) {
    notFound();
  }

  return (
    <div className="coa-print-page bg-secondary/35 px-4 py-8 sm:px-6 md:py-12">
      <div className="no-print mx-auto mb-4 flex max-w-5xl justify-end">
        <CoaPrintButton />
      </div>
      <CoaCertificate certificate={certificate} />
    </div>
  );
}
