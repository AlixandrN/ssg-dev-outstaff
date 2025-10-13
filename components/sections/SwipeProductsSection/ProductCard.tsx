import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { MakeOrderButton } from "@/components/MakeOrderButton";
import { getProductCardDescription } from "@/lib/data-utils/getProductCardDescription";
import { EProductCard } from "@/lib/constants";

const bgCard = "bg-gradient-to-br from-gray-500 to-gray-700";

export const ProductCard = ({ type }: { type: EProductCard }) => {
  const { t: tHome } = useTranslation("HOME");
  const imagePath = `/${type}_icon.svg`;
  const content = getProductCardDescription(type);
  return (
    <div
      className={`bg-base-100 shadow-xl flex flex-col h-100 p-4 md:p-6 rounded-xl text-white ${bgCard} group `}
    >
      <figure className="flex-shrink-0 h-1/2 min-h-0 flex items-center justify-center  p-2 transition-transform duration-300 group-hover:scale-110 active:scale-95">
        <Image
          src={imagePath}
          alt="product_card_icon"
          width={100}
          height={100}
          priority
          className="w-auto h-auto max-w-full max-h-full object-contain"
        />
      </figure>
      <div className="card-body p-4 h-1/2 min-h-0 flex flex-col overflow-hidden">
        <h2 className="card-title text-lg md:text-xl font-semibold truncate flex-shrink-0">
          {type}
        </h2>
        <p className="text-sm flex-grow line-clamp-3 leading-normal max-h-15 overflow-hidden">
          {tHome(content)}
        </p>
        <div className="card-actions justify-end mt-2">
          <MakeOrderButton />
        </div>
      </div>
    </div>
  );
};
