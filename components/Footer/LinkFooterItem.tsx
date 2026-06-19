"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { TLink } from "@/lib/constants";

export const LinkFooterItem = ({ to, label }: TLink) => {
  const pathname = usePathname();
  const fullPath = to === "/" ? "/" : `/${to}`;
  const isActive = pathname === fullPath;

  return (
    <li>
      <Link
        href={fullPath}
        className={`transition-colors ${
          isActive
            ? "text-(--brand-blue) font-semibold cursor-default"
            : "hover:text-(--brand-blue)"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </Link>
    </li>
  );
};
