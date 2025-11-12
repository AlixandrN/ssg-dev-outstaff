import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { MakeOrderButton } from "@/components/MakeOrderButton";
import { getDescriptionById } from "@/lib/data-utils/getDescriptionById";
import { EFrameworkCard } from "@/lib/constants";
import { TFrameworkCard } from "@/lib/types";

// const bgCard = "bg-gradient-to-br from-gray-500 to-gray-700";
const bgCard = "bg-primary-content	";

export const FrameworkCard = ({ id, onClick, isFullMode }: TFrameworkCard) => {
  const { t: tHome } = useTranslation("HOME");
  const imagePath = `/${id}_icon.svg`;
  const content = getDescriptionById(id as EFrameworkCard);

  return isFullMode ? (
    <div
      className={`bg-base-100 shadow-xl flex flex-col p-4 md:p-6 rounded-xl text-white ${bgCard} group `}
    >
      <figure className="flex-shrink-0 h-1/2 min-h-0 flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110 active:scale-95">
        <Image
          src={imagePath}
          alt="product_card_icon"
          width={100}
          height={100}
          priority
          // className="w-auto h-auto max-w-full max-h-full object-contain"
          className="w-[150px] h-[150px] object-contain "
        />
      </figure>
      <div className="card-body p-4 h-1/2 min-h-0 flex flex-col overflow-hidden">
        <h2 className="card-title text-lg md:text-xl font-semibold truncate flex-shrink-0">
          {id}
        </h2>
        <p className="text-sm flex-grow line-clamp-3 leading-normal max-h-15 overflow-hidden">
          {tHome(content)}
        </p>
        <div className="card-actions justify-end mt-2">
          <MakeOrderButton />
        </div>
      </div>
    </div>
  ) : (
    <div className={"bg-transparent"} onClick={onClick}>
      <figure className="flex-shrink-0 h-1/2 min-h-0 flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110 active:scale-95">
        <Image
          src={imagePath}
          alt="product_card_icon"
          width={100}
          height={100}
          priority
          className="w-[100px] h-[100px] object-contain "
        />
      </figure>
    </div>
  );
};
