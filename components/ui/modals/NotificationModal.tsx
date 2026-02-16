"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ButtonIcon } from "../buttons/ButtonIcon";
import { TModalData } from "@/lib/types";

type TNotificationModal = {
  isOpen: boolean;
  onClose: VoidFunction;
  data: TModalData;
  isError?: boolean;
};

export const NotificationModal = ({
  isOpen,
  onClose,
  data,
  isError = false,
}: TNotificationModal) => {
  const [mounted, setMounted] = useState(false);
  const { title, message, closeButtonMessage } = data;
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/15 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl border border-gray-100 animate-in zoom-in duration-300"
        onClick={(event) => event.stopPropagation()}
      >
        <h2
          className={`text-xl text-center font-bold mb-2 ${isError ? "text-red-600" : "text-green-600"}`}
        >
          {title}
        </h2>
        <p className="text-gray-500 text-center mb-8 leading-relaxed">
          {message}
        </p>

        <div className="flex justify-center">
          {isError ? (
            <ButtonIcon
              onClick={onClose}
              label={closeButtonMessage}
              className="w-full py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all active:scale-95"
            />
          ) : (
            <ButtonIcon
              onClick={onClose}
              icon={"check"}
              iconClassName="h-6 w-6 text-white"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 transition-transform active:scale-95 shadow-md"
            />
          )}
        </div>
      </div>
    </div>,

    document.body,
  );
};
