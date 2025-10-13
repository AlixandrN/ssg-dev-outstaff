import { SwiperBox } from "@/components/ui/SwiperBox";
import { EProductCard } from "@/lib/constants";

export const SwipeProductsSection = () => {
  const CARDS_LIST = Object.values(EProductCard);

  return (
    <div className="relative w-full px-20">
      <SwiperBox list={CARDS_LIST} />
    </div>
  );
};
