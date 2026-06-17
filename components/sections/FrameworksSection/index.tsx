import { EFrameworkCard } from "@/lib/constants";
import { SwiperFrameworksBox } from "./SwiperFrameworksBox";

export const FrameworksSection = () => {
  const list: string[] = Array.from(Object.values(EFrameworkCard));

  return (
    <section
      className="relative container-custom"
      aria-label="Стек используемых технологий и фреймворков"
    >
      <h2 className="sr-only">
        Технологии и фреймворки, используемые в разработке
      </h2>

      <SwiperFrameworksBox list={list} />
    </section>
  );
};
