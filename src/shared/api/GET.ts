import { CustomHeaders, DataType, ParamsType } from "./models";
import { GenericAbortSignal } from "axios";

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
      method: 'GET',
      headers: headers as HeadersInit,
      signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    onReject();
    throw error;
  }
};