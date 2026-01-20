import { CoveredSection } from "@/components/sections/CoveredSection";
import { IDESection } from "@/components/sections/IDESection";
import { JumpSection } from "@/components/sections/JumpSection";
import { ScrollAnimationBox } from "@/components/ScrollAnimationBox";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { FirstSection } from "@/components/sections/FirstSection";
import { FrameworksSection } from "@/components/sections/FrameworksSection";
import { GetInTouchSection } from "@/components/sections/GetInTouchSection";
import { getLocalData } from "@/lib/data-utils/getLocalData";
import { IData } from "@/lib/types";

export default async function HomePage() {
  const { HOME, FEATURES, PRODUCTS } = await getLocalData<IData>("app-data");
  return (
    <div className="mx-auto flex flex-col md:gap-5 w-full justify-around ">

      {process.env.DATABASE_URL ? (
        <p style={{ color: "green" }}>DATABASE_URL - OK</p>
      ) : (
        <p style={{ color: "red" }}> DATABASE_URL - NOT</p>
      )}
      
      <FirstSection home={HOME} features={FEATURES} />
      <GetInTouchSection home={HOME} />
      <ProductsSection home={HOME} products={PRODUCTS} />
      <FrameworksSection home={HOME} />
      <IDESection />
      <JumpSection />
      <CoveredSection />
      <ScrollAnimationBox rootMargin="50px" animationType="zoom" delay={200}>
        <CoveredSection />
      </ScrollAnimationBox>
      <CoveredSection />
    </div>
  );
}
