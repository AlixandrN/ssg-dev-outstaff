import { forwardRef } from "react";
import { stageIconById } from "./icons";
import { DefaultCardProps } from "@/lib/types";

interface StageCardProps {
  stage: DefaultCardProps;
  index: number;
  isActive: boolean;
  position?: number;
  totalItems?: number;
}

export const StageCard = forwardRef<HTMLDivElement, StageCardProps>(
  ({ stage, index, isActive, position, totalItems }, ref) => {
    const IconComponent = stageIconById[stage.id];

    return (
      <div
        ref={ref}
        className={`
          group relative bg-white rounded-2xl p-6 md:p-8
          transition-all duration-1000 ease-out cursor-pointer
          border-2 shadow-lg hover:shadow-xl
          ${
            isActive
              ? "border-(--brand-blue) bg-linear-to-br from-white to-blue-50 shadow-blue-100"
              : "border-transparent"
          }
        `}
        style={{
          animationDelay: `${index * 0.2}s`,
        }}
        role="listitem"
        aria-current={isActive ? "step" : undefined}
        aria-posinset={position}
        aria-setsize={totalItems}
        itemScope
        itemProp="itemListElement"
        itemType="https://schema.org/ListItem"
      >
        <div className="flex gap-6 md:gap-8 flex-col md:flex-row items-center md:items-start">
          <div
            className={`
              shrink-0 w-24 h-24 md:w-28 md:h-28
              flex items-center justify-center rounded-2xl
              transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1)
              bg-blue-50
              ${
                isActive
                  ? "shadow-lg shadow-blue-200 scale-105"
                  : "group-hover:bg-blue-100"
              }
            `}
            aria-hidden="true"
          >
            {IconComponent && (
              <IconComponent
                size={56}
                strokeWidth={1.5}
                className={`
                  transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) text-(--brand-blue)
                  ${
                    isActive
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-40 scale-90 group-hover:opacity-80 group-hover:scale-95"
                  }
                `}
                aria-hidden="true"
              />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-3 justify-center md:justify-start flex-wrap">
              {/* Stage number */}
              <span
                className={`
                  text-sm font-semibold px-3 py-1 rounded-full
                  transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1)
                  ${
                    isActive
                      ? "bg-(--brand-blue) text-white scale-105 shadow-md"
                      : "bg-blue-100 text-(--brand-blue-hover)"
                  }
                `}
                aria-label={`Этап ${stage.id}`}
              >
                {stage.id.toString().padStart(2, "0")}
              </span>

              {/* Title */}
              <span
                className={`
                  transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1)
                  ${isActive ? "text-(--brand-blue-hover) translate-x-1" : "text-slate-800"}
                `}
              >
                {stage.title}
              </span>
            </h3>

            {/* Description */}
            <p
              className={`
                text-slate-600 leading-relaxed text-base md:text-lg
                transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1)
                ${isActive ? "opacity-100 translate-y-0" : "opacity-60"}
              `}
            >
              {stage.description}
            </p>
          </div>
        </div>

        {/* Schema.org for SEO */}
        <meta itemProp="position" content={String(position)} />
        <meta itemProp="name" content={stage.title} />
        <meta itemProp="description" content={stage.description} />
      </div>
    );
  },
);

StageCard.displayName = "StageCard";
