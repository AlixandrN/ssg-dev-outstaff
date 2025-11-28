import { TCustomerData } from "@/lib/constants";
import { TCustomerErrors } from "./CustomerForm";

export const validateForm = (customerData: TCustomerData): TCustomerErrors => {
  const newErrors: TCustomerErrors = {};

  if (!customerData.name.trim()) {
    newErrors.name = "Имя обязательно для заполнения";
  } else if (customerData.name.length < 2) {
    newErrors.name = "Имя должно содержать минимум 2 символа";
  }

  if (!customerData.email.trim()) {
    newErrors.email = "Email обязателен для заполнения";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerData.email)) {
    newErrors.email = "Введите корректный email адрес";
  }

  if (!customerData.message.trim()) {
    newErrors.message = "Сообщение обязательно для заполнения";
  } else if (customerData.message.length < 10) {
    newErrors.message = "Сообщение должно содержать минимум 10 символов";
  }

  return newErrors;
};
