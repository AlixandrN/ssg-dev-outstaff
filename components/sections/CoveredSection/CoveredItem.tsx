import React from "react";
import Image from "next/image";
import { TCovered } from ".";

interface ICoveredItem {
  label: string;
  type?: TCovered;
}

export const CoveredItem = ({ label, type = "check" }: ICoveredItem) => {
  const imagePath = `/${type}_icon.svg`;
  return (
    <li className="list-row flex p-2 ">
      <div className="self-center">
        <Image
          className="size-4 rounded-box"
          src={imagePath}
          alt="covered_icon"
          width={15}
          height={15}
          priority
        />
      </div>
      <p className="self-center">{label}</p>
    </li>
  );
};
