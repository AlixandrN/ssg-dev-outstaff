export const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;

  return (
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
    window.innerWidth <= 768
  );
};

export const handleMobileFocus = (
  event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
) => {
  if (isMobileDevice()) {
    setTimeout(() => {
      const element = event.currentTarget;
      const elementTop = element.offsetTop;
      const scrollPosition = elementTop - 120;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }, 400);
  }
};
