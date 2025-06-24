import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  // Разрешаем только POST
  if (method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    // URL целевого сервиса
    const url = `${process.env.TELEGRAM_BACKEND_HOST}/telegram/send-message`;

    // Перенаправляем запрос
    const { name, phone } = req.body;

    console.log(name, phone);

    console.log(name, phone);

    if (!name || !phone) {
      return res.status(400).json({ error: "Missing name or phone" });
    }

    const changedBody = {
      chatId: process.env.CHATID,
      text: `
        Имя: ${name}
        Телефон: ${phone}
    `.trim(),
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changedBody),
    });

    // Читаем ответ от целевого сервера
    const data = await response.json();
  

    // Возвращаем клиенту
    res.status(response.status).json(data);
  } catch (error: any) {
    console.log("Proxy Error:", error.message || error);
    res.status(500).json({ error: "Failed to proxy request" });
  }
}
