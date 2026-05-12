"use client";

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
    duration: "1 year access",
    description: "Perfect for students getting started with progress tracking.",
    features: [
      "Access to all features",
      "Unlimited tasks",
      "Unlimited reminders",
      "One-time payment",
      "1 year access",
    ],
    popular: false,
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
    duration: "Lifetime access",
    description: "For serious learners who want unlimited, forever access.",
    features: [
      "Access to all features",
      "Unlimited tasks",
      "Unlimited reminders",
      "One-time payment",
      "Lifetime access",
    ],
    popular: true,
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
    <section className="relative py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-screen-xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Simple Pricing
          </div>
          <h2 className="mb-4 text-4xl font-black text-white lg:text-5xl">
            Invest in your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              future
            </span>
          </h2>
          <p className="text-base text-base-content/50">
            One-time payment. No subscriptions. No surprises.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto flex max-w-3xl flex-col items-stretch gap-6 lg:flex-row">
          {plans.map((plan) => (
            <div
              key={plan.priceId}
              className={`relative flex w-full flex-col overflow-hidden rounded-2xl p-8 transition-all ${
                plan.popular
                  ? "border border-primary/40 bg-gradient-to-br from-primary/15 to-secondary/5 shadow-2xl shadow-primary/10"
                  : "border border-white/10 bg-white/5"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute right-5 top-5">
                  <span className="rounded-full bg-gradient-to-r from-primary to-orange-400 px-3 py-1 text-xs font-bold text-white shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan info */}
              <div className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-base-content/40">
                  {plan.name}
                </p>
                <div className="mb-3 flex items-end gap-1">
                  <span className="text-5xl font-black text-white">
                    ${plan.price}
                  </span>
                  <span className="mb-2 text-sm text-base-content/40">
                    one-time
                  </span>
                </div>
                <p className="text-sm text-base-content/50">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span
                      className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                        plan.popular
                          ? "bg-primary/20 text-primary ring-1 ring-primary/30"
                          : "bg-white/10 text-white/50 ring-1 ring-white/10"
                      }`}
                    >
                      ✓
                    </span>
                    <span className="text-sm text-base-content/70">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => handleCheckout(plan.link)}
                className={`btn w-full border-0 font-bold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-orange-400 text-white shadow-lg shadow-primary/25 hover:opacity-90 hover:shadow-primary/40"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Get {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Student note */}
        <p className="mt-10 text-center text-sm text-base-content/30">
          Student? Get{" "}
          <span className="text-primary underline underline-offset-2 cursor-pointer">
            50% off
          </span>{" "}
          — just email us with your student ID.
        </p>
      </div>
    </section>
  );
}

export default PaymentCards;
