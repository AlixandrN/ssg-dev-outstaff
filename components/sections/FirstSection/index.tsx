"use client";
import { Typewriter } from "@/components/Typewriter";
import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import { useTranslation } from "@/hooks/useTranslation";

export const FirstSection = () => {
  const { t: tHome } = useTranslation("HOME");
  const { t: tList } = useTranslation("LIST");
  const features = tList("FEATURES", { returnObjects: true });
  const fontStyle = "font-bold text-[42px] text-primary-content";

  return (
    <section
      className="w-full h-[calc(100vh-500px)] 
    md:h-80 bg-linear-to-r from-primary to-secondary-dark pt-7 flex flex-col justify-start 
    items-start *:last:ml-5 *:last:mt-5"
    >
      <h1 className={`${fontStyle} px-4`}>{tHome("WE_CREATE")}</h1>
      <Typewriter list={features} fontStyle={fontStyle} />
      <ButtonIcon label={"contuct us"} icon={"arrow-right"} />
    </section>
  );
};
