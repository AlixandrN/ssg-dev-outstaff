import { useTranslation as useI18nTranslation } from "react-i18next";

export const useTranslation = (translationArea: "COMMON" | "HOME") => {
  return useI18nTranslation(translationArea);
};
