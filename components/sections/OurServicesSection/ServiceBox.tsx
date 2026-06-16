import { DefaultCardProps } from "@/lib/types";
import { ServiceLink } from "./ServiceLink";
import { serviceIconById } from "@/lib/data-utils/serviceIconById";

type TServiceBox = Omit<DefaultCardProps, "id"> & {
  id: string;
  index: number;
};

export const ServiceBox = ({ index, id, title, description }: TServiceBox) => {
  const IconComponent = serviceIconById[id];
  return (
    <li
      className={`
                     m-0 list-none
                     p-5 md:px-0
                     ${index % 2 === 1 ? "md:pl-6" : "md:pr-6"}
                     border-b border-primary-content/20
                     md:border-b md:border-primary-content/10
                     nth-last-[-n+2]:md:border-b-0
                     flex flex-col gap-1
                   `}
    >
      <ServiceLink id={id} title={title} icon={IconComponent} />

      <p className="hidden md:block text-xs text-primary-content/70 pl-9 md:pl-11 font-normal leading-relaxed max-w-xl">
        {description}
      </p>
    </li>
  );
};
