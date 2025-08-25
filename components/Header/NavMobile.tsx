import Link from "next/link";
import { EPublicRoutes } from "@/lib/constants";

interface INavMobile {
  removeBurgerMenu: VoidFunction;
  isBurgerMenuOpen: boolean;
}

export const NavMobile = ({
  removeBurgerMenu,
  isBurgerMenuOpen,
}: INavMobile) => {
  return (
    <div
      className={`
          md:hidden absolute top-full left-0 w-full bg-white shadow-lg
          transition-all duration-300 overflow-hidden
          ${isBurgerMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col space-y-4">
          {Object.keys(EPublicRoutes).map((item) => (
            <Link
              key={item}
              href={EPublicRoutes[item as keyof typeof EPublicRoutes]}
              className="hover:text-blue-600 transition-colors duration-200"
              onClick={() => removeBurgerMenu()}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
