"use client";

import { FormEvent, useState } from "react";
import { ButtonIcon } from "../ui/buttons/ButtonIcon";
import { InputLabel } from "./InputLabel";
import { validateForm } from "./validateForm";
import { TCustomerData } from "@/lib/constants";
import { useCustomerForm } from "@/hooks/useCustomerForm";
import { useHandleMobileFocus } from "@/hooks/useHandleMobileFocus";

export type TCustomerErrors = Partial<TCustomerData>;

export const CustomerForm = ({
  isPageMode,
  title,
}: {
  isPageMode?: boolean;
  title?: string;
}) => {
  const [customerData, setCustomerData] = useState<TCustomerData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<TCustomerErrors>({});
  const { isPending, handleCustomer } = useCustomerForm();
  useHandleMobileFocus();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validateErrors = validateForm(customerData);
    if (Object.keys(validateErrors).length) {
      setErrors(validateErrors);
      return;
    }
    handleCustomer(customerData);
  };

  const handleData = (value: string, id: keyof TCustomerData) => {
    setCustomerData({ ...customerData, [id]: value });
    if (errors[id]) {
      setErrors({ ...errors, [id]: undefined });
    }
  };

  return (
    <form
      className={` p-6 bg-white md:rounded-lg shadow-none md:shadow-md w-full md:w-1/2
      ${isPageMode ? "min-h-[calc(100dvh-100px)] md:h-full" : "h-auto"}}  `}
      noValidate
      aria-labelledby="form-title"
      aria-describedby="form-description"
      onSubmit={handleSubmit}
      // Добавляем обработчик клика для закрытия клавиатуры при тапе вне инпута
      onClick={(event) => {
        if (
          (event.target as HTMLElement).tagName !== "INPUT" &&
          (event.target as HTMLElement).tagName !== "TEXTAREA"
        ) {
          (document.activeElement as HTMLElement)?.blur();
        }
      }}
    >
      <h1
        id="form-title"
        className={`text-xl font-bold ${isPageMode ? "mb-10" : "mb-2"}  text-gray-800`}
      >
        {title ?? "Форма обратной связи"}
      </h1>
      <InputLabel
        id="name"
        value={customerData.name}
        label="Полное имя *"
        setValue={handleData}
        errorMessage={errors.name}
      />
      <InputLabel
        id="email"
        value={customerData.email}
        label="Email адрес *"
        setValue={handleData}
        errorMessage={errors.email}
      />
      <InputLabel
        id="message"
        value={customerData.message}
        label="Ваше сообщение *"
        setValue={handleData}
        errorMessage={errors.message}
        isTextareaMode
      />
      <ButtonIcon
        type="submit"
        label={"Send Message"}
        icon={"arrow-right"}
        className="w-full mt-6"
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
            /* Заменяем прыгающую высоту на стабильную отрисовку */
            display: flex;
            flex-direction: column;
            backface-visibility: hidden;
            transform: translateZ(0);
          }

          textarea {
            min-height: 120px; /* Фиксируем минимум вместо calc */
            resize: none;
          }
        }
      `}</style>
    </form>
  );
};
