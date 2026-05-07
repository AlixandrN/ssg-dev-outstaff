import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-2 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* BLOCK-1 ABOUT PROJECT */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Мой проект
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Краткое описание.
            </p>
          </div>

          {/* BLOCK-2 NAV */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Навигация
            </h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Главная
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Проекты
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* BLOCK-3 CONTACTS */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Контакты
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
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
        <div className="border-t border-gray-200 dark:border-gray-800 mt-4 pt-2 lg:pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {currentYear} Мой проект. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
