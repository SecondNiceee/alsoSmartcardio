import { HOST } from "@/shared/config/constants";
import { NextApiRequest, NextApiResponse } from "next";
import { readToken } from "../../src/shared/utils/secureStorage";

type QueryParams = Record<string, string | string[]>;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const queryParams: QueryParams = req.query as QueryParams;

  const headers = Object.fromEntries(
    Object.entries(req.headers).map(([key, value]) => [key, String(value)])
  );


  try {
    const payload = await readToken();
    let token = null;
    if (payload)
       token = payload.access_token;
    const url = `${HOST}/v2/location/suggest/cities${Object.keys(queryParams).length ? `?${new URLSearchParams(queryParams as Record<string, string>)}` : ''}`;

    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...headers,
      },
    });


    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.log('API Error Response:', errorData);
      const err = await response.json().catch( () => {} );
      res.status(response.status).json(`data : ${response.statusText} ${JSON.stringify(err)}`)
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      res.status(200).json(data);
    } else {
      const text = await response.text();
      res.status(200).send(text);
    }
  } catch (error: any) {
    console.error('Handler Error:', error.message || error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}