import { CustomerForm } from "@/components/forms/CustomerForm";
import { IData } from "@/lib/types";

export const GetInTouchSection = ({ home }: { home: IData["HOME"] }) => {
  const { GET_IN_TOUCH } = home;
  return (
    <section className="section-style justify-around">
      <h1 className="text-3xl font-bold">{GET_IN_TOUCH}</h1>
      <CustomerForm />
    </section>
  );
};
