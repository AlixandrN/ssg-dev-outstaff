import { IData } from "@/lib/types";
import { SwiperProductsBox } from "./SwiperProductsBox";

export const ProductsSection = ({
  home,
  products,
}: {
  home: IData["HOME"];
  products: IData["PRODUCTS"];
}) => {
  const { GREATE_DEALS } = home;

  return (
    <section className="section-style flex-col">
      <h1 className="text-3xl font-bold">{GREATE_DEALS}</h1>
      <SwiperProductsBox list={products} />
    </section>
  );
};
