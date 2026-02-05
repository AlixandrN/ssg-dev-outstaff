import { useEffect } from "react";

const iosDelay = 350;

export const useHandleMobileFocus = () => {
  useEffect(() => {
    const handleFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;

      if (target.matches("input, textarea")) {
        setTimeout(() => {
          // time to open keyboard
          const element = target;
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const visibleArea = windowHeight * 0.6; // the keyboard takes up 40% of the screen usually

          // If the element is overlapped by the keyboard, we calculate how much to scroll
          if (rect.bottom > visibleArea) {
            const scrollY = window.scrollY + (rect.bottom - visibleArea) + 20;
            window.scrollTo({
              top: scrollY,
              behavior: "smooth",
            });
          }
        }, iosDelay);
      }
    };

    // also handle window resizing (для iOS)
    const handleResize = () => {
      if (document.activeElement?.matches("input, textarea")) {
        setTimeout(() => {
          const activeElement = document.activeElement as HTMLElement;
          activeElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 100);
      }
    };

    document.addEventListener("focusin", handleFocus);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("focusin", handleFocus);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};
