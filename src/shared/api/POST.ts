import { CustomHeaders, DataType, ParamsType } from "./models";

interface IPost {
  endpoint: string;
  params?: ParamsType;
  headers?: CustomHeaders;
  signal?: AbortSignal;
  data?: DataType;
  onReject?: () => void;
}

export const POST = async <T>({
  endpoint,
  params = {},
  headers = { "Content-Type": 'application/json' },
  signal,
  data,
  onReject = () => {}
}: IPost): Promise<T> => {
  try {
    // Проверка, что endpoint начинается с /
    if (!endpoint.startsWith('/')) {
      endpoint = `/${endpoint}`;
    }

    // Формирование URL с параметрами
    const queryString = new URLSearchParams(params as Record<string, string>).toString();
    const url = `/api${endpoint}${queryString ? `?${queryString}` : ''}`;
    console.log(url);

    const response = await fetch(url, {
      method: 'POST',
      headers: headers as HeadersInit,
      signal,
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error:', error);
    onReject();
    throw error;
  }
};