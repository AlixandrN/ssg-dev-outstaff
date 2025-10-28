"use client";
import { Typewriter } from "@/components/Typewriter";
import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import { useTranslation } from "@/hooks/useTranslation";

export const CreateSection = () => {
  const { t: tHome } = useTranslation("HOME");
  const { t: tList } = useTranslation("LIST");
  const features = tList("FEATURES", { returnObjects: true });
  const fontStyle = "font-bold text-[42px] text-primary-content";

  return (
    <div className="w-full h-80 bg-gradient-to-r from-primary to-secondary-dark pt-7 flex flex-col justify-start items-start [&>:last-child]:ml-5 [&>:last-child]:mt-5">
      <h1 className={`${fontStyle} px-4`}>{tHome("WE_CREATE")}</h1>
      <Typewriter list={features} fontStyle={fontStyle} />
      <ButtonIcon label={'contuct us'} icon={'arrow-right'}/>
    </div>
  );
};
