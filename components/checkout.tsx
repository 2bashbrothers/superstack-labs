"use client";

import { useCallback } from "react";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import {
  startCheckoutSession,
  type CheckoutInput,
} from "@/app/actions/stripe";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

export function Checkout({ order }: { order: CheckoutInput }) {
  const fetchClientSecret = useCallback(
    () => startCheckoutSession(order),
    [order],
  );

  return (
    <div id="checkout" className="min-h-[24rem]">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
