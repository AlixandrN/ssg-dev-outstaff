import { TProduct } from "@/lib/types";
import { currency } from "@/lib/constants";
import { ProductCardItem } from "./ProductCardItem";
import { ButtonIcon } from "../buttons/ButtonIcon";

export const ProductCard = (props: TProduct) => {
  const { title, bage, price, advantages } = props;
  const onClick = () => {
    console.log("clicked");
  };
  return (
    <div
      className={`bg-base-100 shadow-xl flex flex-col p-4 md:p-6 rounded-xl group h-[400px]`}
    >
      <div className="card-body relative">
        {bage && (
          <span className="badge badge-xs badge-warning px-4 absolute top-0">
            {bage}
          </span>
        )}
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{title}</h2>
          <span className="text-xl">{`${price} ${currency}`}</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {advantages.map((advantage, index) => (
            <ProductCardItem key={index} label={advantage} />
          ))}
        </ul>

        <div className="mt-6">
          <ButtonIcon
            onClick={onClick}
            label={"START_PROJECT"}
            icon={"arrow-right"}
          />
        </div>
      </div>
    </div>
  );
};
