import React from "react";
import { ProductCard } from "./ProductCard";

const TEXT =
  "A card component has a figure, a body part, and inside body there are title and actions partsA card component has a figure, a body part, and inside body there are title and actions partsA card component has a figure, a body part, and inside body there are title and actions partsA card component has a figure, a body part, and inside body there are title and actions partsA card component has a figure, a body part, and inside body there are title and actions partsA card component has a figure, a body part, and inside body there are title and actions parts";

export enum EProductCardType {
  REACT = "react",
  NODE = "node",
}

export const ProductsSection = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-4 card-xl">
      <ProductCard type={EProductCardType.REACT} content={TEXT} />
      <ProductCard type={EProductCardType.NODE} content={TEXT} />
    </div>
  );
};
