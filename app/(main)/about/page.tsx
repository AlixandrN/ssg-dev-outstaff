import { prisma } from "@/lib/prisma";
import { Scroller } from "@/components/Scroller";

export const dynamic = "force-dynamic";

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
      gap-2 md:gap-5 
      "
    >
      <h1 className="text-2xl font-bold mb-4">Customers list</h1>
      {customers.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-4xl mb-4">📭</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No customers found
          </h3>
        </div>
      ) : (
        <Scroller className="p-4">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th className="bg-base-200 sticky top-0">ID</th>
                  <th className="bg-base-200 sticky top-0">Name</th>
                  <th className="bg-base-200 sticky top-0">Email</th>
                  <th className="bg-base-200 sticky top-0">Message</th>
                  <th className="bg-base-200 sticky top-0">Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map(({ id, name, email }) => (
                  <tr key={id} className="hover">
                    <td>{id}</td>
                    <td>
                      <div className="font-bold">{name}</div>
                    </td>
                    <td>{email}</td>
                    <td>
                      {/* title for tolltip */}
                      <div className="max-w-xs truncate" title="message">
                        message
                      </div>
                    </td>
                    <td>
                      <div className="flex space-x-2">
                        <button className="btn btn-sm btn-outline btn-primary">
                          Edit
                        </button>
                        <button className="btn btn-sm btn-outline btn-error">
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
