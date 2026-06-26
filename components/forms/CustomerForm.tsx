"use client";

import { FormEvent, useState } from "react";
import { ButtonIcon } from "../ui/buttons/ButtonIcon";
import { InputLabel } from "./InputLabel";
import { validateForm } from "./validateForm";
import { TCustomerData } from "@/lib/constants";
import { useCustomerForm } from "@/hooks/useCustomerForm";
import { useHandleMobileFocus } from "@/hooks/useHandleMobileFocus";
import { NotificationModal } from "../ui/modals/NotificationModal";
import { TModalData } from "@/lib/types";

export type TCustomerErrors = Partial<TCustomerData> & { server?: string };

type TCustomerForm = {
  isPageMode?: boolean;
  title?: string;
  successModalData: TModalData;
  errorModalData: TModalData;
};

export const CustomerForm = ({
  isPageMode,
  title,
  errorModalData,
  successModalData,
}: TCustomerForm) => {
  const [customerData, setCustomerData] = useState<TCustomerData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<TCustomerErrors>({});
  const { isPending, handleCustomer } = useCustomerForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useHandleMobileFocus();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validateErrors = validateForm(customerData);

    console.log("validateErrors: ", validateErrors);

    if (Object.keys(validateErrors).length) {
      setErrors(validateErrors);
      return;
    }


    const result = await handleCustomer(customerData);
    setIsModalOpen(true);
    if (!result?.success && result?.serverErrors) {
      setErrors((prev) => ({ ...prev, ...result.serverErrors }));
      return;
    }

    if (result?.success) {
      setCustomerData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }

    (document.activeElement as HTMLElement)?.blur();
  };

  const handleData = (value: string, id: keyof TCustomerData) => {
    setCustomerData({ ...customerData, [id]: value });
    if (errors[id] || errors["server"]) {
      setErrors({ ...errors, [id]: undefined, server: undefined });
    }
  };

  const onCloseModal = () => {
    setErrors({});
    setIsModalOpen(false);
  };

  return (
    <form
      className={` p-6 bg-white md:rounded-lg shadow-none md:shadow-md w-full md:w-1/2`}
      noValidate
      aria-labelledby="form-title"
      aria-describedby="form-description"
      onSubmit={handleSubmit}
      onClick={(event) => {
        if (
          (event.target as HTMLElement).tagName !== "INPUT" &&
          (event.target as HTMLElement).tagName !== "TEXTAREA"
        ) {
          (document.activeElement as HTMLElement)?.blur();
        }
      }}
    >
      {title && (
        <h1
          id="form-title"
          className={`text-xl font-bold ${isPageMode ? "mb-2 lg:mb-8" : "mb-2"}  text-gray-800`}
        >
          {title}
        </h1>
      )}
      <InputLabel
        id="name"
        value={customerData.name}
        label="Имя"
        setValue={handleData}
        errorMessage={errors.name}
      />
      <InputLabel
        id="phone"
        value={customerData.phone}
        label="Телефон"
        setValue={handleData}
        errorMessage={errors.phone}
      />
      <InputLabel
        id="email"
        value={customerData.email}
        label="Email адрес"
        setValue={handleData}
        errorMessage={errors.email}
      />
      <InputLabel
        id="message"
        value={customerData.message}
        label="Ваше сообщение"
        setValue={handleData}
        errorMessage={errors.message}
      />
      <ButtonIcon
        type="submit"
        label={"Send Message"}
        icon={"arrow-right"}
        className="btn bg-(--brand-blue) hover:bg-(--brand-blue-hover) text-white border-none w-full"
        isSubmitting={isPending}
      />

      {/* CSS for mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          input,
          textarea {
            font-size: 16px !important;
          }

          form {
            padding-bottom: env(safe-area-inset-bottom, 20px);
            display: flex;
            flex-direction: column;
            backface-visibility: hidden;
            transform: translateZ(0);
          }

          textarea {
            min-height: 120px;
            resize: none;
          }
        }
      `}</style>
      <NotificationModal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        data={errors.server ? errorModalData : successModalData}
        isError={!!errors.server}
      />
    </form>
  );
};
