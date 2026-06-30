"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CustomerForm } from "../forms/CustomerForm";
import { EButtonLabel, TModalData } from "@/lib/types";

interface PurchaceModal {
  isOpen: boolean;
  onClose: VoidFunction;
  title: string;
  message: string;
  successModalData: TModalData;
  errorModalData: TModalData;
}

export const PurchaceModal = ({
  isOpen,
  onClose,
  title,
  message,
  successModalData,
  errorModalData,
}: PurchaceModal) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto animate-in zoom-in duration-300 relative"
        style={{ width: "min(92%, 800px)" }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label={EButtonLabel.CLOSE}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">
          {title}
        </h2>
        <p className="text-gray-500 text-center mb-8 leading-relaxed">
          {message}
        </p>

        <CustomerForm
          isModalMode
          closeParentModal={onClose}
          successModalData={successModalData}
          errorModalData={errorModalData}
          topic={title}
        />
      </div>
    </div>,
    document.body,
  );
};
