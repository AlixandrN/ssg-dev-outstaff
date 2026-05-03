import Link from "next/link";
import { Typewriter } from "@/components/Typewriter";
import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import { IData } from "@/lib/types";
import { EPublicRoutes } from "@/lib/constants";
import { AdaptiveBox } from "@/components/AdaptiveBox";

export const FirstSection = ({
  features,
  home,
}: {
  features: IData["FEATURES"];
  home: IData["HOME"];
}) => {
  const fontStyle = "font-bold text-2xl md:text-[42px] text-gray-800";
  const { WE_CREATE } = home;
  return (
    <section className="relative w-full min-h-[calc(100vh-100px)] lg:pt-25 px-4 flex justify-center z-20">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <h1 className={`${fontStyle}`}>{WE_CREATE}</h1>

          <Typewriter list={features} fontStyle={fontStyle} />

          <Link
            href={EPublicRoutes.CONTACT}
            className="mt-8 lg:mt-2 inline-block self-center lg:self-start"
          >
            <ButtonIcon
              label="Связаться с нами"
              icon="arrow-right"
              className="btn bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-hover)] text-white border-none"
            />
          </Link>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-center items-center mb-20 lg:my-0">
          <AdaptiveBox />
        </div>
      </div>
    </section>
  );
};
