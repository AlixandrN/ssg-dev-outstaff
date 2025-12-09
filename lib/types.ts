import enTranslations from "@/app/locales/en.json";

export type TProduct = {
  id: string;
  title: string;
  bage: string;
  price: string;
  advantages: string[];
  home: IData["HOME"];
};

export interface IData {
  COMMON: Record<string, string>;
  HOME: Record<string, string>;
  FEATURES: string[];
  PRODUCTS: TProduct[];
}

export type THomeTranslations = keyof typeof enTranslations.HOME;
export type TFeaturesTranslations = keyof typeof enTranslations.LIST.PRODUCTS;

export type TFrameworkCard = {
  home: IData["HOME"];
  id: string;
  isFullMode?: boolean;
};
