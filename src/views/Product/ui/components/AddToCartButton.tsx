'use client'
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';

const AddToCartButton = () => {
    return (
        <OrderButton className="max-w-[240px] !bg-black">
        <p className="big-p font-bold">Добавить в корзину</p>
      </OrderButton>
    );
};

export default AddToCartButton;