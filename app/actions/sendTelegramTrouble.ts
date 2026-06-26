import { LOGO, TCustomerData } from "@/lib/constants";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export const sendTelegramTrouble = async (
  customerName: TCustomerData["name"],
) => {
  const text = `
⚠️ New trouble from ${LOGO} APP
 An issue occurred while 
 sending a message from "${customerName}".
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
