import { CoveredSection } from "@/components/sections/CoveredSection";
import { IDESection } from "@/components/sections/IDESection";
import { JumpSection } from "@/components/sections/JumpSection";
import { ScrollAnimationBox } from "@/components/ScrollAnimationBox";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { FirstSection } from "@/components/sections/FirstSection";
import { FrameworksSection } from "@/components/sections/FrameworksSection";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col md:gap-5 w-full justify-around ">
      <FirstSection />
      <ProductsSection />
      <FrameworksSection />
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
