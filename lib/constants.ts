export const LOGO = "LOGO";

export enum EPublicRoutes {
  HOME = "/",
  ABOUT = "about",
  USERS = "users",
  SERVICES = "services",
  CONTACT = "contact",
}

export const routeLabels = {
  [EPublicRoutes.HOME]: "Главная",
  [EPublicRoutes.ABOUT]: "О нас",
  [EPublicRoutes.USERS]: "Пользователи",
  [EPublicRoutes.SERVICES]: "Услуги",
  [EPublicRoutes.CONTACT]: "Контакты",
} as const;

export type TLanguage = "en" | "ru";

export type TLink = {
  to: (typeof EPublicRoutes)[keyof typeof EPublicRoutes];
  label: (typeof routeLabels)[keyof typeof routeLabels];
};

export const LANGUAGE_LIST: { id: TLanguage; label: string }[] = [
  { id: "en", label: "English" },
  { id: "ru", label: "Русский" },
];

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
  message: string;
};

export enum EStub {
  NO_DATA = "No data",
}
