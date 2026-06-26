import { LOGO, TCustomerData } from "@/lib/constants";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export const sendTelegramNotification = async (formData: TCustomerData) => {
  const { topic, name, phone, email, message } = formData;
  const text = `
📬 New message from ${LOGO} APP
 Topic: ${topic}
👤 Name: ${name}
📱 Phone: ${phone}
📧 Email: ${email || "no email"} 
💬 Message: ${message || "no message"} 
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
    throw new Error("telegram request error");
  }

  return await response.json();
};
