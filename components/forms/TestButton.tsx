"use client";

import { ButtonIcon } from "../ui/buttons/ButtonIcon";
import { useCustomerForm } from "@/hooks/useCustomerForm";

export const TestButton = () => {
  const { isPending, handleCustomer } = useCustomerForm();

  const handleClick = () => {
    handleCustomer({
      name: "Alice",
      email: "alice21@prisma.io",
      message: "bla-bla",
    });
  };

  return isPending ? (
    <div>Pending...</div>
  ) : (
    <div>
      TestButton
      <ButtonIcon label="TEST DB2" onClick={handleClick} />
      {/* <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name} {user.email}
          </li>
        ))}
      </ol> */}
    </div>
  );
};
