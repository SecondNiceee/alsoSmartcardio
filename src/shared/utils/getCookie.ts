'use client'
import { TypeCookie } from "../models/TypeCookie";

interface IGetCookie{
    name : TypeCookie
}

export const getCookie = function({name} : IGetCookie) {
    
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2){

        const part = parts.pop()

        if (part) {
            const shiftedPart = part.split(';').shift()
            if (shiftedPart){
                return Number(shiftedPart)
            }
        }
    }

    return 0

}