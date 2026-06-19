import { AboutSolutions } from "@/lib/types";

export const AboutSolutionsSection = ({
  aboutSolutionsData,
}: {
  aboutSolutionsData: AboutSolutions;
}) => {
  const { title, description, cards } = aboutSolutionsData;
  return (
    <section className="bg-slate-50" aria-labelledby="solutions-title">
      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2
            id="solutions-title"
            className="text-3xl font-bold text-slate-900 md:text-4xl"
          >
            {title}
          </h2>

          <p className="mt-6 text-lg text-slate-600">{description}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2" role="list">
            {/* Card 1 */}
            <div
              className="rounded-3xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-md"
              role="listitem"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {cards[0].title}
              </h3>

              <p className="mt-4 text-slate-600">{cards[0].description}</p>
            </div>

            {/* Card 2 */}
            <div
              className="rounded-3xl border border-blue-200 bg-blue-50 p-8 transition-shadow hover:shadow-md"
              role="listitem"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {cards[1].title}
              </h3>

              <p className="mt-4 text-slate-600">{cards[1].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
