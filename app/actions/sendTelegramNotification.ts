import { TCustomerData } from "@/lib/constants";

// to do ( в .env!)
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export const sendTelegramNotification = async (formData: TCustomerData) => {
  const text = `
📬 Новая заявка с сайта!

👤 Имя: ${formData.name}
📧 Email: ${formData.email}
💬 Сообщение: ${formData.message}
🕐 Время: ${new Date().toLocaleString("ru-RU")}
  `;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
      parse_mode: "HTML",
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка отправки уведомления");
  }

  return await response.json();
};
