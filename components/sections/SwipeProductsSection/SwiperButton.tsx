import React, { FC } from "react";

type ISwiperButton = {
  type: "prev" | "next";
  handleClick: VoidFunction;
};

export const SwiperButton: FC<ISwiperButton> = ({ type, handleClick }) => {
  return (
    <button
      className={`swiper-button-${type} absolute ${
        type === "prev" ? "left" : "right"
      }-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors border border-gray-200`}
      onClick={handleClick}
    >
      <svg
        className="w-3 h-3 md:w-4 md:h-4 text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={type === "prev" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );
};
