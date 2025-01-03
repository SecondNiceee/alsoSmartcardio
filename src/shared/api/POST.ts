import { CustomHeaders, DataType, ParamsType } from "./models";
import axios, {GenericAbortSignal} from "axios";


interface IPost {
    endpoint : string,
    params? : ParamsType,
    headers? : CustomHeaders,
    signal? : GenericAbortSignal,
    data? : DataType,
    onReject? : () => void
}
export const POST = async <T>( {
    endpoint,
    params = {},
    headers = { "Content-Type": 'application/json' },
    signal,
    data,
    onReject = () => {}
} : IPost ) => {
  try {
    const response = await axios.post<T>(`api${endpoint}`, data , {
        params,
        headers,
        signal
      });
    return response.data;
  } catch (error) {
    console.log(error)
    onReject()
  }
};