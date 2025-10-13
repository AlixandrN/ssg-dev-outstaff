export enum EPublicRoutes {
  HOME = "/",
  ABOUT = "about",
  USERS = "users",
  SERVICES = "services",
  CONTACT = "contact",
}

export type TLanguage = "en" | "ru";

export const LANGUAGE_LIST: { id: TLanguage; label: string }[] = [
  { id: "en", label: "English" },
  { id: "ru", label: "Русский" },
];

export enum EProductCard {
  REACT = "react",
  ANGULAR = "angular",
  VUE = "vue",
  NODE = "node",
  NEXT = "next",
  TS = "typescript",
}
