"use server";

import { prisma } from "@/lib/prisma";
import { TCustomerData } from "@/lib/constants";
import { sendTelegramNotification } from "./sendTelegramNotification";

export async function createCustomer(data: TCustomerData) {
  try {
    sendTelegramNotification(data);
    const customer = await prisma.customer.create({ data });
    console.log("node customer:", customer);
    return { success: true, data: customer };
  } catch {
    console.log("*** node error ***");
    return { success: false, serverErrors: { server: "DB_PROBLEM" } };
  }
}
