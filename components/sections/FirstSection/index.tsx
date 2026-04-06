import Link from "next/link";
import { Typewriter } from "@/components/Typewriter";
import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import { IData } from "@/lib/types";
import { EPublicRoutes } from "@/lib/constants";

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
      <div className="px-4">
        <h1 className={fontStyle}>{WE_CREATE}</h1>

        <Typewriter list={features} fontStyle={fontStyle} />

        <Link href={EPublicRoutes.CONTACT} className="mt-10 inline-block">
          <ButtonIcon
            label="contact us"
            icon="arrow-right"
            className="btn-green"
          />
        </Link>
      </div>
    </section>
  );
};
