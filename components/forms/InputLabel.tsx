import { ChangeEvent } from "react";
import {
  INPUT_MAX_LENGTH,
  MESSAGE_INPUT_MAX_LENGTH,
  PHONE_INPUT_MAX_LENGTH,
  TCustomerData,
} from "@/lib/constants";
// import { handleMobileFocus } from "@/lib/utils/mobileFormUtils";

type TLabelInput = {
  id: keyof TCustomerData;
  value: string;
  label: string;
  setValue: (value: string, id: keyof TCustomerData) => void;
  errorMessage?: string;
};

export const InputLabel = ({
  id,
  value,
  label,
  setValue,
  errorMessage,
}: TLabelInput) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let newValue = event.target.value;
    if (id === "phone") {
      newValue = newValue.replace(/[^0-9+\s\-()]/g, "");
    }
    setValue(newValue, id);
  };

  const getInputType = (): string => {
    if (id === "phone") return "tel";
    if (id === "email") return "email";
    return "text";
  };

  // for mobils
  const getInputMode = (): "numeric" | "email" | "text" | undefined => {
    if (id === "phone") return "numeric";
    if (id === "email") return "email";
    return undefined;
  };

  const getAutoComplete = (): string | undefined => {
    if (id === "phone") return "tel";
    if (id === "email") return "email";
    if (id === "name") return "name";
    return undefined;
  };

  const getPlaceholder = (id: keyof TCustomerData, label: string): string => {
    if (id === "name" || id === "phone") {
      return `${label} *`;
    }
    return label;
  };

  const fieldProps = {
    id,
    name: id,
    value,
    onChange: handleChange,
    className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
      errorMessage
        ? "border-red-300 focus:ring-red-500"
        : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
    }`,
    "aria-required": "true" as const,
    "aria-invalid": !!errorMessage,
    "aria-describedby": errorMessage ? "label-error" : "label-hint",
    placeholder: getPlaceholder(id, label),
    maxLength:
      id === "phone"
        ? PHONE_INPUT_MAX_LENGTH
        : id === "message"
          ? MESSAGE_INPUT_MAX_LENGTH
          : INPUT_MAX_LENGTH,
    required: true,
    ...(id === "message"
      ? { rows: 5 }
      : {
          type: getInputType(),
          inputMode: getInputMode(),
          autoComplete: getAutoComplete(),
        }),
  };

  return (
    <div className="mb-6 relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>

      {id === "message" ? (
        <textarea {...fieldProps} />
      ) : (
        <input {...fieldProps} />
      )}

      {errorMessage && (
        <p
          id="label-error"
          className="text-xs text-red-600 absolute"
          role="alert"
        >
          {errorMessage}
        </p>
      )}

      {/* optional */}
      {/* {!errorMessage && id === "message" && value.length < 10 && (
        <p
          id="label-hint"
          className="text-xs text-gray-500 absolute -bottom-2.5"
        >
          Минимум 10 символов.
        </p>
      )} */}
    </div>
  );
};
