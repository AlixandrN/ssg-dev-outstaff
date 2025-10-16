import { CoveredSection } from "@/components/sections/CoveredSection";
import { IDESection } from "@/components/sections/IDESection";
import { JumpSection } from "@/components/sections/JumpSection";
import { ScrollAnimationBox } from "@/components/ScrollAnimationBox";
import { SwipeProductsSection } from "@/components/sections/SwipeProductsSection";
import { CreateSection } from "@/components/sections/CreateSection";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col gap-20 w-full justify-around ">
      <CreateSection />
      <SwipeProductsSection />
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
