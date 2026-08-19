import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center py-32 px-16">
        <h1>Superstack Labs</h1>
        <Button variant="outline">Button</Button>
      </main>
    </div>
  );
}
