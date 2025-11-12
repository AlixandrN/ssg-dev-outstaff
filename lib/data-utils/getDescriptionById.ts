import enTranslations from "@/app/locales/en.json";
import { EFrameworkCard } from "../constants";

export const getDescriptionById = (
  type: EFrameworkCard
): keyof typeof enTranslations.HOME => {
  switch (type) {
    case EFrameworkCard.REACT:
      return "DESCRIPTION_REACT";
    case EFrameworkCard.ANGULAR:
      return "DESCRIPTION_ANGULAR";
    case EFrameworkCard.VUE:
      return "DESCRIPTION_VUE";
    case EFrameworkCard.NEXT:
      return "DESCRIPTION_NEXT";
    case EFrameworkCard.NODE:
      return "DESCRIPTION_NODE";
    case EFrameworkCard.TS:
      return "DESCRIPTION_TS";
    default:
      return "DESCRIPTION_TS";
  }
};
