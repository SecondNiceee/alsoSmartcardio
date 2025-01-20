"use client"
import { saveAccessToken } from "@/shared/utils/saveAccesToken";
import {  FC, useEffect } from "react";


interface IStartApp {
    acessToken : string
}
const StartApp:FC<IStartApp> = ({acessToken}) => {
    useEffect( () => {
        saveAccessToken(acessToken)
    } , [] )
    
    return null
};

export default StartApp;