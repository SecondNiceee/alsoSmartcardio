import { device } from "@/shared/config/device"
import { deviceWithCase } from "@/shared/config/deviceWithCase"

export const getStoreOrderById = (id : number) => {
    return [device, deviceWithCase].find( (order) => order.id === id )    
}