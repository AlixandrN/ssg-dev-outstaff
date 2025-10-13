import enTranslations from "@/app/locales/en.json";
import { EProductCard } from "../constants";

export const getProductCardDescription = (
  type: EProductCard
): keyof typeof enTranslations.HOME => {
  switch (type) {
    case EProductCard.REACT:
      return "DESCRIPTION_REACT";
    case EProductCard.ANGULAR:
      return "DESCRIPTION_ANGULAR";
    case EProductCard.VUE:
      return "DESCRIPTION_VUE";
    case EProductCard.NEXT:
      return "DESCRIPTION_NEXT";
    case EProductCard.NODE:
      return "DESCRIPTION_NODE";
    case EProductCard.TS:
      return "DESCRIPTION_TS";
    default:
      return "DESCRIPTION_TS";
  }
};
