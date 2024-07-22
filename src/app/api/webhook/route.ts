import Stripe from "stripe";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});
const endpointSecret = process.env.WEBHOOK_SECRET;

// Function to fulfill the order
const fulfillOrder = async (data: Stripe.LineItem[], customerEmail: string) => {
  try {
    let user = await prisma.user.findUnique({
      where: { email: customerEmail },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { email: customerEmail },
      });
    }

    await prisma.subscription.create({
      data: {
        userId: user.id,
        stripeSessionId: data[0]?.id || "",
        status: "paid",
      },
    });

    return true;
  } catch (error) {
    console.error("Error fulfilling order:", error);
    return false;
  }
};

// Function to handle completed checkout session
const handleCompletedCheckoutSession = async (event: Stripe.Event) => {
  try {
    const session = event.data.object as Stripe.Checkout.Session;
    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      session.id,
      {
        expand: ["line_items"],
      },
    );

    const lineItems = sessionWithLineItems.line_items;

    if (!lineItems) return false;

    const ordersFulfilled = await fulfillOrder(
      lineItems.data,
      session.customer_details?.email || "",
    );

    if (ordersFulfilled) return true;

    console.error("Failed to fulfill order");
    return false;
  } catch (error) {
    console.error("Error in handleCompletedCheckoutSession:", error);
    return false;
  }
};

export async function POST(req: Request) {
  const rawBody = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig || !endpointSecret) {
    console.error("Missing stripe-signature or endpointSecret");
    return NextResponse.json(
      { error: "Missing stripe-signature or endpointSecret" },
      { status: 400 },
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Webhook signature verification failed" },
      { status: 400 },
    );
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        const savedSession = await handleCompletedCheckoutSession(event);
        if (!savedSession) {
          return NextResponse.json(
            { error: "Failed to save session" },
            { status: 500 },
          );
        }
        return NextResponse.json(
          { result: "checkout.session.completed handled." },
          { status: 200 },
        );
      default:
        console.warn(`Unhandled event type ${event.type}`);
        return NextResponse.json(
          { result: `Unhandled event type ${event.type}` },
          { status: 200 },
        );
    }
  } catch (error) {
    console.error("Error handling event:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
