import { prisma } from "@/lib/prisma";
import { Scroller } from "@/components/Scroller";

export const dynamic = "force-dynamic";

const thClass = "bg-gray-100 dark:bg-gray-800 sticky top-0";

const AboutPage = async () => {
  const customers = await prisma.user.findMany({
    orderBy: {
      id: "desc", // new ones first
    },
  });

  return (
    <div
      className="mx-auto flex flex-col  w-full
      justify-start items-center h-[calc(100vh-100px)]
      gap-2 
      "
    >
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
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th className={`${thClass} px-2 sm:p-4 `}>ID</th>
                  <th className={`${thClass} pl-1`}>Name</th>
                  <th className={`${thClass} pl-1`}>Email</th>
                  <th className={thClass}>Message</th>
                  <th className={`${thClass} hidden md:table-cell`}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {customers.map(({ id, name, email }) => (
                  <tr key={id}>
                    <td className="px-2 text-center">{id}</td>
                    <td className="w-25 pl-1">
                      <div className="font-bold truncate w-full">{name}</div>
                    </td>
                    <td className="text-sm sm:text-base pl-1 w-25">{email}</td>
                    <td>
                      <div
                        className="line-clamp-1 sm:line-clamp-2 max-w-50 sm:max-w-xs md:max-w-md text-sm"
                        title="some_title"
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit...
                      </div>
                    </td>
                    <td className="hidden md:table-cell">
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-transparent border border-blue-700 rounded-lg hover:bg-blue-50 hover:border-blue-800 transition-all duration-200">
                          Edit
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-red-700 bg-transparent border border-red-700 rounded-lg hover:bg-red-50 hover:border-red-800 transition-all duration-200">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Scroller>
      )}
    </div>
  );
};
export default AboutPage;
