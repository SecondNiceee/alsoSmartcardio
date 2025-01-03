import { GET } from "@/shared/api/GET";
import { getAccessToken } from "@/shared/utils/getAccessToken";
import retryWithToken from "@/shared/utils/retryWithToken";
import  { FC, SetStateAction, useCallback } from "react";


export type TypeSuggestion = {
    cuty_uuid : string,
    code : number,
    full_name : string,

}

interface IuseFetchYears{
    setFilteredSuggestions : React.Dispatch<SetStateAction<TypeSuggestion[]>>,
    setLoading : React.Dispatch<SetStateAction<boolean>>,
    fromEmpty : boolean,
    setFromEmpty : React.Dispatch<SetStateAction<boolean>>
}
const useFetchYears = ({setFilteredSuggestions,  setLoading, fromEmpty, setFromEmpty} : IuseFetchYears ) => {
  const fetchYears = useCallback(async (value: string) => {
    const responses = await retryWithToken(async function getCitys() {
      const token = getAccessToken();

      setLoading(true)

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
      });

      setLoading(false)
      if (fromEmpty){
        setFromEmpty(false)
      }

      return responses;
    });
    console.log(responses)
    setFilteredSuggestions(responses)
  }, [setLoading, fromEmpty, setFromEmpty]);
  return fetchYears
};

export default useFetchYears;
