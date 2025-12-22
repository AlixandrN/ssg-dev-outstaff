import enTranslations from "@/app/locales/en.json";

export type THomeTranslations = keyof typeof enTranslations.HOME;
export type TFeaturesTranslations = keyof typeof enTranslations.LIST.PRODUCTS;

export type TProductCard = {
  title: string;
  onClick: VoidFunction;
  bage: string;
  price: string;
  advantages: string[];
};

export type TFrameworkCard = {
  id: string;
  onClick: VoidFunction;
  isFullMode?: boolean;
};

export type TProduct = {
  id: string;
  title: string;
  onClick: VoidFunction;
  bage: string;
  price: string;
  advantages: string[];
  home: Record<string, string>;
};

export interface IData {
  COMMON: Record<string, string>;
  HOME: Record<string, string>;
  FEATURES: string[];
  PRODUCTS: TProduct[];
}
