"use server";

import { stripe } from "@/lib/stripe";
import { getOrderableBySlug, MAX_ORDER_QUANTITY } from "@/lib/pricing";

export type OrderDetails = {
  name: string;
  email: string;
  matrix?: string;
  batch?: string;
  notes?: string;
};

export type CheckoutInput = {
  compoundSlug: string;
  quantity: number;
  details: OrderDetails;
  /** Client-generated UUID so retries of the same order don't create duplicate sessions. */
  idempotencyKey: string;
};

export async function startCheckoutSession(input: CheckoutInput): Promise<string> {
  const { compoundSlug, quantity, details, idempotencyKey } = input;

  // Validate the compound against the server-side catalog (never trust client price).
  const compound = getOrderableBySlug(compoundSlug);
  if (!compound) {
    throw new Error("This compound is not available for online ordering.");
  }

  // Validate quantity: positive integer, capped over the whole order.
  const qty = Number(quantity);
  if (!Number.isInteger(qty) || qty < 1 || qty > MAX_ORDER_QUANTITY) {
    throw new Error(
      `Quantity must be a whole number between 1 and ${MAX_ORDER_QUANTITY}.`,
    );
  }

  // Basic server-side validation of required customer details.
  const name = String(details?.name ?? "").trim();
  const email = String(details?.email ?? "").trim();
  if (!name) throw new Error("A contact name is required.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("A valid email address is required.");
  }

  // Price is looked up server-side and converted to cents — the client never sets it.
  const unitAmount = Math.round(compound.price * 100);

  const session = await stripe.checkout.sessions.create(
    {
      // `embedded_page` is correct for stripe-node v21+ (API 2026-03-25.dahlia).
      ui_mode: "embedded_page",
      redirect_on_completion: "never",
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${compound.compound} — Analytical Report`,
              description: `${compound.method} · per-sample analysis`,
            },
            unit_amount: unitAmount,
          },
          quantity: qty,
        },
      ],
      metadata: {
        compound: compound.compound,
        method: compound.method,
        quantity: String(qty),
        contact_name: name,
        sample_matrix: details.matrix?.trim().slice(0, 200) ?? "",
        batch_source: details.batch?.trim().slice(0, 200) ?? "",
        notes: details.notes?.trim().slice(0, 500) ?? "",
      },
    },
    { idempotencyKey },
  );

  if (!session.client_secret) {
    throw new Error("Stripe did not return a client secret for checkout.");
  }

  return session.client_secret;
}
