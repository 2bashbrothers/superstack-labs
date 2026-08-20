import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payments",
};

export default function PaymentsPage() {
  return (
  <main className="min-h-screen bg-background">
    <div className="mx-auto max-w-3xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8"> 
      <h1>Payments</h1>
      <p>This is the payments page.</p>
    </div>
    
  </main>)
}
