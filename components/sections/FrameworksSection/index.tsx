import { EFrameworkCard } from "@/lib/constants";
import { SwiperFrameworksBox } from "./SwiperFrameworksBox";

export const FrameworksSection = () => {
  const list: string[] = Array.from(Object.values(EFrameworkCard));
  console.log("list: ", list);
  return (
    <section className="relative w-full md:px-8">
      <SwiperFrameworksBox list={list} />
    </section>
  );
};
