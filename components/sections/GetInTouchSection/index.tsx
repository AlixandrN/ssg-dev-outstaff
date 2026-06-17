import { CustomerForm } from "@/components/forms/CustomerForm";
import { H2Title } from "@/components/ui/texts/H2Title";
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
    <section
      className="container-custom"
      aria-labelledby="get-in-touch-section-title"
    >
      <H2Title id="get-in-touch-section-title" title={GET_IN_TOUCH} centered />
      <div
        role="form"
        aria-label="Форма обратной связи"
        itemScope
        itemType="https://schema.org/ContactForm"
        className="mt-5 md:mt-12 mx-auto flex flex-col w-full justify-start items-center"
      >
        <CustomerForm
          successModalData={GET_IN_TOUCH_SUCCESS}
          errorModalData={GET_IN_TOUCH_ERROR}
        />
      </div>
    </section>
  );
};
