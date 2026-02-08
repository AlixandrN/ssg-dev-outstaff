import { useState } from "react";
import { TCustomerData } from "@/lib/constants";
import { createCustomer } from "@/app/actions/createCustomer";

export const useCustomerForm = () => {
  const [isPending, setPending] = useState(false);

  const handleCustomer = async (customerData: TCustomerData) => {
    setPending(true);

    try {
      const result = await createCustomer(customerData);
      console.log("result: ", result);
      return result;
    } catch (error) {
      console.log("error on front-end: ", error);
    } finally {
      setPending(false);
    }
  };

  return { isPending, handleCustomer };
};
