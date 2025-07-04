import { POST } from "@/shared/api/POST"
import { TypedeliveryMethod } from "../model/TypeDeliveryMethod"
import { fromLocation } from "@/shared/config/fromLocation"

interface IPostCourierPoint{
    onReject : () => void,
    code : number
}
async function postCourierPoint({code, onReject} : IPostCourierPoint) {
    const response = await POST<TypedeliveryMethod>({endpoint : "/calculator", data : {
                type : "1",
                currency : "1",
                tariff_code : "137",
                from_location: fromLocation,
                to_location: {
                    code: code
                },
                packages : [
                    {
                        height: 5,
                        length: 33,
                        weight: 500,
                        width: 24
                    }
                ]
            }, 
            headers: {
                "Content-Type": "application/json"
              },  
              onReject : onReject
            })
    return response

}
export default postCourierPoint