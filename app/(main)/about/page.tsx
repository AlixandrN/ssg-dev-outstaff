import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSolutionsSection } from "@/components/sections/AboutSolutionsSection";
import { CTASection } from "@/components/sections/CTASection";
import { WhyChooseUsAboutSection } from "@/components/sections/WhyChooseUsAboutSection";
import { WorkStagesSection } from "@/components/sections/WorkStagesSection";
import { getLocalData } from "@/lib/data-utils/getLocalData";
import {
  IData,
  PrinciplesData,
  WhyChooseUsData,
  WorkStages,
} from "@/lib/types";
import {
  BASE_URL,
  EPhrases,
  EPublicRoutes,
  LOGO,
  ROUTE_LABELS,
} from "@/lib/constants";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { MissionSection } from "@/components/sections/MissionSection";

export const generateMetadata = async (): Promise<Metadata> => {
  const title = `${EPhrases.SERVICES_WEB_STUDIO} | ${EPhrases.SEO_NEXTJS} | ${LOGO}`;
  const description = `${EPhrases.SEO_ABOUT_PAGE}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/about`,
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/about`,
      siteName: `${LOGO}`,
      images: [
        {
          url: `${BASE_URL}/images/about.webp`,
          width: 1200,
          height: 630,
          alt: `${EPhrases.SERVICES_WEB_STUDIO} ${LOGO}`,
        },
      ],
      locale: "ru_BY",
      type: "website",
    },
  };
};

const AboutPage = async () => {
  const WORK_STAGES = await getLocalData<WorkStages>("work-stages");
  const { REASONS } = await getLocalData<WhyChooseUsData>("why-choose-us");
  const PRINCIPLES_DATA = await getLocalData<PrinciplesData>("principles");
  const { ABOUT_HERO, CTA, ABOUT_SOLUTIONS, ABOUT_MISSION } =
    await getLocalData<IData>("app-data");
  const { title, additionalTitle, description } = ABOUT_HERO;

  return (
    <div className="bg-white" itemScope itemType="https://schema.org/AboutPage">
      {/* to do */}
      <meta itemProp="name" content={`О компании — ${LOGO}`} />
      <meta
        itemProp="description"
        content="Узнайте больше о нашей студии веб-разработки"
      />

      {ABOUT_HERO && (
        <HeroSection
          title={title}
          additionalTitle={additionalTitle}
          description={description}
          mode="about"
          bage={`${ROUTE_LABELS[EPublicRoutes.ABOUT]} ${LOGO}`}
        />
      )}
      {REASONS && <WhyChooseUsAboutSection whyChooseUsReasons={REASONS} />}
      {ABOUT_SOLUTIONS && (
        <AboutSolutionsSection aboutSolutionsData={ABOUT_SOLUTIONS} />
      )}
      {WORK_STAGES && <WorkStagesSection workStages={WORK_STAGES} />}

      {PRINCIPLES_DATA && (
        <PrinciplesSection principlesData={PRINCIPLES_DATA} />
      )}

      {ABOUT_MISSION && <MissionSection missionData={ABOUT_MISSION} />}

      {CTA && <CTASection cTAData={CTA} />}
    </div>
  );
};

export default AboutPage;
