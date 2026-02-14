import { prisma } from "@/lib/prisma";
import { Scroller } from "@/components/Scroller";
import { CustomersTable } from "@/components/tables/CustomersTable";

export const dynamic = "force-dynamic";
const AboutPage = async () => {
  const customers = await prisma.user.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div className="mx-auto flex flex-col w-full justify-start items-center h-[calc(100vh-100px)] gap-2">
      <h1 className="text-2xl font-bold pt-2">Customers list</h1>
      {customers.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-4xl mb-4">📭</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No customers found
          </h3>
        </div>
      ) : (
        <Scroller className="p-0 sm:p-4">
          <div className="overflow-x-auto">
            <CustomersTable customers={customers} />
          </div>
        </Scroller>
      )}
    </div>
  );
};
export default AboutPage;
