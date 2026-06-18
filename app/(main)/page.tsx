import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { FirstSection } from "@/components/sections/FirstSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { FrameworksSection } from "@/components/sections/FrameworksSection";
import { GetInTouchSection } from "@/components/sections/GetInTouchSection";
import { getLocalData } from "@/lib/data-utils/getLocalData";
import { IData, TProduct, WhyChooseUsData, WorkStages } from "@/lib/types";
import { OurServicesSection } from "@/components/sections/OurServicesSection";
import { WorkStagesSection } from "@/components/sections/WorkStagesSection";
// import { IDESection } from "@/components/sections/IDESection";

export default async function HomePage() {
  const { HOME, FEATURES, MODALS, OUR_SERVICES } =
    await getLocalData<IData>("app-data");
  const PRODUCTS = await getLocalData<TProduct[]>("products");
  const WORK_STAGES = await getLocalData<WorkStages>("work-stages");
  const WHY_CHOOSE_US = await getLocalData<WhyChooseUsData>("why-choose-us");
  return (
    <div className="mx-auto flex flex-col md:gap-5 w-full justify-around ">
      <div className="absolute inset-0 z-10" />

      <FirstSection home={HOME} features={FEATURES} />

      {WHY_CHOOSE_US && <WhyChooseUsSection whyChooseUsData={WHY_CHOOSE_US} />}

      <FrameworksSection />

      <ProductsSection home={HOME} products={PRODUCTS} />

      <OurServicesSection ourServicesData={OUR_SERVICES} />

      <WorkStagesSection workStages={WORK_STAGES} />

      <GetInTouchSection home={HOME} modals={MODALS} />
      {/* <IDESection /> */}
    </div>
  );
}
