import { device } from "@/shared/config/device"


export const getDevicePackage = function(comment : string) {
    return {
            number : "sm-001",
            weight : device.weight,
            length : device.length,
            width : device.width,
            height : device.height,
            comment : comment,
            items : [{
            name : device.name,
            ware_key : "00055",
            payment : {
                value : device.price,
                vat_sum : 0,
                vat_rate : 0,
            },
            cost : device.price,
            weight : device.weight,
            amount : 1
            }],
    }
}