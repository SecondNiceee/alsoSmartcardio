import { deviceWithCase } from "@/shared/config/deviceWithCase"

export const getDeviceWithPackage = function(comment : string){
    return {
        number : "smwc-001",
        weight : deviceWithCase.weight,
        length : deviceWithCase.length,
        width : deviceWithCase.width,
        height : deviceWithCase.height,
        comment : comment,
        items : [{
            name : deviceWithCase.name,
            ware_key : "00055",
            payment : {
            value : deviceWithCase.price,
            vat_sum : 0,
            vat_rate : 0,
            },
            cost : deviceWithCase.realPrice,
            weight : deviceWithCase.weight,
            amount : 1
        }],
    }
}