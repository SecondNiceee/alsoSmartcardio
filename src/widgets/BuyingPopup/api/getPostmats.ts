import { GET } from "@/shared/api/GET";
import { TypeOffice } from "../model/TypeOffice";

interface IGetOffices{
    region_code : number,

}
async function getPostmats({region_code} : IGetOffices) {

    const postmat = await GET<TypeOffice[]>({endpoint : "/offices", params : {
                    type : "POSTAMAT",
                    country_code: 'RU',
                    region_code: region_code,
                    is_handout : "1"
                },
                headers : {
                "Content-Type" : "Application/json"
    }})
    if (postmat)
    return postmat
else return []
}
export default getPostmats