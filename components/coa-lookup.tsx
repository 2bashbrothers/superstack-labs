"use client";

import { useState } from "react";
import { SearchIcon, CheckCircle2Icon, AlertCircleIcon } from "lucide-react";
import { certificates, findCertificate, type Certificate } from "@/lib/certificates";
import { CertificateResult } from "@/components/certificate-result";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type State =
  | { status: "idle" }
  | { status: "found"; certificate: Certificate }
  | { status: "not-found"; query: string };

export function CoaLookup() {
  const [value, setValue] = useState("");
  const [state, setState] = useState<State>({ status: "idle" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const query = value.trim();
    if (!query) return;
    const certificate = findCertificate(query);
    setState(
      certificate
        ? { status: "found", certificate }
        : { status: "not-found", query },
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <SearchIcon
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter certificate identifier (e.g. PX-10482)"
            aria-label="Certificate identifier"
            className="h-14 pl-12 font-mono text-base"
          />
        </div>
        <Button type="submit" className="h-14 px-8 text-[15px]">
          Verify Certificate
        </Button>
      </form>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="text-xs text-muted-foreground">Try a sample:</span>
        {certificates.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => {
              setValue(c.id);
              setState({ status: "found", certificate: c });
            }}
            className="font-mono text-xs text-primary underline-offset-4 transition-colors hover:underline"
          >
            {c.id}
          </button>
        ))}
      </div>

      <div className="mt-10">
        {state.status === "not-found" && (
          <div
            className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 px-5 py-4"
            role="alert"
          >
            <AlertCircleIcon className="mt-0.5 size-5 shrink-0 text-destructive" />
            <div>
              <p className="font-medium text-foreground">
                No certificate found
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                We could not find a record for{" "}
                <span className="font-mono text-foreground">{state.query}</span>.
                Check the identifier printed on your Certificate of Analysis and
                try again.
              </p>
            </div>
          </div>
        )}

        {state.status === "found" && (
          <div>
            <div
              className={cn(
                "mb-6 flex items-center gap-2.5 text-sm font-medium text-primary",
              )}
            >
              <CheckCircle2Icon className="size-5" />
              Verified record — issued by Superstack Analytical
            </div>
            <CertificateResult certificate={state.certificate} />
          </div>
        )}
      </div>
    </div>
  );
}
