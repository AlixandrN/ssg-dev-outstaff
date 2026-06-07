import { ScrollAnimationBox } from "@/components/ScrollAnimationBox";
import { ServiceBox } from "./ServiceBox";
import { serviceIconById } from "./serviceIconById";
import { IData } from "@/lib/types";

export const OurServicesSection = ({
  ourServicesData,
}: {
  ourServicesData: IData["OUR_SERVICES"];
}) => {
  const { TITLE, SUBTITLE, SERVICES } = ourServicesData;
  return (
    <section className="py-20 bg-gray-50" aria-labelledby="services-title">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2
            id="services-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            {TITLE}
          </h2>

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
      </div>
    </section>
  );
};
