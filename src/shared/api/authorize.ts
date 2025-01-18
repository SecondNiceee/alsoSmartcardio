import { account, password } from "../config/constants";
import { removeAccessToken } from "../utils/removeAccessToken";
import retryOperation from "../utils/retryOperation";
import { saveAccessToken } from "../utils/saveAccesToken";
import { endpoints } from "./endpoints";
import { POST } from "./POST";

type TypeResponse = {
    access_token : string
}

export default async function authorize() {
    const response = await retryOperation(async () => {
      return await POST<TypeResponse>({
        endpoint: endpoints.autorization,
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

    console.log(response)
  
    if (response) {
      console.log(response.access_token)
      return response.access_token;
    }
    // alert("Обновите, пожалуйста, страницу, что - то пошло не так.")
    console.warn("Access token was not given!")    
  }