"use client";

import { useMemo, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "lucide-react";

import {
  MAX_ORDER_QUANTITY,
  orderableCompounds,
  pricingCategories,
  slugify,
} from "@/lib/pricing";
import type { CheckoutInput } from "@/app/actions/stripe";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkout } from "@/components/checkout";

type Step = "configure" | "details" | "payment";
type DetailErrors = Partial<Record<"name" | "email", string>>;

const groupedCompounds = pricingCategories
  .map((category) => ({
    category,
    rows: orderableCompounds.filter((row) => row.category === category),
  }))
  .filter((group) => group.rows.length > 0);

const steps: { id: Step; label: string }[] = [
  { id: "configure", label: "Analysis" },
  { id: "details", label: "Details" },
  { id: "payment", label: "Payment" },
];

export function OrderFlow({ initialSlug }: { initialSlug?: string }) {
  const [step, setStep] = useState<Step>("configure");
  const [slug, setSlug] = useState<string>(
    initialSlug && orderableCompounds.some((r) => slugify(r.compound) === initialSlug)
      ? initialSlug
      : "",
  );
  const [quantity, setQuantity] = useState<number>(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [matrix, setMatrix] = useState("");
  const [batch, setBatch] = useState("");
  const [notes, setNotes] = useState("");
  const [detailErrors, setDetailErrors] = useState<DetailErrors>({});

  // A fresh key per confirmed order so a payment retry reuses the same session.
  const [idempotencyKey, setIdempotencyKey] = useState<string>("");

  const selected = useMemo(
    () => orderableCompounds.find((r) => slugify(r.compound) === slug),
    [slug],
  );

  const total = selected ? selected.price * quantity : 0;

  const order: CheckoutInput | null =
    selected && idempotencyKey
      ? {
          compoundSlug: slug,
          quantity,
          details: { name, email, matrix, batch, notes },
          idempotencyKey,
        }
      : null;

  function goToDetails() {
    if (!selected) return;
    setStep("details");
  }

  function goToPayment() {
    const next: DetailErrors = {};
    if (!name.trim()) next.name = "Please enter a contact name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Please enter a valid email address.";
    setDetailErrors(next);
    if (Object.keys(next).length > 0) return;
    setIdempotencyKey(crypto.randomUUID());
    setStep("payment");
  }

  function clampQuantity(value: number) {
    if (Number.isNaN(value)) return 1;
    return Math.min(MAX_ORDER_QUANTITY, Math.max(1, Math.floor(value)));
  }

  const currentIndex = steps.findIndex((s) => s.id === step);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
      <div className="min-w-0">
        {/* Step indicator */}
        <ol className="mb-10 flex items-center gap-3">
          {steps.map((s, i) => {
            const done = i < currentIndex;
            const active = i === currentIndex;
            return (
              <li key={s.id} className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex size-6 items-center justify-center rounded-full font-mono text-xs",
                    active && "bg-primary text-primary-foreground",
                    done && "bg-primary/15 text-primary",
                    !active && !done && "bg-muted text-muted-foreground",
                  )}
                >
                  {done ? <CheckIcon className="size-3.5" /> : i + 1}
                </span>
                <span
                  className={cn(
                    "text-sm font-medium",
                    active ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {s.label}
                </span>
                {i < steps.length - 1 ? (
                  <span className="h-px w-6 bg-border" aria-hidden />
                ) : null}
              </li>
            );
          })}
        </ol>

        {step === "configure" ? (
          <FieldGroup>
            <Field>
              <FieldLabel>Compound to analyse</FieldLabel>
              <Select value={slug} onValueChange={(v) => setSlug(v ?? "")}>
                <SelectTrigger className="h-11 w-full">
                  <SelectValue placeholder="Select a compound" />
                </SelectTrigger>
                <SelectContent>
                  {groupedCompounds.map((group) => (
                    <SelectGroup key={group.category}>
                      <SelectLabel>{group.category}</SelectLabel>
                      {group.rows.map((row) => (
                        <SelectItem
                          key={row.compound}
                          value={slugify(row.compound)}
                        >
                          {row.compound}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
              <FieldDescription>
                {selected
                  ? `Method: ${selected.method} · $${selected.price.toLocaleString()} per sample`
                  : "Prices are quoted per submitted sample."}
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="quantity">Number of samples</FieldLabel>
              <Input
                id="quantity"
                type="number"
                min={1}
                max={MAX_ORDER_QUANTITY}
                value={quantity}
                onChange={(e) =>
                  setQuantity(clampQuantity(Number(e.target.value)))
                }
                className="h-11 w-32"
              />
              <FieldDescription>
                Up to {MAX_ORDER_QUANTITY} samples per order.
              </FieldDescription>
            </Field>

            <div className="flex justify-end border-t border-border pt-6">
              <Button
                onClick={goToDetails}
                disabled={!selected}
                className="h-12 px-6 text-[15px]"
              >
                Continue to details
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </div>
          </FieldGroup>
        ) : null}

        {step === "details" ? (
          <FieldGroup>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field data-invalid={!!detailErrors.name || undefined}>
                <FieldLabel htmlFor="name">Contact name</FieldLabel>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  aria-invalid={!!detailErrors.name || undefined}
                  className="h-11"
                />
                <FieldError>{detailErrors.name}</FieldError>
              </Field>
              <Field data-invalid={!!detailErrors.email || undefined}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-invalid={!!detailErrors.email || undefined}
                  className="h-11"
                />
                <FieldError>{detailErrors.email}</FieldError>
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="matrix">Sample matrix</FieldLabel>
              <Input
                id="matrix"
                value={matrix}
                onChange={(e) => setMatrix(e.target.value)}
                placeholder="e.g. Lyophilised powder, reconstituted solution"
                className="h-11"
              />
              <FieldDescription>
                The physical form of the material you intend to submit.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="batch">Batch / source reference</FieldLabel>
              <Input
                id="batch"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                placeholder="Optional lot or vendor reference"
                className="h-11"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="notes">Notes for the lab</FieldLabel>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Any specific analytical question or handling instructions."
              />
            </Field>

            <div className="flex items-center justify-between border-t border-border pt-6">
              <Button
                variant="ghost"
                onClick={() => setStep("configure")}
                className="h-12 px-4 text-[15px]"
              >
                <ArrowLeftIcon data-icon="inline-start" />
                Back
              </Button>
              <Button onClick={goToPayment} className="h-12 px-6 text-[15px]">
                Continue to payment
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </div>
          </FieldGroup>
        ) : null}

        {step === "payment" && order ? (
          <div>
            <Button
              variant="ghost"
              onClick={() => setStep("details")}
              className="mb-6 h-9 px-3"
            >
              <ArrowLeftIcon data-icon="inline-start" />
              Edit order
            </Button>
            <Checkout order={order} />
          </div>
        ) : null}
      </div>

      {/* Order summary */}
      <aside className="lg:sticky lg:top-24 lg:h-fit">
        <div className="rounded-lg border border-border bg-secondary/40 p-6">
          <h2 className="label-technical">Order summary</h2>
          {selected ? (
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-muted-foreground">Compound</dt>
                <dd className="text-right font-medium">{selected.compound}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-muted-foreground">Method</dt>
                <dd>
                  <Badge
                    variant="outline"
                    className="font-mono text-[11px] text-muted-foreground"
                  >
                    {selected.method}
                  </Badge>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-muted-foreground">Per sample</dt>
                <dd className="tabular font-medium">
                  ${selected.price.toLocaleString()}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-muted-foreground">Samples</dt>
                <dd className="tabular font-medium">{quantity}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
                <dt className="font-medium">Total</dt>
                <dd className="tabular text-lg font-semibold">
                  ${total.toLocaleString()}
                </dd>
              </div>
            </dl>
          ) : (
            <p className="mt-6 text-sm text-muted-foreground">
              Select a compound to see pricing.
            </p>
          )}
          <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
            Secure payment processed by Stripe. Standard turnaround is included;
            expedited handling is available on request.
          </p>
        </div>
      </aside>
    </div>
  );
}
