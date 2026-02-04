"use client";

import { FormEvent, useState, useEffect, useCallback } from "react";
import { ButtonIcon } from "../ui/buttons/ButtonIcon";
import { InputLabel } from "./InputLabel";
import { validateForm } from "./validateForm";
import { TCustomerData } from "@/lib/constants";
import { useCustomerForm } from "@/hooks/useCustomerForm";

export type TCustomerErrors = Partial<TCustomerData>;

export const CustomerForm = () => {
  const [customerData, setCustomerData] = useState<TCustomerData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<TCustomerErrors>({});
  const { isPending, handleCustomer } = useCustomerForm();

  // Хук для обработки скролла при фокусе на мобильных
  useEffect(() => {
    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;

      if (target.matches("input, textarea")) {
        // Даем время на открытие клавиатуры
        setTimeout(() => {
          const element = target;
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Вычисляем видимую область (экран минус клавиатура)
          // Клавиатура обычно занимает 40-50% экрана
          const visibleArea = windowHeight * 0.6;

          // Если элемент перекрывается клавиатурой
          if (rect.bottom > visibleArea) {
            // Вычисляем на сколько нужно прокрутить
            const scrollY = window.scrollY + (rect.bottom - visibleArea) + 20;

            window.scrollTo({
              top: scrollY,
              behavior: "smooth",
            });
          }
        }, 350); // Задержка для iOS
      }
    };

    // Также обрабатываем изменение размера окна (для iOS)
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

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validateErrors = validateForm(customerData);
    if (Object.keys(validateErrors).length) {
      setErrors(validateErrors);
      return;
    }
    handleCustomer(customerData);
  };

  const handleData = (value: string, id: keyof TCustomerData) => {
    setCustomerData({ ...customerData, [id]: value });
    if (errors[id]) {
      setErrors({ ...errors, [id]: undefined });
    }
  };

  // Функция для обработки фокуса на конкретном инпуте
  const handleInputFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      // Проверяем мобильное устройство
      const isMobile =
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
        window.innerWidth <= 768;

      if (isMobile) {
        setTimeout(() => {
          const element = e.currentTarget;

          // Прокручиваем так, чтобы элемент был в верхней части видимой области
          const elementTop = element.offsetTop;
          const scrollPosition = elementTop - 120; // Отступ 120px сверху

          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }, 400); // Увеличенная задержка для надежности
      }
    },
    [],
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md p-6 bg-white md:rounded-lg shadow-md w-full md:w-auto h-[calc(100vh-200px)] md:h-auto"
      noValidate
      aria-labelledby="form-title"
      aria-describedby="form-description"
      // Добавляем обработчик клика для закрытия клавиатуры при тапе вне инпута
      onClick={(e) => {
        if (
          (e.target as HTMLElement).tagName !== "INPUT" &&
          (e.target as HTMLElement).tagName !== "TEXTAREA"
        ) {
          (document.activeElement as HTMLElement)?.blur();
        }
      }}
    >
      <h1 id="form-title" className="text-xl font-bold mb-2 text-gray-800">
        Форма обратной связи
      </h1>
      <InputLabel
        id="name"
        value={customerData.name}
        label="Полное имя *"
        setValue={handleData}
        errorMessage={errors.name}
        onFocus={handleInputFocus}
      />
      <InputLabel
        id="email"
        value={customerData.email}
        label="Email адрес *"
        setValue={handleData}
        errorMessage={errors.email}
        onFocus={handleInputFocus}
      />
      <InputLabel
        id="message"
        value={customerData.message}
        label="Ваше сообщение *"
        setValue={handleData}
        errorMessage={errors.message}
        isTextareaMode
        onFocus={handleInputFocus}
      />
      <ButtonIcon
        type="submit"
        label={"Send Message"}
        icon={"arrow-right"}
        className="w-full mt-6"
        isSubmitting={isPending}
      />

      {/* CSS для мобильных устройств */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* Убедимся, что инпуты имеют правильный размер шрифта для iOS */
          input,
          textarea {
            font-size: 16px !important;
          }

          /* Добавим отступ снизу для формы, чтобы кнопка не перекрывалась клавиатурой */
          form {
            padding-bottom: env(safe-area-inset-bottom, 20px);
          }

          /* Для textarea делаем возможность скролла внутри */
          textarea {
            max-height: 200px;
            min-height: 100px;
            resize: vertical;
          }
        }

        /* Для очень маленьких экранов */
        @media (max-height: 700px) {
          form {
            height: auto !important;
            min-height: calc(100vh - 200px);
          }
        }
      `}</style>
    </form>
  );
};
