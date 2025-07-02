import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  // Разрешаем только GET
  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { code } = req.query;

  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: "Missing or invalid code" });
  }

  const url = `${process.env.PROMOCODE_BACKEND_HOST}/promocodes/findByCode?code=${encodeURIComponent(code)}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.X_API_KEY || ''
      },
    });
    const data = await response.json().catch(() => ({}));
    res.status(response.status).json(data);
  } catch (error: any) {
    console.log("Proxy Error:", error.message || error);
    res.status(500).json({ error: "Failed to proxy request" });
  }
}
