import { EButtonLabel, TProduct } from "@/lib/types";
import { currency } from "@/lib/constants";
import { ProductCardItem } from "./ProductCardItem";
import Link from "next/link";
import Image from "next/image";

export const ProductCard = (props: TProduct) => {
  const { id, title, bage, price, advantages } = props;

  return (
    <div
      itemScope
      itemType="https://schema.org"
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl
      border border-slate-100 bg-white p-4 md:p-5 transition-all duration-300
      hover:-translate-y-1 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100/50 h-full"
    >
      <div className="flex flex-col h-full">
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-slate-50 mb-4">
          <Image
            src={`/products/${id}.webp`}
            alt={title}
            fill
            sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
            itemProp="image"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {bage && (
            <span className="absolute top-2.5 left-2.5 rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-amber-950 uppercase shadow-xs">
              {bage}
            </span>
          )}
        </div>

        {/* Title and price */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <h2
            itemProp="name"
            className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-(--brand-blue-hover) transition-colors duration-300"
          >
            {title}
          </h2>

          <div
            itemProp="offers"
            itemScope
            itemType="https://schema.org"
            className="whitespace-nowrap rounded-lg bg-slate-50 px-2.5 py-1 text-right"
          >
            <meta itemProp="availability" content="https://schema.org" />
            <span
              itemProp="price"
              content={price.toString()}
              className="text-base font-extrabold text-slate-900"
            >
              {price}
            </span>
            <span
              itemProp="priceCurrency"
              content={currency}
              className="text-[10px] font-medium text-slate-500 ml-0.5"
            >
              {currency}
            </span>
          </div>
        </div>

        {/* Advantages list */}
        <div className="border-t border-dashed border-slate-100 pt-4 flex-1">
          <meta
            itemProp="description"
            content={`Характеристики и преимущества: ${advantages.join(", ")}`}
          />

          <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2.5 text-xs md:text-sm text-slate-600">
            {advantages.map((advantage, index) => (
              <ProductCardItem key={index} label={advantage} />
            ))}
          </ul>
        </div>
      </div>

      {/* Button */}
      <div className="mt-5">
        <Link
          href={`/${id}`}
          aria-label={`${EButtonLabel.MORE_DETAILS} о товаре ${title}`}
          className="btn-link-primary"
        >
          {EButtonLabel.MORE_DETAILS}
        </Link>
      </div>
    </div>
  );
};
