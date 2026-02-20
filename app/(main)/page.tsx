import Image from "next/image";
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
  const { HOME, FEATURES, PRODUCTS, MODALS } =
    await getLocalData<IData>("app-data");
  return (
    <div className="mx-auto flex flex-col md:gap-5 w-full justify-around ">
      <Image
        src="/images/bg-desktop.webp"
        alt="Web development"
        fill
        priority
        className="object-cover hidden md:block"
        sizes="100vw"
      />

      <Image
        src="/images/bg-mobile.webp"
        alt="Web development"
        fill
        priority
        className="object-cover md:hidden"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/85 via-primary/85 to-secondary/75 z-10" />

      <div className="relative z-20">
        <FirstSection home={HOME} features={FEATURES} />
      </div>

      <GetInTouchSection home={HOME} modals={MODALS} />
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
