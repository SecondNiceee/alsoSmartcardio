"use client"
import useGetAutorisation from '@/shared/api/useGetAutorisation';
import { useEffect } from 'react';


const StartApp = () => {
    useGetAutorisation()

    useEffect(  () => {
        // const cookie = getCookie({name : "device"})
        // console.log(cookie)
    } , [] )
    
    return null
};

export default StartApp;