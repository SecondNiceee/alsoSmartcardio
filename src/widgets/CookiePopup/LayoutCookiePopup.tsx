'use client'
import { getCookie } from '@/shared/utils/getCookie';
import React, { useEffect, useState } from 'react';
import CookiePopup from './CookiePopup';
import { setCookie } from '@/shared/utils/setCookie';

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