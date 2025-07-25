'use client'
import { addOrder, removeAllOrders, setCartPopup } from '@/entities/cart/model/cartSlice';
import { useAppDispatch } from '@/shared/models/reduxHooks';
import React, { FC } from 'react';

type IStoreOrder = {
    image : string,
    name : string,
    price : number,
    hoverImage : string,
    id : number
}

const StoreOrder:FC<IStoreOrder> = ({name, price, image, hoverImage, id}) => {

    const dispatch = useAppDispatch();
    const clickHandler = () => {
        dispatch(removeAllOrders({id : 1}))
        dispatch(removeAllOrders({id : 2}))
        dispatch(addOrder({id : Number(id)}))
        dispatch(setCartPopup(true));
    }
    return (
        <div onClick={clickHandler} className='flex hover:scale-105 transition-transform duration-300 white-shadow border-solid border-black border-1 rounded-lg flex-col gap-2 items-center cursor-pointer'>
            <div className='relative w-[100%]'>
                <img className='aspect-square transition-opacity duration-300 rounded-md object-cover w-[100%] relative z-30 hover:opacity-0' alt='Смарткардио' src={image}  />
                <img className='aspect-square rounded-md object-cover w-[100%] absolute left-0 top-0 h-[100%] z-20' alt='Измерение экг' src={hoverImage}  />
            </div>
            <div className='flex flex-col gap-2 items-center p-4 pt-0'>
                <p dangerouslySetInnerHTML={{__html : name}} className='big-p !font-medium'></p>
                {/* <p className='p'>{description}</p> */}
                <p className='big-p !font-medium'>{price} p</p>
            </div>
        </div>
    );
};

export default React.memo(StoreOrder);