import { POST } from "@/shared/api/POST"
import { TypedeliveryMethod } from "../model/TypeDeliveryMethod"
import { fromLocation } from "@/shared/config/fromLocation"

interface IPostDeliveryPoint{
    code : number,
    onReject : () => void,
    token : string | null
}
async function postDeliveryPoint({code, onReject, token} : IPostDeliveryPoint) {
    const deliveryPoint = await POST<TypedeliveryMethod>({endpoint : "/calculator", data : {
        type : "1",
        currency : "1",
        tariff_code : "136",
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
    onReject : onReject,
    headers: {
        "Content-Type": "application/json"
        },  
    })
    return deliveryPoint
}
export default postDeliveryPoint;