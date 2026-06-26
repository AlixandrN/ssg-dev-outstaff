import {
  CUSTOMER_NAME_MIN_LENGTH,
  PHONE_MAX_LENGTH,
  PHONE_MIN_LENGTH,
  TCustomerData,
} from "@/lib/constants";
import { TCustomerErrors } from "./CustomerForm";

export const validateForm = (customerData: TCustomerData): TCustomerErrors => {
  const newErrors: TCustomerErrors = {};

  if (!customerData.name.trim()) {
    newErrors.name = "Имя обязательно для заполнения";
  } else if (customerData.name.length < CUSTOMER_NAME_MIN_LENGTH) {
    newErrors.name = `Имя должно содержать минимум ${CUSTOMER_NAME_MIN_LENGTH} символа`;
  }

  if (!customerData.phone?.trim()) {
    newErrors.phone = "Телефон обязателен для заполнения";
  } else {
    const cleanPhone = customerData.phone.replace(/\D/g, "");

    if (cleanPhone.length < PHONE_MIN_LENGTH) {
      newErrors.phone = `Введите корректный номер телефона с кодом оператора (минимум ${PHONE_MIN_LENGTH} цифр)`;
    } else if (cleanPhone.length > PHONE_MAX_LENGTH) {
      newErrors.phone = "Номер телефона слишком длинный";
    }
  }

  if (customerData.email && customerData.email.trim()) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerData.email)) {
      newErrors.email = "Введите корректный email адрес";
    }
  }

  // otional
  // if (!customerData.message.trim()) {
  //   newErrors.message = "Сообщение обязательно для заполнения";
  // } else if (customerData.message.length < 10) {
  //   newErrors.message = "Сообщение должно содержать минимум 10 символов";
  // }

  return newErrors;
};
