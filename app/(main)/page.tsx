import { CoveredSection } from "@/components/sections/CoveredSection";
import { IDESection } from "@/components/sections/IDESection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ScrollAnimationBox } from "@/components/ScrollAnimationBox";
import { FirstSection } from "@/components/sections/FirstSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { FrameworksSection } from "@/components/sections/FrameworksSection";
import { GetInTouchSection } from "@/components/sections/GetInTouchSection";
import { getLocalData } from "@/lib/data-utils/getLocalData";
import { IData } from "@/lib/types";

export default async function HomePage() {
  const { HOME, FEATURES, PRODUCTS, MODALS, WHY_CHOOSE_US } =
    await getLocalData<IData>("app-data");
  return (
    <div className="mx-auto flex flex-col md:gap-5 w-full justify-around ">
      {/* <div className="absolute inset-0 bg-linear-to-r from-primary/85 via-primary/85 to-secondary/75 z-10" /> */}
      <div className="absolute inset-0 z-10" />

      <FirstSection home={HOME} features={FEATURES} />
      <WhyChooseUsSection whyChooseUsData={WHY_CHOOSE_US} />

      <FrameworksSection />

      <GetInTouchSection home={HOME} modals={MODALS} />
      <ProductsSection home={HOME} products={PRODUCTS} />
      <IDESection />
      <CoveredSection />
      <ScrollAnimationBox rootMargin="50px" animationType="zoom" delay={200}>
        <CoveredSection />
      </ScrollAnimationBox>
      <CoveredSection />
    </div>
  );
}
