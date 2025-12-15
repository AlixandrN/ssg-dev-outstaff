import { Typewriter } from "@/components/Typewriter";
import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import { IData } from "@/lib/types";

export const FirstSection = ({
  features,
  home,
}: {
  features: IData["FEATURES"];
  home: IData["HOME"];
}) => {
  const fontStyle = "font-bold text-2xl md:text-[42px] text-primary-content";
  const { WE_CREATE } = home;
  return (
    <section
      className="w-full h-[calc(100vh-100px)]
     bg-linear-to-r from-primary to-secondary-dark pt-7 flex flex-col justify-start 
    items-start *:last:ml-5 *:last:mt-5"
    >
      <h1 className={`${fontStyle} px-4`}>{WE_CREATE}</h1>
      <Typewriter list={features} fontStyle={fontStyle} />
      <ButtonIcon label={"contuct us"} icon={"arrow-right"} />
    </section>
  );
};
