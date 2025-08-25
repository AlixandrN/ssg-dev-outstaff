import React from "react";
import { TCovered } from ".";
import { CoveredItem } from "./CoveredItem";

interface ICoveredColumn {
  columnTitle: string;
  list: TCovered[];
}

export const CoveredColumn = ({ columnTitle, list }: ICoveredColumn) => {
  return (
    <ul className="list  rounded-2xl px-8 ">
      <li className="p-4 pb-2 text-xl  tracking-wide">{columnTitle}</li>
      {list.map((item, index) => (
        <CoveredItem key={index} label={item} />
      ))}
    </ul>
  );
};
