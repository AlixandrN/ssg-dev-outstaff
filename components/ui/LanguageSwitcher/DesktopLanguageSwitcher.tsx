"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import i18n from "@/lib/i18n/config";
import { TLanguage } from "@/lib/constants";
import { LanguageDropdown } from "./LanguageDropdown";

export const DesktopLanguageSwitcher = () => {
  const dropdownRef = useRef<HTMLDetailsElement>(null);
  const [language, setLanguage] = useState<TLanguage>(
    i18n.language as TLanguage
  );

  const changeLanguage = (selectedLanguage: TLanguage) => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    if (dropdownRef.current) {
      dropdownRef.current.open = false;
    }
  };

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        dropdownRef.current.open = false;
      }
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, []);

  return (
    <details ref={dropdownRef} className="dropdown dropdown-end">
      <summary className="ml-1 btn btn-ghost btn-circle cursor-pointer hover:text-info-content">
        <Image
          src={"/language_icon.svg"}
          alt="language_icon"
          width={18}
          height={18}
          priority
          className="opacity-40"
        />
      </summary>

      <LanguageDropdown language={language} changeLanguage={changeLanguage} />
    </details>
  );
};
