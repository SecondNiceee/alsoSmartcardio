import { TypeDeliverName } from "../models/TypeDeliverName"

type TypeDeliverCode = {
    [key in TypeDeliverName] : number
}
export const deliverCode:TypeDeliverCode = {
    "PVZ" : 136,
    "COURIER" : 137,
    "POSTMAT" : 368
}