"use client";
import { useState, useEffect } from "react";
import { useScroll } from "@/hooks/useScroll";
import { Logo } from "./Logo";
import { NavDesktop } from "./NavDesktop";
import { BurgerButton } from "./BurgerButton";
import { NavMobile } from "./NavMobile";
import { DesktopLanguageSwitcher } from "../ui/LanguageSwitcher/DesktopLanguageSwitcher";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScroll(80);

  // Scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleBurgerMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const removeBurgerMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`
        fixed top-0 w-full transition-all duration-500 z-50
        ${
          isScrolled
            ? "backdrop-blur-sm shadow-lg py-3"
            : "bg-gradient-to-r from-primary to-secondary-dark text-primary-content h-[100px] flex items-center justify-center"
        }
        ${isMobileMenuOpen ? "bg-primary text-primary-content" : ""}
      `}
      >
        <div className="container px-4">
          <div className="flex items-center justify-between">
            <Logo isScrolled={isScrolled} />
            <div className="flex items-center justify-between">
              <NavDesktop />
              <DesktopLanguageSwitcher />
              <BurgerButton
                toggleBurgerMenu={toggleBurgerMenu}
                isBurgerMenuOpen={isMobileMenuOpen}
              />
            </div>
          </div>
        </div>
        <NavMobile
          removeBurgerMenu={removeBurgerMenu}
          isBurgerMenuOpen={isMobileMenuOpen}
        />
      </header>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};
