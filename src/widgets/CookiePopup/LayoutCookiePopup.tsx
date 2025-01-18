'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';


const CookiePopup = dynamic( () => import("./CookiePopup"), {ssr : false} )

const LayoutCookiePopup = () => {
    const [cookie, setCookie] = useState<number>(0)
    useEffect( () => {
        const importCookie = async () => {
            const {getCookie} = await import("../../shared/utils/getCookie")
            setCookie(getCookie({name : "isAccepted"}))
        }
        importCookie()
    } ) 
    const [isCookieAccepted, setCookieAccepted] = useState<boolean>(false)
    return (
        <>
            { cookie || isCookieAccepted ?  <> </> : <CookiePopup setCookieAccepted={setCookieAccepted} /> }
        </>

    );
};

export default LayoutCookiePopup;