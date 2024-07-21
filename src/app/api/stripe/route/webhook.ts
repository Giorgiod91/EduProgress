import { NextResponse } from "next/server";
import Stripe from "stripe";

// most of this code is copied from the stripe documentation or example from youtube

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET!;

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature")!;
  const body = await req.text();

  try {
    const event = stripe.webhooks.constructEvent(body, sig, endpointSecret);

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session;
        // Handle successful payment here
        console.log(`Payment succeeded for session ID: ${session.id}`);
        break;
      // Other event types can be handled here
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error(`Webhook error: ${(err as Error).message}`);
    return NextResponse.json(
      { error: `Webhook Error: ${(err as Error).message}` },
      { status: 400 },
    );
  }
}
