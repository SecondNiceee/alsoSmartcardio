'use client'
import { addOrder } from '@/entities/cart/model/cartSlice';
import { useAppDispatch } from '@/shared/models/reduxHooks';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React, { FC } from 'react';

interface IAddToCartButton{
    id : string
}
const AddToCartButton:FC<IAddToCartButton> = ({id}) => {
    const dispatch = useAppDispatch()
    const addOrderToCart = () => {
        dispatch(addOrder({id : Number(id)}))
    }
    return (
      <OrderButton onClick={addOrderToCart} className="max-w-[240px] !bg-black">
        <p className="big-p font-bold">Добавить в корзину</p>
      </OrderButton>
    );
};

export default AddToCartButton;