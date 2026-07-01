import { IData } from "@/lib/types";
import { H2Title } from "@/components/ui/texts/H2Title";
import { ServiceBox } from "./ServiceBox";
import { ScrollAnimationBox } from "@/components/ScrollAnimationBox";

export const OurServicesSection = ({
  ourServicesData,
}: {
  ourServicesData: IData["OUR_SERVICES"];
}) => {
  const { title, description, SERVICES } = ourServicesData;

  return (
    <section
      className="w-full bg-info-content"
      aria-labelledby="services-title"
    >
      <div className="text-primary-content container-custom py-16 md:py-20">
        <div className="text-center mb-10 md:mb-14">
          <H2Title id="services-title" title={title} centered lightMode />

          <p className="text-sm md:text-xl text-primary-content/80 max-w-3xl mx-auto px-4 md:px-0">
            {description}
          </p>

          <div
            className="w-12 md:w-24 h-0.5 md:h-1 bg-primary-content mx-auto mt-3 md:mt-6 rounded-full"
            aria-hidden="true"
          />
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-0 md:gap-x-12 m-0 p-0 list-none">
          {SERVICES.map(({ id, title, description }, index) => {
            return (
              <ScrollAnimationBox
                key={id}
                triggerOnce={true}
                rootMargin="50px"
                animationType="zoom"
                delay={index * 40}
              >
                <ServiceBox
                  index={index}
                  id={id}
                  title={title}
                  description={description}
                />
              </ScrollAnimationBox>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
