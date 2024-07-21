import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

const endpointSecret = process.env.WEBHOOK_SECRET;

// mostly copied from stripe docs and chatgpt example

const fullfillOrder = async (
  data: Stripe.LineItem[],
  customerEmail: string,
) => {
  try {
    // Check if the user with the provided email exists
    let user = await prisma.user.findUnique({
      where: { email: customerEmail },
    });

    // If the user does not exist, create a new user
    if (!user) {
      user = await prisma.user.create({
        data: { email: customerEmail },
      });
    }

    // Create a subscription record for the user
    await prisma.subscription.create({
      data: {
        userId: user.id,
        stripeSessionId: data[0]?.id || "", // Provide a default value if `data[0]?.id` is `undefined`
        status: "paid",
      },
    });

    return true;
  } catch (error) {
    console.error("Error fulfilling order:", error);
    return false;
  }
};

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

    const ordersFullfilled = await fullfillOrder(
      lineItems.data,
      session.customer_details?.email || "",
    );

    if (ordersFullfilled) return true;

    console.error("Failed to fulfill order");
    console.error(JSON.stringify(session));
    console.error(JSON.stringify(lineItems));
    return false;
  } catch (error) {
    console.error("Error in handleCompletedCheckoutSession:", error);
    return false;
  }
};

const handleCustomerSubscriptionUpdate = async (event: Stripe.Event) => {
  // Implement your logic to handle customer subscription update
};

export async function POST(req: NextRequest) {
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
