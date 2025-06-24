import { endpoints } from "@/shared/api/endpoints";
import { GET } from "@/shared/api/GET";
import { TypeStatus } from "@/shared/api/models";
import { getAccessToken } from "@/shared/utils/getAccessToken";
import  { SetStateAction, useCallback } from "react";
import axios from "axios";
import retryOperation from "@/shared/utils/retryOperation";


export type TypeSuggestion = {
    city_uuid : string,
    code : number,
    full_name : string,

}

interface IuseFetchYears{
    setFilteredSuggestions : React.Dispatch<SetStateAction<TypeSuggestion[]>>,
    fromEmpty : boolean,
    setFromEmpty : React.Dispatch<SetStateAction<boolean>>
    setFetchStatus : React.Dispatch<SetStateAction<TypeStatus>>
}
const useFetchYears = ({setFilteredSuggestions, fromEmpty, setFromEmpty, setFetchStatus} : IuseFetchYears ) => {
  const fetchYears = useCallback(async (value: string) => {
      
      const token = getAccessToken();

      setFetchStatus("pending")
      
      let error = false

      console.warn("Хэй хэй")

      const responses = await retryOperation(() => GET<TypeSuggestion[]>({
        endpoint: "/citys",
        headers: {
          "Content-Type": "application/json",
        },  
        params: {
          name: value,
          country_code : "RU"
        },
        onReject : () => {
          error = true
        }
      }) );



      if (!error){
        setFetchStatus("fulfilled")
      }
      else{
        setFetchStatus("rejected")
      }

      if (fromEmpty){
        setFromEmpty(false)
      }

      setFilteredSuggestions(responses)
      return responses;
      
  }, [fromEmpty, setFromEmpty]);
  return fetchYears
};

export default useFetchYears;
