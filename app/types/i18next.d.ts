import "i18next";
import enTranslations from "@/app/locales/en.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "COMMON";
    resources: {
      COMMON: typeof enTranslations.COMMON;
      HOME: typeof enTranslations.HOME;
    };
  }
}
