'use client'
import { setCartPopup } from '@/entities/cart/model/cartSlice';
import { useAppDispatch} from '@/shared/models/reduxHooks';
import React from 'react';


interface ICart{
    ordersCounter : number
}
export const Cart = ({ordersCounter} : ICart) => {

    const dispatch = useAppDispatch()

    const openBuyingPopup = () => {
        dispatch(setCartPopup(true))
    }
    
    return (
        <>
            <div className='bg-[white] opacity-75  sm:border-none  border-solid border-black border-[1px] md:opacity-100 md:scale-100 sm:scale-75 scale-[0.6] cursor-pointer fixed right-[0px] top-[40px] sm:right-[20px] sm:top-[40px] md:right-[40px] md:top-[110px] z-40 rounded-[50%] white-shadow w-[100px] h-[100px]'>
                <div onClick={openBuyingPopup} className='relative w-[100%] h-[100%] flex items-center justify-center'>
                    <img className='w-[50px] h-[50px]' alt='Измерение ЭКГ' src={"/images/cart.svg"}/>
                    <div className="w-[34px] h-[34px] right-[3%] bottom-[0%] rounded-[50%] absolute lef flex justify-center items-center bg-red-500">
                        <p className='p text-white font-semibold'>
                            {ordersCounter}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
Cart.displayName = "Cart";
