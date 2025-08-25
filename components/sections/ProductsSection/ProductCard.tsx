import React from "react";
import Image from "next/image";
import { EProductCardType } from ".";
import { MakeOrderButton } from "@/components/MakeOrderButton";

interface IProductCard {
  type: EProductCardType;
  content: string;
}

export const ProductCard = ({ type, content }: IProductCard) => {
  const imagePath = `/${type}_icon.svg`;
  return (
    <div className="card bg-base-100 shadow-xl w-64 h-80 flex flex-col overflow-hidden">
      <figure className="flex-shrink-0 h-1/2 min-h-0 flex items-center justify-center bg-gray-50 p-2">
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
        <h2 className="card-title text-sm truncate flex-shrink-0">{type}</h2>
        <p className="text-xs flex-grow overflow-auto">{content}</p>
        <div className="card-actions justify-end mt-2">
          <MakeOrderButton />
        </div>
      </div>
    </div>
  );
};
