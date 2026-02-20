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
      className="
        relative
        w-full
        h-[calc(100vh-100px)]
        pt-25
        flex flex-col
        justify-start
        items-start
      "
    >
      <div className="px-4 *:last:ml-5 *:last:mt-5">
        <h1 className={fontStyle}>{WE_CREATE}</h1>

        <Typewriter list={features} fontStyle={fontStyle} />

        <ButtonIcon
          label="contact us"
          icon="arrow-right"
          className="btn-green"
        />
      </div>
    </section>
  );
};
