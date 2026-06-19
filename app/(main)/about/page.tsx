import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { WorkStagesSection } from "@/components/sections/WorkStagesSection";
import { getLocalData } from "@/lib/data-utils/getLocalData";
import { IData, WhyChooseUsData, WorkStages } from "@/lib/types";
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
  const { ABOUT_HERO, CTA } = await getLocalData<IData>("app-data");

  return (
    <main className="bg-white">
      {ABOUT_HERO && <AboutHeroSection aboutHeroData={ABOUT_HERO} />}

      {/* WHY_CHOOSE_US REASONS*/}
      <section className="container mx-auto px-6 pb-24">
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-6">
          {REASONS.map((item) => (
            <div
              key={item.title}
              className="w-full rounded-3xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(25%-18px)] 2xl:w-auto 2xl:flex-1 2xl:max-w-none"
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

      {/* Solutions */}
      <section className="bg-slate-50">
        <div className="container mx-auto px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Решение найдётся для каждого
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Мы понимаем, что возможности бизнеса могут сильно отличаться.
              Поэтому предлагаем решения как для стартапов и небольших компаний,
              так и для серьёзных проектов с высокими требованиями.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-8">
                <h3 className="text-xl font-semibold text-slate-900">
                  Для старта бизнеса
                </h3>

                <p className="mt-4 text-slate-600">
                  Если вы только начинаете и ограничены в бюджете, мы предложим
                  оптимальное решение, которое позволит быстро выйти в интернет
                  и начать привлекать клиентов.
                </p>
              </div>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8">
                <h3 className="text-xl font-semibold text-slate-900">
                  Для серьёзных проектов
                </h3>

                <p className="mt-4 text-slate-600">
                  Если вам нужен уникальный продукт с индивидуальным дизайном,
                  интеграциями и сложной логикой — мы разработаем решение,
                  полностью соответствующее вашим задачам.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
};

export default AboutPage;
