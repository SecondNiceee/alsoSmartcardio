import { account, password } from "../config/constants";

import retryOperation from "../utils/retryOperation";
import { POST } from "./POST";

type TypeResponse = {
    access_token : string
}

export default async function authorize() {
    const response = await retryOperation(async () => {
      return await POST<TypeResponse>({
        endpoint: "/authorization",
        params: {
          "grant_type": "client_credentials",
          "client_id": account,
          "client_secret": password,
        },
        headers: {
          "Content-Type": 'application/json',
        },
        data: {},
      });
    });

  
    if (response) {
      return response.access_token;
    }
    // alert("Обновите, пожалуйста, страницу, что - то пошло не так.")
    console.warn("Access token was not given!")    
  }