import { IData, TProduct } from "@/lib/types";
import { SwiperProductsBox } from "./SwiperProductsBox";
import { H2Title } from "@/components/ui/texts/H2Title";

export const ProductsSection = ({
  home,
  products,
}: {
  home: IData["HOME"];
  products: TProduct[];
}) => {
  const { GREATE_DEALS } = home;

  return (
    <section
      className="container-custom"
      aria-labelledby="products-section-title"
    >
      <H2Title id="products-section-title" title={GREATE_DEALS} centered />

      <div className="mt-5 md:mt-12" role="region" aria-label="Слайдер товаров">
        <SwiperProductsBox list={products} />
      </div>
    </section>
  );
};
