import { DefaultCardProps } from "@/lib/types";
import { LucideIcon } from "lucide-react";

type TServiceCart = Omit<DefaultCardProps, "id"> & {
  icon: LucideIcon;
};

export const ServiceCart = ({
  title,
  description,
  icon: Icon,
}: TServiceCart) => {
  return (
    <li
      className="flex gap-4 p-6 bg-white rounded-2xl shadow-xs border border-gray-100 hover:shadow-md transition-shadow duration-300"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div
        className="shrink-0 p-3 bg-blue-50 text-blue-600 rounded-xl h-12 w-12 flex items-center justify-center"
        itemProp="image"
      >
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3
          className="text-xl font-semibold text-gray-900 mb-2"
          itemProp="name"
        >
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed" itemProp="description">
          {description}
        </p>
      </div>
    </li>
  );
};
