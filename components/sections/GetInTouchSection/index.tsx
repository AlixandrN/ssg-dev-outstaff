import { CustomerForm } from "@/components/forms/CustomerForm";
import { IData } from "@/lib/types";

export const GetInTouchSection = ({
  home,
  modals,
}: {
  home: IData["HOME"];
  modals: IData["MODALS"];
}) => {
  const { GET_IN_TOUCH } = home;
  const { GET_IN_TOUCH_SUCCESS, GET_IN_TOUCH_ERROR } = modals;
  return (
    <section className="section-style justify-around flex-col">
      <h1 className="text-3xl font-bold">{GET_IN_TOUCH}</h1>
      <CustomerForm
        successModalData={GET_IN_TOUCH_SUCCESS}
        errorModalData={GET_IN_TOUCH_ERROR}
      />
    </section>
  );
};
