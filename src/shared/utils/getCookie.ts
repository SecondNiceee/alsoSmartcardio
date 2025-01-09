import { TypeCookie } from "../models/TypeCookie";

interface IGetCookie{
    name : TypeCookie
}

export const getCookie = function({name} : IGetCookie) {
    if (typeof document === 'undefined') {
        return 0;
    }

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2){

        const part = parts.pop()
        if (part) {
            return part.split(';').shift();}
    }
    return 0
    
}