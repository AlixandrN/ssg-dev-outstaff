"use client";
import { SwiperBox } from "@/components/ui/SwiperBox";
import { useTranslation } from "@/hooks/useTranslation";
import { TProductCard } from "@/lib/types";

export const ProductsSection = () => {
  const { t: tHome } = useTranslation("HOME");
  const { t: tList } = useTranslation("LIST");
  const PRODUCTS = tList("PRODUCTS", { returnObjects: true });

  const list: TProductCard[] = Array.from(Object.values(PRODUCTS), (props) => ({
    onClick: () => console.log(`Clicked: ${props.title}`),
    ...props,
  }));

  return (
    <section className="section-style flex-col">
      <h1 className="text-3xl font-bold">{tHome("GREATE_DEALS")}</h1>
      <SwiperBox variant="product" list={list} />
    </section>
  );
};
