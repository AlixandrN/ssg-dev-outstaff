import { SwiperBox, TSwiperBox } from "@/components/ui/SwiperBox";
import { EFrameworkCard } from "@/lib/constants";
import { IData, TFrameworkCard } from "@/lib/types";

export const FrameworksSection = ({ home }: { home: IData["HOME"] }) => {
  const list: TFrameworkCard[] = Array.from(
    Object.values(EFrameworkCard),
    (item) => ({
      id: item,
      home,
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
