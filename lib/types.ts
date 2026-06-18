export type TProduct = {
  id: string;
  title: string;
  price: number;
  bage?: string;
  advantages: string[];
  description: string;
  extendedDescription: {
    subtitle: string;
    text: string;
  }[];
};

export type TModalData = {
  title: string;
  message: string;
  closeButtonMessage: string;
};

export interface DefaultCardProps {
  id: number;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  TITLE: string;
  SUBTITLE: string;
  REASONS: DefaultCardProps[];
}

export interface OurServicesData {
  TITLE: string;
  SUBTITLE: string;
  SERVICES: { id: string; title: string; description: string }[];
}

export interface WorkStages {
  TITLE: string;
  SUBTITLE: string;
  STAGES: DefaultCardProps[];
}

export interface IData {
  COMMON: Record<string, string>;
  FEATURES: string[];
  HOME: Record<string, string>;
  OUR_SERVICES: OurServicesData;
  CONTACTS: Record<string, string>;
  MODALS: Record<string, TModalData>;
}

export enum EButtonLabel {
  MORE_DETAILS = "Подробнее",
  ORDER_DEVELOPMENT = "Заказать разработку",
}
