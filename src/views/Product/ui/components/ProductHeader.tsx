'use client'
import StrangeArrow from '@/shared/UI/NextPrevButtons/StrangeArrow';
import Cross from '@/shared/UI/ZoomSlider/Cross';
import { goBack } from '@/shared/utils/goBack';
import React from 'react';

const ProductHeader = () => {
    return (
        <header className="flex justify-between items-center p-2">
        <div
          onClick={goBack}
          className="flex items-center gap-2 cursor-pointer"
        >
          <StrangeArrow className="rotate-180" />
          <p className="p">Все товары</p>
        </div>
        <Cross
          onClick={goBack}
          classNames="w-[60px] h-[60px] cursor-pointer"
        />
      </header>
    );
};

export default ProductHeader;