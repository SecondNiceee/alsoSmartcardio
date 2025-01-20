import { HOST } from "../config/constants";
import { CustomHeaders, DataType, ParamsType } from "./models";
import { GenericAbortSignal } from "axios";

interface IPost {
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
}: IPost): Promise<T> => {
  try {
    const queryString = new URLSearchParams(params as Record<string, string>).toString();
    const response = await fetch(`${HOST}${endpoint}?${queryString}`, {
      method: 'GET',
      headers: headers as HeadersInit,
      signal: signal?.aborted ? undefined : signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    onReject();
    throw error;
  }
};