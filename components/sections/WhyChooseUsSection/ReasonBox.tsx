import { Reason } from "@/lib/types";
import { LucideIcon } from "lucide-react";

interface ReasonBox extends Reason {
  icon: LucideIcon;
}

export const ReasonBox = ({
  title,
  description,
  icon,
}: Omit<ReasonBox, "id">) => {
  const IconComponent = icon;
  return (
    <li className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
      <article className="h-full flex flex-col">
        <div
          className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors"
          aria-hidden="true"
        >
          <IconComponent className="w-6 h-6 text-(--brand-blue) group-hover:text-white transition-colors" />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

        <p className="text-gray-600 leading-relaxed grow">{description}</p>
      </article>
    </li>
  );
};
