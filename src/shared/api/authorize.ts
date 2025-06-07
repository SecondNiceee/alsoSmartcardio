
import retryOperation from "../utils/retryOperation";
import { POST } from "./POST";

type TypeResponse = {
    access_token : string
}

export default async function authorize() {
    const response = await POST<TypeResponse>({
        endpoint: "/authorization",
        data: {}
    })
      

    if (response) {
      return response.access_token;
    }
    // alert("Обновите, пожалуйста, страницу, что - то пошло не так.")
    console.warn("Access token was not given!")    
  }