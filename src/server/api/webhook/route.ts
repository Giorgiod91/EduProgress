import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const payload = req.body;
  const response = JSON.parse(payload);

  const sig = req.headers["Stripe-Signature"];

  const dateTime = new Date(response?.created * 1000).toLocaleDateString();
  const timeString = new Date(response?.created * 1000).toLocaleDateString();

  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (error) {}
}
