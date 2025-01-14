'use client'
import StrangeArrow from '@/shared/UI/NextPrevButtons/StrangeArrow';
import { goBack } from '@/shared/utils/goBack';
import React from 'react';

const BackToMainPage = () => {
    return (
    <div  onClick={goBack} className='flex items-center gap-1 cursor-pointer'>
        <StrangeArrow color='white' className='w-[50px] rotate-180' />
        <p className='p text-white'>Вернуться на главную</p>
    </div>
    );
};

export default BackToMainPage;