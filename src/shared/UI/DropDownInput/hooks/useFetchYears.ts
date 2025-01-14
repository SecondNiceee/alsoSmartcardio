import { GET } from "@/shared/api/GET";
import { TypeStatus } from "@/shared/api/models";
import { getAccessToken } from "@/shared/utils/getAccessToken";
import retryWithToken from "@/shared/utils/retryWithToken";
import  { FC, SetStateAction, useCallback } from "react";


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
    const responses = await retryWithToken(async function getCitys() {
      const token = getAccessToken();

      setFetchStatus("pending")
      
      let error = false

      const responses = await GET({
        endpoint: "/citys",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },  
        params: {
          name: value,
          country_code : "RU"
        },
        onReject : () => {
          error = true
        }
      });

      if (!error){
        setFetchStatus("fulfilled")
      }
      else{
        setFetchStatus("rejected")
      }

      if (fromEmpty){
        setFromEmpty(false)
      }

      return responses;

    });

    setFilteredSuggestions(responses)
  }, [fromEmpty, setFromEmpty]);
  return fetchYears
};

export default useFetchYears;
