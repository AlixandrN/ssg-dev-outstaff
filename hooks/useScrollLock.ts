import { useEffect, RefObject } from "react";

export const useScrollLock = (
  ref: RefObject<HTMLElement>,
  isLocked: boolean = false
) => {
  useEffect(() => {
    if (!ref.current || !isLocked) return;
    const element = ref.current;

    const preventScroll = (event: Event) => {
      event.preventDefault();
    };

    element.addEventListener("wheel", preventScroll, { passive: false });
    element.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      element.removeEventListener("wheel", preventScroll);
      element.removeEventListener("touchmove", preventScroll);
    };
  }, [ref, isLocked]);
};
