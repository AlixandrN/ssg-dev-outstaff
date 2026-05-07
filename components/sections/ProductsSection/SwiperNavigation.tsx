type TSwiperNavigation = {
  onPrev: VoidFunction;
  onNext: VoidFunction;
  isBeginning: boolean;
  isEnd: boolean;
  className?: string;
};

export const SwiperNavigation = ({
  onPrev,
  onNext,
  isBeginning,
  isEnd,
  className = "",
}: TSwiperNavigation) => {
  const buttonBaseClasses = `
    absolute top-1/2 transform -translate-y-1/2 z-10
    w-8 h-8 md:w-10 md:h-10
    rounded-full flex items-center justify-center
    shadow-lg transition-colors duration-200
    border-0 outline-none cursor-pointer
    focus:outline-none focus:bg-gray-100
    active:border-none
    ${className}
  `;

  const activeButtonClasses = `
    bg-white/80 hover:bg-white
  `;

  const disableButtonClasses = `
    bg-gray-100/50 cursor-not-allowed opacity-40
  `;

  return (
    <>
      <button
        className={`
          ${buttonBaseClasses}
          ${isBeginning ? disableButtonClasses : activeButtonClasses}
          left-2 md:left-4
        `}
        onClick={onPrev}
        disabled={isBeginning}
        aria-label="Previous slide"
      >
        <svg
          className={`w-3 h-3 md:w-4 md:h-4 transform -translate-x-px ${
            isBeginning ? "text-gray-400" : "text-gray-800"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className={`
          ${buttonBaseClasses}
          ${isEnd ? disableButtonClasses : activeButtonClasses}
          right-2 md:right-4
        `}
        onClick={onNext}
        disabled={isEnd}
        aria-label="Next slide"
      >
        <svg
          className={`w-3 h-3 md:w-4 md:h-4 transform translate-x-px ${
            isEnd ? "text-gray-400" : "text-gray-800"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </>
  );
};
