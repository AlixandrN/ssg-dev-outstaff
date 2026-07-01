import { PrinciplesData } from "@/lib/types";

export const PrinciplesSection = ({
  principlesData,
}: {
  principlesData: PrinciplesData;
}) => {
  const { title, description, principles } = principlesData;

  return (
    <section className="bg-slate-900" aria-labelledby="principles-heading">
      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="principles-heading"
            className="text-3xl font-bold text-white md:text-4xl"
          >
            {title}
          </h2>

          <p className="mt-6 text-lg text-slate-300">{description}</p>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ id, title }) => (
            <li
              key={id}
              className="rounded-2xl border border-slate-800 bg-slate-800 p-6"
            >
              <h3 className="text-lg font-medium text-white">{title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
