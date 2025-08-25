import { EPublicRoutes } from "@/lib/constants";
import Link from "next/link";

export const NavDesktop = () => {
  const list = Object.keys(EPublicRoutes);
  return (
    <nav className="hidden md:flex space-x-8">
      {list.map((item) => (
        <Link
          key={item}
          href={EPublicRoutes[item as keyof typeof EPublicRoutes]}
          className="hover:text-blue-600 transition-colors duration-200"
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};
