import { ServiceLink } from "./ServiceLink";
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
    <section
      className="w-full bg-info-content"
      aria-labelledby="services-title"
    >
      <div className="text-primary-content container-custom py-8 md:py-16">
        <div className="text-center mb-6 md:mb-12">
          <H2Title id="services-title" title={TITLE} centered />

          <p className="text-sm md:text-xl text-primary-content/80 max-w-3xl mx-auto px-4 md:px-0">
            {SUBTITLE}
          </p>

          <div
            className="w-12 md:w-24 h-0.5 md:h-1 bg-primary-content mx-auto mt-3 md:mt-6 rounded-full"
            aria-hidden="true"
          />
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 m-0 p-0 list-none">
          {SERVICES.map(({ id, title }, index) => {
            const IconComponent = serviceIconById[id];

            return (
              <li
                key={index}
                className={`
                  m-0 p-0 list-none
                  ${index % 2 === 1 ? "md:pl-8" : ""}
                  border-b border-primary-content/20
                  last:border-b-0
                  md:border-b-0
                `}
              >
                <ServiceLink id={id} title={title} icon={IconComponent} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
