import { TCustomerData } from "@/lib/constants";
import React, { ChangeEvent } from "react";

type TLabelInput = {
  id: keyof TCustomerData;
  value: string;
  label: string;
  setValue: (value: string, id: keyof TCustomerData) => void;
  errorMessage?: string;
  isTextareaMode?: boolean;
};

export const InputLabel = ({
  id,
  value,
  label,
  setValue,
  errorMessage,
  isTextareaMode,
}: TLabelInput) => {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;
    setValue(newValue, id);
  };

  const fieldClassName = `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2  ${
    errorMessage
      ? "border-red-300 focus:ring-red-500"
      : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
  }`;

  return (
    <div className="mb-6 relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>

      {(() => {
        return isTextareaMode ? (
          <textarea
            id={id}
            name={id}
            required
            rows={5}
            value={value}
            onChange={handleChange}
            className={fieldClassName}
            aria-required="true"
            aria-invalid={!!errorMessage}
            aria-describedby={errorMessage ? "label-error" : "label-hint"}
            placeholder={label}
          />
        ) : (
          <input
            type={id}
            id={id}
            name={id}
            required
            value={value}
            onChange={handleChange}
            className={fieldClassName}
            aria-required="true"
            aria-invalid={!!errorMessage}
            aria-describedby={"label-error"}
            placeholder={label}
          />
        );
      })()}

      {errorMessage && (
        <p
          id="label-error"
          className="text-xs text-red-600 absolute"
          role="alert"
        >
          {errorMessage}
        </p>
      )}

      {!errorMessage && isTextareaMode && value.length < 10 && (
        <p
          id="label-hint"
          className=" text-xs text-gray-500 absolute -bottom-2.5"
        >
          Минимум 10 символов.
        </p>
      )}
    </div>
  );
};
