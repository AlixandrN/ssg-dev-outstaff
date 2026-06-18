import Link from "next/link";
import { EButtonLabel, IData } from "@/lib/types";

export const CTASection = ({ cTAData }: { cTAData: IData["CTA"] }) => {
  const { title, description } = cTAData;
  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">{title}</h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-8 py-4 font-medium text-slate-900 transition-all duration-300
                 hover:bg-amber-500 hover:-translate-y-0.5 hover:shadow-lg
                  "
            >
              {EButtonLabel.DISCUSS_PROJECT}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
