import { CoveredSection } from "@/components/sections/CoveredSection";
import { IDESection } from "@/components/sections/IDESection";
import { JumpSection } from "@/components/sections/JumpSection";
import { ScrollAnimationBox } from "@/components/ScrollAnimationBox";
import { ProductsSection } from "@/components/sections/ProductsSection";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col gap-20 w-full justify-around pt-[50px]">
      <ProductsSection />
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
