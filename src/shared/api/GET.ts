import { CustomHeaders, DataType, ParamsType } from "./models";

interface IGet {
  endpoint: string;
  params?: ParamsType;
  headers?: CustomHeaders;
  signal?: AbortSignal;
  onReject?: () => void;
}

export const GET = async <T>({
  endpoint,
  params = {},
  headers = { "Content-Type": 'application/json' },
  signal,
  onReject = () => {}
}: IGet): Promise<T> => {
  console.warn("Вызов GET")
  try {
    // Проверка, что endpoint начинается с /
    if (!endpoint.startsWith('/')) {
      endpoint = `/${endpoint}`;
    }

    // Формирование URL с параметрами
    const queryString = new URLSearchParams(params as Record<string, string>).toString();
    const url = `/api${endpoint}${queryString ? `?${queryString}` : ''}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: headers as HeadersInit,
      signal,
    });

    if (!response.ok) {
      const message = await response.json().catch( () => {})
      throw new Error(message);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    onReject();
    throw error;
  }
};