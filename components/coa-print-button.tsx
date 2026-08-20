"use client";

import { DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CoaPrintButton() {
  return (
    <Button onClick={() => window.print()} className="h-10 gap-2 px-4">
      <DownloadIcon className="size-4" />
      Download PDF
    </Button>
  );
}
