import { TCustomerData } from "@/lib/constants";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export const sendTelegramNotification = async (formData: TCustomerData) => {
  const text = `
📬 New message from App

👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
📧 Email: ${formData.email || "no email"} 
💬 Message: ${formData.message || "no message"} 
🕐 Time: ${new Date().toLocaleString("ru-RU")}
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
