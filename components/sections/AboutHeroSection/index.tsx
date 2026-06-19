import Image from "next/image";
import { LOGO } from "@/lib/constants";
import { IData } from "@/lib/types";

export const AboutHeroSection = ({
  aboutHeroData,
}: {
  aboutHeroData: IData["ABOUT_HERO"];
}) => {
  const { title_1, title_2, description } = aboutHeroData;
  return (
    <section className="container mx-auto px-6 pt-6 pb-16 lg:pt-12 lg:pb-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            {`О студии ${LOGO}`}
          </span>

          {title_1 && title_2 && (
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              {title_1}
              <span className="block text-blue-600">{title_2}</span>
            </h1>
          )}

          {description && (
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {description}
            </p>
          )}
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute -inset-8 rounded-full bg-blue-100 blur-3xl opacity-50" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <Image
              src="/images/about-team.webp"
              alt="Команда веб-студии"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
