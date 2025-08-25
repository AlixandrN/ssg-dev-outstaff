import React from "react";

export const Logo = ({ isScrolled }: { isScrolled?: boolean }) => {
  return (
    <div
      className={`font-bold transition-all duration-300 ${
        isScrolled ? "text-xl" : "text-2xl"
      }`}
    >
      SSG Brand
    </div>
  );
};
