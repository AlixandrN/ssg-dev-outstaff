import { TestButton } from "@/components/forms/TestButton";

const AboutPage = async () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 text-[#333333]">About Page</h1>
      <TestButton />
    </div>
  );
};
export default AboutPage;
