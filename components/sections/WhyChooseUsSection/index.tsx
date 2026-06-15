import { ScrollAnimationBox } from "@/components/ScrollAnimationBox";
import { LOGO } from "@/lib/constants";
import { ReasonBox } from "./ReasonBox";
import { IData } from "@/lib/types";
import { reasonIconById } from "./reasonIconById";
import { H2Title } from "@/components/ui/texts/H2Title";

export const WhyChooseUsSection = ({
  whyChooseUsData,
}: {
  whyChooseUsData: IData["WHY_CHOOSE_US"];
}) => {
  const { TITLE, SUBTITLE, REASONS } = whyChooseUsData;
  return (
    <section className="container-custom" aria-labelledby="why-choose-us-title">
      <div className="text-center mb-16">
        <H2Title
          id="why-choose-us-title"
          title={`${TITLE}  ${LOGO}`}
          centered
        />

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
    </section>
  );
};
