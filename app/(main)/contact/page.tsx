import { CustomerForm } from "@/components/forms/CustomerForm";
import { IData } from "@/lib/types";
import { getLocalData } from "@/lib/utils/getLocalData";

const ContactPage = async () => {
  const { HOME } = await getLocalData<IData>("app-data");
  const { GET_IN_TOUCH } = HOME;
  return (
    <div
      className="mx-auto flex flex-col  w-full
      justify-start items-center h-[calc(100vh-100px)]
      gap-2 md:gap-5 
      "
    >
      <h1 className="text-xl md:text-3xl text-center font-bold">
        {GET_IN_TOUCH}
      </h1>
      <CustomerForm />
    </div>
  );
};
export default ContactPage;
