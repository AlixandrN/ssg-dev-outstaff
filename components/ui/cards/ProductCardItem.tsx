import { ICONS } from "@/lib/icons";

type TProductCardItem = {
  label: string;
};

export const ProductCardItem = ({ label }: TProductCardItem) => {
  const checkIcon = ICONS["check"]("size-4 me-2 inline-block text-success");
  return (
    <li>
      {checkIcon}
      <span>{label}</span>
    </li>
  );
};
