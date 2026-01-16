import { useState } from "react";
import { TCustomerData } from "@/lib/constants";
import { createCustomer } from "@/app/actions/createCustomer";

export const useCustomerForm = (customerData: TCustomerData) => {
  const [isPending, setPending] = useState(false);
  const [isSuccess, setSuccess] = useState(true);

  const handleCustomer = async () => {
    setPending(true);

    try {
      const result = await createCustomer(customerData);
      setSuccess(result.success);
      console.log("result: ", result);
    } catch (error) {
      setSuccess(false);
      console.log("error on front-end: ", error);
    } finally {
      setPending(false);
    }
  };

  return { isPending, isSuccess, handleCustomer };
};
