import { DefaultCardProps } from "@/lib/types";

export const WhyChooseUsAboutSection = ({
  whyChooseUsReasons,
}: {
  whyChooseUsReasons: DefaultCardProps[];
}) => {
  return (
    <section
      className="container mx-auto px-6 pb-24"
      aria-labelledby="reasons-title"
    >
      {/* SEO */}
      <h2 id="reasons-title" className="sr-only">
        Преимущества работы с нами
      </h2>

      <div
        className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-6"
        role="list"
      >
        {whyChooseUsReasons.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-3xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(25%-18px)] 2xl:w-auto 2xl:flex-1 2xl:max-w-none"
            role="listitem"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-3 hidden text-sm leading-6 text-slate-600 md:block">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
