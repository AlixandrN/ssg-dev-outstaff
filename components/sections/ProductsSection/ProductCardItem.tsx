import { ICONS } from "@/lib/icons";

type TProductCardItem = {
  label: string;
};

export const ProductCardItem = ({ label }: TProductCardItem) => {
  const checkIcon = ICONS["check"](
    "size-4 shrink-0 text-(--brand-blue) mt-0.5",
  );

  return (
    <li className="flex items-start gap-2">
      <span className="sr-only">Преимущество:</span>

      <div aria-hidden="true" className="flex shrink-0">
        {checkIcon}
      </div>

      <span className="text-slate-600 leading-tight">{label}</span>
    </li>
  );
};
