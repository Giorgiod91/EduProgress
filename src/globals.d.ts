interface Window {
  Stripe: (publishableKey: string) => Stripe;
}

interface Stripe {
  redirectToCheckout(options: {
    sessionId: string;
  }): Promise<StripeRedirectResult>;
}

interface StripeRedirectResult {
  error?: Error;
}
