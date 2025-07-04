import { GET } from "@/shared/api/GET";
import { TypeStatus } from "@/shared/api/models";
import  { SetStateAction, useCallback } from "react";
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
    
      setFetchStatus("pending")
      
      let error = false


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
      
  }, [fromEmpty, setFromEmpty, setFetchStatus, setFilteredSuggestions]);
  return fetchYears
};

export default useFetchYears;
