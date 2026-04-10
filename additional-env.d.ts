declare module "*.css";

declare module "swiper/css" {
  const content: void;
  export default content;
}

declare module "swiper/css/navigation" {
  const content: void;
  export default content;
}

declare module "swiper/css/pagination" {
  const content: void;
  export default content;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
