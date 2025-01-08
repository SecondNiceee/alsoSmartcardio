import { GET } from "@/shared/api/GET";
import { TypeOffice } from "../model/TypeOffice";

interface IGetOffices{
    region_code : number,
    token : string | null,

}
async function getOffices({region_code, token} : IGetOffices) {

    const offices = await GET<TypeOffice[]>({endpoint : "/offices", params : {
                    type : "PVZ",
                    country_code: 'RU',
                    region_code: region_code,
                    // is_handout : "1"
                },
                headers : {
                "Content-Type" : "Application/json",
                "Authorization" : `Bearer ${token}`,
    }})
    return offices
}
export default getOffices