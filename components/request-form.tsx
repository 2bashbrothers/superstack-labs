"use client";

import { useState } from "react";
import { CheckCircle2Icon } from "lucide-react";
import { pricingCategories } from "@/lib/pricing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Errors = Partial<Record<"name" | "email" | "compound" | "details", string>>;

export function RequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [category, setCategory] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const next: Errors = {};

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const compound = String(form.get("compound") ?? "").trim();
    const details = String(form.get("details") ?? "").trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (!compound) next.compound = "Please name the compound to be tested.";
    if (!details) next.details = "Please describe your analytical question.";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-lg border border-border bg-secondary/40 px-8 py-12">
        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2Icon className="size-6 text-primary" />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Request received
        </h2>
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
          Thank you. We will review your analytical question and respond with the
          recommended testing scope and submission details. This is a
          demonstration form — no data has been transmitted.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setSubmitted(false);
            setCategory("");
          }}
          className="mt-2"
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FieldGroup>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={!!errors.name || undefined}>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              aria-invalid={!!errors.name || undefined}
              className="h-11"
            />
            <FieldError>{errors.name}</FieldError>
          </Field>
          <Field data-invalid={!!errors.email || undefined}>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              aria-invalid={!!errors.email || undefined}
              className="h-11"
            />
            <FieldError>{errors.email}</FieldError>
          </Field>
        </div>

        <Field data-invalid={!!errors.compound || undefined}>
          <FieldLabel htmlFor="compound">Compound</FieldLabel>
          <Input
            id="compound"
            name="compound"
            placeholder="e.g. Semaglutide, BPC-157"
            aria-invalid={!!errors.compound || undefined}
            className="h-11"
          />
          <FieldError>{errors.compound}</FieldError>
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field>
            <FieldLabel>Compound category</FieldLabel>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {pricingCategories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldDescription>Optional — helps us route your request.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="samples">Number of samples</FieldLabel>
            <Input
              id="samples"
              name="samples"
              type="number"
              min={1}
              defaultValue={1}
              className="h-11"
            />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="matrix">Sample matrix</FieldLabel>
          <Input
            id="matrix"
            name="matrix"
            placeholder="e.g. Lyophilised powder, reconstituted solution"
            className="h-11"
          />
          <FieldDescription>
            The physical form of the material you intend to submit.
          </FieldDescription>
        </Field>

        <Field data-invalid={!!errors.details || undefined}>
          <FieldLabel htmlFor="details">Analytical question</FieldLabel>
          <Textarea
            id="details"
            name="details"
            rows={5}
            placeholder="Describe what you need to determine — identity, purity, quantity, impurity profile, or another question."
            aria-invalid={!!errors.details || undefined}
          />
          <FieldError>{errors.details}</FieldError>
        </Field>

        <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            Demonstration form. No data is transmitted or stored.
          </p>
          <Button type="submit" className="h-12 px-8 text-[15px]">
            Submit Request
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
}
