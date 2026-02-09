import { CustomerForm } from "@/components/forms/CustomerForm";
import { getLocalData } from "@/lib/data-utils/getLocalData";
import { IData } from "@/lib/types";

const ContactPage = async () => {
  const { HOME, MODALS } = await getLocalData<IData>("app-data");
  const { GET_IN_TOUCH } = HOME;
  const { GET_IN_TOUCH_SUCCESS, GET_IN_TOUCH_ERROR } = MODALS;

  return (
    <div
      className="mx-auto flex flex-col  w-full
      justify-start items-center h-[calc(100vh-100px)]
      gap-2 md:gap-5 
      "
    >
      <CustomerForm
        isPageMode
        title={GET_IN_TOUCH}
        successModalData={GET_IN_TOUCH_SUCCESS}
        errorModalData={GET_IN_TOUCH_ERROR}
      />
    </div>
  );
};
export default ContactPage;
