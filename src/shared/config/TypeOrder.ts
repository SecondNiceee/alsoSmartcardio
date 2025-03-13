import { TypeCookie } from "../models/TypeCookie"

export type TypeOrder = {
    id : number,
    name : string,
    description : string,
    price : number,
    weight : number,
    realPrice : number,
    height : number,
    width : number,
    length : number
    images : string[],
    value : TypeCookie
}