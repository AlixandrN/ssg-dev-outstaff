import { Metadata } from "next";
// import { CustomerForm } from "@/components/forms/CustomerForm";
// import { getLocalData } from "@/lib/data-utils/getLocalData";
// import { IData } from "@/lib/types";

export async function generateMetadata(): Promise<Metadata> {
  // const data = await getLocalData<IData>("app-data");
  // return {
  //   title: data.CONTACTS.title,
  //   description: data.CONTACTS.description,
  // };
  return {
    title: "about",
    description: "about description",
  };
}

const AboutPage = async () => {
  return (
    <div className="mx-auto flex flex-col w-full justify-start items-center">
      <h1>ABOUT PAGE</h1>
    </div>
  );
};
export default AboutPage;
