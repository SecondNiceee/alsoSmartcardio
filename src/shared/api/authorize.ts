import { account, HOST, password } from "../config/constants";

import retryOperation from "../utils/retryOperation";
import { request } from "./request";

type TypeResponse = {
  access_token: string;
};

export default async function authorize() {
  const response = await retryOperation(async () => {
    return await request<TypeResponse>({

    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
    },
      method: "POST",
      queryParams: {
_: Date.now().toString(), // предотвращаем кэширование  
        grant_type: "client_credentials",
        client_id: account,
        client_secret: password,
      },
      url: `${HOST}/v2/oauth/token`,
      withCredentials: false,
      body: {},
    });
  });

  if (response) {
    return response.access_token;
  }
  // alert("Обновите, пожалуйста, страницу, что - то пошло не так.")
  console.warn("Access token was not given!");
}
