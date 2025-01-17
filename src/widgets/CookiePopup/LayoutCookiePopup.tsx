'use client'
import { getCookie } from '@/shared/utils/getCookie';
import React, {  useState } from 'react';
import CookiePopup from './CookiePopup';

const LayoutCookiePopup = () => {
    const cookie = getCookie({name : "isAccepted"})
    const [isCookieAccepted, setCookieAccepted] = useState<boolean>(false)
    return (
        <>
            { cookie || isCookieAccepted ?  <> </> : <CookiePopup setCookieAccepted={setCookieAccepted} /> }
        </>

    );
};

export default LayoutCookiePopup;