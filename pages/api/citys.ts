import { HOST } from "@/shared/config/constants";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const queryParams: QueryParams = req.query as QueryParams;
  console.log('Method:', method);
  console.log('Query params:', queryParams);

  const headers = Object.fromEntries(
    Object.entries(req.headers).map(([key, value]) => [key, String(value)])
  );
  console.log('Headers:', headers);

  try {
    const url = `${HOST}/v2/location/suggest/cities${Object.keys(queryParams).length ? `?${new URLSearchParams(queryParams as Record<string, string>)}` : ''}`;
    console.log('Fetching URL:', url);

    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.log('API Error Response:', errorData);
      throw new Error(`HTTP error! status: ${response.status}, data: ${JSON.stringify(errorData)}`);
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