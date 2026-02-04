import { useEffect, useRef } from "react";

export const usePreventViewportShift = () => {
  const originalViewport = useRef<string>("");
  const isClient = typeof window !== "undefined";

  useEffect(() => {
    if (!isClient) return;

    const inputs = document.querySelectorAll("input, textarea, select");

    const handleFocus = () => {
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      if (viewportMeta) {
        const currentContent = viewportMeta.getAttribute("content");
        originalViewport.current = currentContent ? currentContent : "";
        viewportMeta.setAttribute(
          "content",
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        );
      }
    };

    const handleBlur = () => {
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      if (viewportMeta && originalViewport.current !== "") {
        viewportMeta.setAttribute("content", originalViewport.current);
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", handleFocus as EventListener);
      input.addEventListener("blur", handleBlur as EventListener);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", handleFocus as EventListener);
        input.removeEventListener("blur", handleBlur as EventListener);
      });
    };
  }, [isClient]);
};
