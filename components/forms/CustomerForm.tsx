"use client";

import { FormEvent, useState } from "react";
import { ButtonIcon } from "../ui/buttons/ButtonIcon";
import { InputLabel } from "./InputLabel";
import { validateForm } from "./validateForm";
import { TCustomerData } from "@/lib/constants";

export type TCustomerErrors = Partial<TCustomerData>;

export const CustomerForm = () => {
  const [customerData, setCustomerData] = useState<TCustomerData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<TCustomerErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validateErrors = validateForm(customerData);
    if (Object.keys(validateErrors).length) {
      setErrors(validateErrors);
      return;
    }
    setIsSubmitting(true);

    try {
      // fetch...
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("customerData:", customerData);
    } catch (error) {
      console.error("error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCustomerData = (value: string, id: keyof TCustomerData) => {
    setCustomerData({ ...customerData, [id]: value });
    if (errors[id]) {
      setErrors({ ...errors, [id]: undefined });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md p-6 bg-white md:rounded-lg shadow-md w-full md:w-auto h-[calc(100vh-200px)] md:h-auto"
      noValidate
      aria-labelledby="form-title"
      aria-describedby="form-description"
    >
      <h1 id="form-title" className="text-xl font-bold mb-2 text-gray-800">
        Форма обратной связи
      </h1>
      <InputLabel
        id="name"
        value={customerData.name}
        label="Полное имя *"
        setValue={handleCustomerData}
        errorMessage={errors.name}
      />
      <InputLabel
        id="email"
        value={customerData.email}
        label="Email адрес *"
        setValue={handleCustomerData}
        errorMessage={errors.email}
      />
      <InputLabel
        id="message"
        value={customerData.message}
        label="Ваше сообщение *"
        setValue={handleCustomerData}
        errorMessage={errors.message}
        isTextareaMode
      />
      <ButtonIcon
        type="submit"
        label={"Send Message"}
        icon={"arrow-right"}
        className="w-full"
        isSubmitting={isSubmitting}
      />
    </form>
  );
};
