import { useEffect, useRef } from "react";

const iosDelay = 350;

export const useHandleMobileFocus = () => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;

      if (target.matches("input, textarea")) {
        setTimeout(() => {
          const element = target;
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const visibleArea = windowHeight * 0.6;

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

    // Обработчик resize с фиксом границ
    const handleResize = () => {
      // Прокрутка к активному элементу
      if (document.activeElement?.matches("input, textarea")) {
        setTimeout(() => {
          const activeElement = document.activeElement as HTMLElement;
          activeElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 100);
      }

      // Простой фикс фантомных границ
      if (timerRef.current) clearTimeout(timerRef.current);
      
      // Временно упрощаем все границы
      document.querySelectorAll('input, textarea').forEach(el => {
        (el as HTMLElement).style.border = '1px solid #d1d5db';
      });
      
      // Восстанавливаем через 100ms
      timerRef.current = setTimeout(() => {
        document.querySelectorAll('input, textarea').forEach(el => {
          (el as HTMLElement).style.border = '';
        });
      }, 100);
    };

    document.addEventListener("focusin", handleFocus);
    window.addEventListener("resize", handleResize);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      document.removeEventListener("focusin", handleFocus);
      window.removeEventListener("resize", handleResize);
      
      // Восстанавливаем границы
      document.querySelectorAll('input, textarea').forEach(el => {
        (el as HTMLElement).style.border = '';
      });
    };
  }, []);
};