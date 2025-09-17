import { LANGUAGE_LIST, TLanguage } from "@/lib/constants";

export const LanguageDropdown = ({
  language,
  changeLanguage,
}: {
  language: TLanguage;
  changeLanguage: (selectedLanguage: TLanguage) => void;
}) => {
  return (
    <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32 z-50">
      {LANGUAGE_LIST.map((item) => (
        <li className="text-neutral hover:text-info-content" key={item.id}>
          <button onClick={() => changeLanguage(item.id)}>
            <span className="flex-1 text-left">{item.label}</span>
            {language === item.id && (
              <svg
                className="w-4 h-4 text-success"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>
        </li>
      ))}
    </ul>
  );
};
