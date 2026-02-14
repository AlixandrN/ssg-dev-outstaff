import { User } from "@prisma/client";

const thClass = "bg-gray-100 dark:bg-gray-800 sticky top-0 px-2 py-3";

export const CustomersTable = ({ customers }: { customers: User[] }) => {
  return (
    <table className="table table-zebra w-full text-left table-fixed border-collapse">
      <thead>
        <tr>
          <th className={`${thClass} w-[20%] md:w-25 text-center`}>ID</th>
          <th className={`${thClass} w-[20%] md:w-25`}>Date</th>
          <th className={`${thClass} w-[30%] md:w-[150px]`}>Name</th>
          <th className={`${thClass} w-[30%] md:w-50`}>Email</th>
          <th className={`${thClass} hidden md:table-cell`}>Message</th>
          <th
            className={`${thClass} hidden md:table-cell md:w-50 text-center pr-4`}
          >
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        {customers.map(({ id, name, email, message, createdAt }) => (
          <tr className="text-gray-700 hover:bg-gray-50" key={id}>
            <td className="px-2 text-center text-xs truncate">{id}</td>

            <td className="text-[10px] sm:text-xs px-2 leading-tight py-2">
              <div className="font-medium">
                {new Date(createdAt).toLocaleDateString("ru-RU", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                })}
              </div>
              <div className="text-gray-400">
                {new Date(createdAt).toLocaleTimeString("ru-RU", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </td>

            <td className="px-2 font-bold truncate text-sm">{name}</td>
            <td className="px-2 text-sm truncate">{email}</td>

            {/* Desktop */}
            <td className="hidden md:table-cell px-2">
              <div className="line-clamp-2 text-sm">{message}</div>
            </td>
            <td className="hidden md:table-cell px-2">
              <div className="flex justify-center gap-2 pr-2">
                <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-transparent border border-blue-700 rounded-lg hover:bg-blue-50 transition-all">
                  Edit
                </button>
                <button className="px-4 py-2 text-sm font-medium text-red-700 bg-transparent border border-red-700 rounded-lg hover:bg-red-50 transition-all">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
