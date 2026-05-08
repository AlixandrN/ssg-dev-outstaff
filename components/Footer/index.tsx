import { EPublicRoutes, routeLabels } from "@/lib/constants";
import { LinkFooterItem } from "./LinkFooterItem";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-info-content border-t border-gray-200">
      <div className="container mx-auto px-4 py-2 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left text-gray-400">
          {/* BLOCK-1 ABOUT PROJECT */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold text-primary-content">
              Мой проект
            </h3>
            <p className="text-gray-400 text-sm">Краткое описание.</p>
          </div>

          {/* BLOCK-2 NAV */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold text-primary-content">
              Навигация
            </h3>
            <nav>
              <ul className="space-y-2">
                {Object.keys(EPublicRoutes).map((key) => {
                  const path = EPublicRoutes[key as keyof typeof EPublicRoutes];
                  return (
                    <LinkFooterItem
                      key={key}
                      to={path}
                      label={routeLabels[path]}
                    />
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* BLOCK-3 CONTACTS */}
          <div>
            <h3 className="text-lg font-semibold text-primary-content mb-4">
              Контакты
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                📞{" "}
                <a href="tel:+375297777777" className="hover:underline">
                  +375 (29) 777-77-77
                </a>
              </li>
              <li>
                ✉️{" "}
                <a href="mailto:info@example.com" className="hover:underline">
                  info@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижний колонтитул с копирайтом */}
        <div className="border-t border-gray-200 mt-4 pt-2 lg:pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Мой проект. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
