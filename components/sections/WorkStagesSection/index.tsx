"use client";

import { useRef, useEffect, useState } from "react";
import { StageCard } from "./StageCard";
import { WorkStages } from "@/lib/types";
import { EStub } from "@/lib/constants";

export const WorkStagesSection = ({
  workStages,
}: {
  workStages: WorkStages;
}) => {
  const { TITLE, SUBTITLE, STAGES } = workStages;
  const [activeId, setActiveId] = useState<number>(STAGES[0]?.id || 1);
  const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (STAGES.length === 0) return;

    const observers: IntersectionObserver[] = [];

    cardsRefs.current.forEach((card, idx) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(STAGES[idx].id);
            }
          });
        },
        {
          rootMargin: "-49% 0px -49% 0px",
          threshold: 0,
        },
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [STAGES]);

  if (STAGES.length === 0) {
    return (
      <section
        className="py-20 px-4 bg-linear-to-br from-slate-50 to-white"
        aria-label="Секция этапов работ"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-gray-500" role="status">
            {EStub.NO_DATA}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-20 px-4 md:px-8 bg-linear-to-br from-slate-50 via-white to-blue-50"
      aria-labelledby="work-stages-title"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto">
        <div className="md:sticky md:top-20 mb-12 md:mb-0 md:float-left md:w-1/3 md:pr-8">
          <h2
            id="work-stages-title"
            className="text-3xl md:text-5xl font-extrabold bg-linear-to-r from-slate-900 to-(--brand-blue-hover) bg-clip-text text-transparent mb-4"
            itemProp="name"
          >
            {TITLE}
          </h2>

          <p
            className="text-lg text-slate-600 leading-relaxed"
            itemProp="description"
          >
            {SUBTITLE}
          </p>
        </div>

        <div
          className="md:float-right md:w-2/3"
          role="list"
          aria-label="Список этапов работ"
        >
          <div className="flex flex-col gap-6">
            {STAGES.map((stage, index) => (
              <StageCard
                key={stage.id}
                ref={(el) => {
                  cardsRefs.current[index] = el;
                }}
                stage={stage}
                index={index}
                isActive={activeId === stage.id}
                position={index + 1}
                totalItems={STAGES.length}
              />
            ))}
          </div>
        </div>

        <div className="clear-both"></div>
      </div>
    </section>
  );
};
