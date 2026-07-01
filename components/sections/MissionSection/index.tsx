import { MissionData } from "@/lib/types";

export const MissionSection = ({
  missionData,
}: {
  missionData: MissionData;
}) => {
  const { title, description, quote } = missionData;

  return (
    <section
      className="container mx-auto px-6 py-24"
      aria-labelledby="values-heading"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2
          id="values-heading"
          className="text-3xl font-bold text-slate-900 md:text-4xl"
        >
          {title}
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-600">{description}</p>

        <blockquote className="mt-6 text-xl font-semibold text-slate-900">
          {quote}
        </blockquote>
      </div>
    </section>
  );
};
