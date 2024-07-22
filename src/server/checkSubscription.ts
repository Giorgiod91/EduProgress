import { PrismaClient } from "@prisma/client";
import { getServerAuthSession } from "~/server/auth";

const prisma = new PrismaClient();

export const checkUserSubscription = async (userId: string) => {
  const subscription = await prisma.subscription.findUnique({
    where: { id: userId, stripeSessionId: "" },
  });

  // Check if the subscription exists and is active
  return subscription && subscription.status === "paid";
};
