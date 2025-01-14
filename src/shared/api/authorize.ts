import { account, password } from "../config/constants";
import { removeAccessToken } from "../utils/removeAccessToken";
import retryOperation from "../utils/retryOperation";
import { saveAccessToken } from "../utils/saveAccesToken";
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
      removeAccessToken()
      saveAccessToken(response.access_token)
      return response.access_token;
    }
    alert("Обновите, пожалуйста, страницу, что - то пошло не так.")
    throw new Error("Access token was not given!");
    
  }