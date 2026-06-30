"use client";

import { useState } from "react";
import { PurchaceModal } from "./PurchaceModal";
import { EButtonLabel, TModalData } from "@/lib/types";

interface PurchaseModalWrapper {
  purchaseItem: string;
  message: string;
  successModalData: TModalData;
  errorModalData: TModalData;
}

export const PurchaseModalWrapper = ({
  purchaseItem,
  message,
  successModalData,
  errorModalData,
}: PurchaseModalWrapper) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePurchase = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button
        className="btn-link-primary btn-lg"
        onClick={handlePurchase}
        aria-label={`${EButtonLabel.ORDER_DEVELOPMENT}: ${purchaseItem}`}
      >
        {EButtonLabel.ORDER_DEVELOPMENT}
      </button>

      <PurchaceModal
        title={`${EButtonLabel.ORDER} ${purchaseItem}`}
        message={message}
        isOpen={isModalOpen}
        onClose={onCloseModal}
        successModalData={successModalData}
        errorModalData={errorModalData}
      />
    </>
  );
};
