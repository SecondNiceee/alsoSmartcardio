import { CustomHeaders, DataType, ParamsType } from "./models";
import axios, {GenericAbortSignal} from "axios";


interface IPost {
    endpoint : string,
    params? : ParamsType,
    headers? : CustomHeaders,
    signal? : GenericAbortSignal,
    onReject? : () => void
}

export const GET = async <T>( {
    endpoint,
    params = {},
    headers = { "Content-Type": 'application/json' },
    signal,
    onReject = () => {}
} : IPost ) => {
  try {
    const response = await axios.get<T>(`api${endpoint}` , {
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