import { ScrollAnimationBox } from "@/components/ScrollAnimationBox";
import { LOGO } from "@/lib/constants";
import { ReasonBox } from "./ReasonBox";
import { IData } from "@/lib/types";
import { reasonIconById } from "./reasonIconById";

export const WhyChooseUsSection = ({
  whyChooseUsData,
}: {
  whyChooseUsData: IData["WHY_CHOOSE_US"];
}) => {
  const { TITLE, SUBTITLE, REASONS } = whyChooseUsData;
  return (
    <section className="py-20" aria-labelledby="why-choose-us-title">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2
            id="why-choose-us-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            {TITLE}{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {LOGO}
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{SUBTITLE}</p>

          <div
            className="w-24 h-1 bg-(--brand-blue) mx-auto mt-6 rounded-full"
            aria-hidden="true"
          ></div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REASONS.map(({ id, title, description }, index) => (
            <ScrollAnimationBox
              key={id}
              triggerOnce={true}
              rootMargin="50px"
              animationType="zoom"
              delay={index * 100}
            >
              <ReasonBox
                title={title}
                description={description}
                icon={reasonIconById[id]}
              />
            </ScrollAnimationBox>
          ))}
        </ul>
      </div>
    </section>
  );
};
