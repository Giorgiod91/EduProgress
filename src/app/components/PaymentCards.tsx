"use client";

import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const plans = [
  {
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_6oEcON6Fq94HbcIdQV"
        : "",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1PejT9LwhF7s81bJcS1R4zfg"
        : "",
    price: 5.99,
    name: "Basic",
    access: " ✔️ 1 year access",
  },
  {
    link:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_3cs0218NydkXbcI4gm"
        : "",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1PejWjLwhF7s81bJDcYZPBJF"
        : "",
    price: 9.99,
    name: "Pro",
    access: " ✔️ Lifetime access",
  },
];

const handleCheckout = async (link: string) => {
  if (link) {
    window.location.href = link;
  } else {
    console.error("Stripe checkout link is not defined.");
  }
};

function PaymentCards() {
  return (
    <div className="mx-auto max-w-7xl px-8 py-24">
      <div className="mb-20 flex w-full flex-col text-center">
        <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-slate-100 md:-mb-4 lg:text-6xl xl:text-7xl">
          Unlock Your Potential with Our Premium Plans
        </h1>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-8 lg:flex-row">
        {plans.map((plan) => (
          <div
            key={plan.priceId}
            className={`relative z-10 flex flex-col gap-5 rounded-lg bg-base-100 p-8 lg:gap-1 ${
              plan.name === "Pro"
                ? "bg-primary-light border border-primary"
                : "border border-gray-400 bg-gray-800"
            }`}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform rounded-lg bg-white px-2 py-1 text-black shadow-lg">
              {plan.name}
            </div>
            <h2 className="p-5 text-2xl font-semibold text-white">
              {plan.name}
            </h2>
            <h2 className="p-5 text-4xl font-semibold text-white">
              ${plan.price}
            </h2>
            <ul className="flex flex-col p-5 text-white">
              <li>✔️ Access to all features</li>
              <li>✔️ Unlimited tasks</li>
              <li>✔️ Unlimited reminders</li>
              <li>✔️ One-time payment</li>
              <li>{plan.access}</li>
            </ul>
            <button
              onClick={() => handleCheckout(plan.link)}
              className="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-primary/70"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentCards;
