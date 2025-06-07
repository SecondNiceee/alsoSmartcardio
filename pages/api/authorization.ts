// pages/api/oauth/token.ts

import { HOST, account, password } from '@/shared/config/constants';
import { NextApiRequest, NextApiResponse } from 'next';

let cachedToken: string | null = null;
let tokenExpiryTime: number = 0;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const now = Date.now();

  // Если токен ещё жив — возвращаем его
  if (cachedToken && now < tokenExpiryTime) {
    return res.status(200).json({ access_token: cachedToken });
  }

  try {
    // Формируем query-параметры
    const searchParams = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: account,
      client_secret: password,
    });

    // Отправляем POST-запрос, но с параметрами в URL, а не в теле
    const response = await fetch(`${HOST}/v2/oauth/token?${searchParams}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}), // можно оставить пустое тело
    });

    if (!response.ok) {
        let errorMessage = `OAuth error: ${response.status} ${response.statusText}`;
        res.status(response.status).json(errorMessage);

    }

    const data = await response.json();

    if (!data.access_token) {
      throw new Error('No access_token in OAuth2 response');
    }

    // Обновляем кэш
    cachedToken = data.access_token;
    const expiresInMs = (data.expires_in || 3600) * 1000; // по умолчанию 1 час
    tokenExpiryTime = now + expiresInMs;

    res.status(200).json({ access_token: cachedToken });
  } catch (error) {
    console.error('Error fetching token:', error);
    res.status(500).json({ error: 'Failed to get access token' });
  }
}