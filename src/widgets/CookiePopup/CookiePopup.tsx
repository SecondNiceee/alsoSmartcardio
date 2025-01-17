import { setCookie } from '@/shared/utils/setCookie';
import React from 'react';

const CookiePopup = () => {
    const getAcceptionWithCookie = () => {
        setCookie({name : "isAccepted" , days : 360, value : 1})
    }
    return (
        <div className='flex fixed bg-[#000000] black-shadow rounded-2xl right-[15px] bottom-[15px] p-5 z-50 flex-col gap-3 items-center justify-center'>
            <h3 className='p text-white max-w-[265px] text-[16px] w-fit text-center font-semibold'>Мы используем файлы cookie, чтобы обеспечить максимальное удобство использования сайта.</h3>
            <button onClick={getAcceptionWithCookie} className='bg-white w-[100%] px-5 py-4 rounded-md justify-center items-center'>
                <p className='p leading-none text-[16px] font-bold !text-black text-center'>Принимаю</p>
            </button>
        </div>
    );
};

export default CookiePopup;