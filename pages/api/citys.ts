import { HOST } from '@/shared/config/constants';
import { NextApiRequest, NextApiResponse } from 'next';

type QueryParams = Record<string, string | string[]>;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const queryParams: QueryParams = req.query as QueryParams;

  // Убедимся, что это не "ReadableStream", а обычные заголовки
  const headers: Record<string, string> = {};
  for (const [key, value] of Object.entries(req.headers)) {
    if (typeof value === 'string') {
      headers[key] = value;
    }
  }

  try {
    const queryString = Object.keys(queryParams).length
      ? `?${new URLSearchParams(queryParams as Record<string, string>)}`
      : '';

    const url = `${HOST}/v2/location/suggest/cities${queryString}`;

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: method !== 'GET' && method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });

    // Получаем тип контента из ответа внешнего сервера
    const contentType = response.headers.get('content-type');

    // Копируем все заголовки, кроме некоторых служебных
    const filteredHeaders = Object.fromEntries(
      [...response.headers].filter(([key]) => !['content-length', 'transfer-encoding'].includes(key))
    );

    // Пробрасываем оригинальный статус и заголовки
    res.status(response.status);
    res.setHeader(filteredHeaders);

    if (contentType?.includes('application/json')) {
      const data = await response.json();
      res.json(data);
    } else if (contentType?.includes('text/')) {
      const text = await response.text();
      res.send(text);
    } else {
      // Если тип неизвестен — просто потоком отправляем
      const buffer = await response.arrayBuffer();
      res.send(Buffer.from(buffer));
    }
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Internal Server Error', originalError: error });
  }
}