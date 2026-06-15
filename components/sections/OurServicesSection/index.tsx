import { ScrollAnimationBox } from "@/components/ScrollAnimationBox";
import { ServiceBox } from "./ServiceBox";
import { serviceIconById } from "./serviceIconById";
import { IData } from "@/lib/types";
import { H2Title } from "@/components/ui/texts/H2Title";

export const OurServicesSection = ({
  ourServicesData,
}: {
  ourServicesData: IData["OUR_SERVICES"];
}) => {
  const { TITLE, SUBTITLE, SERVICES } = ourServicesData;
  return (
    <section className="container-custom" aria-labelledby="services-title">
      <div className="text-center mb-16">
        <H2Title id="services-title" title={TITLE} centered />

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{SUBTITLE}</p>

        <div
          className="w-24 h-1 bg-(--brand-blue) mx-auto mt-6 rounded-full"
          aria-hidden="true"
        ></div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map(({ id, title, description }, index) => (
          <ScrollAnimationBox
            key={id}
            triggerOnce={true}
            rootMargin="50px"
            animationType="zoom"
            delay={index * 100}
          >
            <ServiceBox
              title={title}
              description={description}
              icon={serviceIconById[id]}
            />
          </ScrollAnimationBox>
        ))}
      </ul>
    </section>
  );
};
