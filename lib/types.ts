export type TProduct = {
  id: string;
  title: string;
  onClick: VoidFunction;
  bage: string;
  price: string;
  advantages: string[];
  home: Record<string, string>;
};

export type TModalData = {
  title: string;
  message: string;
  closeButtonMessage: string;
};

export interface IData {
  COMMON: Record<string, string>;
  HOME: Record<string, string>;
  MODALS: Record<string, TModalData>;
  FEATURES: string[];
  PRODUCTS: TProduct[];
}

export type TFrameworkCard = {
  home: Record<string, string>;
  id: string;
  isFullMode?: boolean;
};

export enum EButtonLabel {
  MORE_DETAILS = "Подробнее",
}
