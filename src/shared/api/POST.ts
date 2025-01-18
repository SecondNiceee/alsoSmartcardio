import { HOST } from "../config/constants";
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
    console.log(`/api${endpoint}`);
    console.log(HOST);

    const url = new URL(`${HOST}${endpoint}`);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: headers as HeadersInit,
      signal,
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.log(error);
    onReject();
    throw error;
  }
};