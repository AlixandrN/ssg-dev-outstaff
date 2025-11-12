"use client";
import { SwiperBox, TSwiperBox } from "@/components/ui/SwiperBox";
import { EFrameworkCard } from "@/lib/constants";
import { TFrameworkCard } from "@/lib/types";

export const FrameworksSection = () => {
  const list: TFrameworkCard[] = Array.from(
    Object.values(EFrameworkCard),
    (item) => ({
      id: item,
      onClick: () => console.log(`Clicked: ${item}`),
    })
  );

  const props: TSwiperBox = {
    variant: "framework",
    list,
    isLoopMode: true,
  };

  return (
    <section className="relative w-full md:px-8">
      <SwiperBox {...props} />
    </section>
  );
};
