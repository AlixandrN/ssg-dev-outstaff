export const LOGO = "LOGO";
export const BASE_URL = "https://ssg-dev-outstaff.vercel.app/"; // add to env

export const INPUT_MAX_LENGTH = 40;
export const PHONE_INPUT_MAX_LENGTH = 20;
export const MESSAGE_INPUT_MAX_LENGTH = 180;
export const PHONE_MIN_LENGTH = 9;
export const PHONE_MAX_LENGTH = 11;
export const CUSTOMER_NAME_MIN_LENGTH = 2;

export enum EPublicRoutes {
  HOME = "/",
  ABOUT = "about",
  SERVICES = "services",
  CONTACT = "contact",
}

export const routeLabels = {
  [EPublicRoutes.HOME]: "Главная",
  [EPublicRoutes.ABOUT]: "О нас",
  [EPublicRoutes.SERVICES]: "Услуги",
  [EPublicRoutes.CONTACT]: "Контакты",
} as const;

export type TLink = {
  to: (typeof EPublicRoutes)[keyof typeof EPublicRoutes];
  label: (typeof routeLabels)[keyof typeof routeLabels];
};

export const currency = "р";

export enum EFrameworkCard {
  REACT = "react",
  ANGULAR = "angular",
  VUE = "vue",
  NODE = "node",
  NEXT = "next",
  JS = "javascript",
  TS = "typescript",
  NEST = "nest",
}

export type TCustomerData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  topic?: string;
};

export enum EStub {
  NO_DATA = "No data",
}

export enum EPhrases {
  ABOUT_PRODUCT = "О продукте",
  WHAT_IS_INCLUDED = "Что включено",
}
