import { HOST } from '@/shared/config/constants';
import { NextApiRequest, NextApiResponse } from 'next';

type QueryParams = Record<string, string | string[]>;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const requestBody = req.body;
  const queryParams: QueryParams = req.query as QueryParams;

  const headers = Object.fromEntries(
    Object.entries(req.headers).map(([key, value]) => [key, String(value)])
  );

  console.log(HOST)
  try {
    const response = await fetch(
      `${HOST}/v2/location/cities${Object.keys(queryParams).length ? `?${new URLSearchParams(queryParams as Record<string, string>)}` : ''}`,
      {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      }
    );


    // Логирование ответа для отладки


    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      const text = await response.text();
      res.status(200).send(text);
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


