"use server";

import { prisma } from "@/lib/prisma";
import { TCustomerData } from "@/lib/constants";

export async function createCustomer(customerData: TCustomerData) {
  const { name, email } = customerData;
  try {
    const customer = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    console.log("node customer:", customer);
    return { success: true, data: customer };
  } catch {
    console.log("*** node error ***");
    return { success: false, serverErrors: { server: "DB_PROBLEM" } };
  }
}
