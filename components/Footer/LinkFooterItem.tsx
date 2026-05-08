import { TLink } from "@/lib/constants";
import Link from "next/link";

export const LinkFooterItem = ({ to, label }: TLink) => {
  return (
    <li>
      <Link href={to} className="hover:text-(--brand-blue) transition-colors">
        {label}
      </Link>
    </li>
  );
};
