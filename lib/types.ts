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

export type TFrameworkCard = {
  home: Record<string, string>;
  id: string;
  isFullMode?: boolean;
};
