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
        "Content-Type": "Application/json",
      },
      method: "POST",
      queryParams: {
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
