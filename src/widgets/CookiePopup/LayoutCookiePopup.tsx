'use client'
import { getCookie } from '@/shared/utils/getCookie';
import React, { useEffect } from 'react';
import CookiePopup from './CookiePopup';

const LayoutCookiePopup = () => {
    const cookie = getCookie({name : "isAccepted"})
    return (
        <>
            {cookie ? <CookiePopup /> : <> </>}
        </>

    );
};

export default LayoutCookiePopup;