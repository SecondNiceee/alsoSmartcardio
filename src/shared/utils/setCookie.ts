'use client'
import { TypeCookie } from "../models/TypeCookie";

interface ISetCookie{
    name : TypeCookie,
    value : number,
    days : number
}

export const setCookie = function({name, value, days} : ISetCookie) {

    // if (typeof document === 'undefined') {
    //     return 0;
    // }

    // const date = new Date();
    // date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    // const expires = "expires=" + date.toUTCString();
    // document.cookie = name + "=" + value + ";" + expires + ";path=/";

}
