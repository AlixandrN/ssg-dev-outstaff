import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSolutionsSection } from "@/components/sections/AboutSolutionsSection";
import { CTASection } from "@/components/sections/CTASection";
import { WhyChooseUsAboutSection } from "@/components/sections/WhyChooseUsAboutSection";
import { WorkStagesSection } from "@/components/sections/WorkStagesSection";
import { getLocalData } from "@/lib/data-utils/getLocalData";
import { IData, WhyChooseUsData, WorkStages } from "@/lib/types";
import { EPublicRoutes, LOGO, ROUTE_LABELS } from "@/lib/constants";
// import { Metadata } from "next";

const principles = [
  "Удобство пользователей",
  "Современный дизайн",
  "Высокая скорость загрузки",
  "Адаптация под мобильные устройства",
  "SEO-оптимизация",
  "Надёжность и безопасность",
];

// export async function generateMetadata(): Promise<Metadata> {
//   const { OUR_SERVICES } = await getLocalData<IData>("app-data");
//   return {
//     title: OUR_SERVICES.TITLE,
//     description: OUR_SERVICES.SUBTITLE, // to do add description to the data
//     openGraph: {
//       title: OUR_SERVICES.TITLE,
//       description: OUR_SERVICES.SUBTITLE,
//       type: "website",
//     },
//   };
// }

const AboutPage = async () => {
  const WORK_STAGES = await getLocalData<WorkStages>("work-stages");
  const { REASONS } = await getLocalData<WhyChooseUsData>("why-choose-us");
  const { ABOUT_HERO, CTA, ABOUT_SOLUTIONS } =
    await getLocalData<IData>("app-data");
  const { title, additionalTitle, description } = ABOUT_HERO;

  return (
    <div className="bg-white">
      {ABOUT_HERO && (
        <HeroSection
          title={title}
          additionalTitle={additionalTitle}
          description={description}
          mode="about_team"
          bage={`${ROUTE_LABELS[EPublicRoutes.ABOUT]} ${LOGO}`}
        />
      )}
      {REASONS && <WhyChooseUsAboutSection whyChooseUsReasons={REASONS} />}
      {ABOUT_SOLUTIONS && (
        <AboutSolutionsSection aboutSolutionsData={ABOUT_SOLUTIONS} />
      )}
      {WORK_STAGES && <WorkStagesSection workStages={WORK_STAGES} />}

      {/* Principles */}
      <section className="bg-slate-900">
        <div className="container mx-auto px-6 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Наш подход
            </h2>

            <p className="mt-6 text-lg text-slate-300">
              Мы уделяем внимание не только дизайну, но и качеству кода,
              производительности, безопасности и удобству использования. Мы
              стремимся создавать сайты, которые остаются актуальными и
              развиваются вместе с бизнесом. Поэтому уделяем внимание не только
              внешнему виду, но и качеству реализации, производительности и
              удобству дальнейшего развития проекта.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-slate-800 p-6"
              >
                <p className="font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Что для нас важно
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Мы верим, что хороший сайт — это не просто красивая картинка. Это
            инструмент, который помогает бизнесу расти, находить новых клиентов
            и выделяться среди конкурентов. Поэтому мы уделяем внимание каждой
            детали: от удобства интерфейса до скорости загрузки и качества кода.
          </p>

          <p className="mt-6 text-xl font-semibold text-slate-900">
            Наша задача — создавать сайты, которыми можно гордиться и которые
            действительно приносят результат.
          </p>
        </div>
      </section>

      {CTA && <CTASection cTAData={CTA} />}
    </div>
  );
};

export default AboutPage;
