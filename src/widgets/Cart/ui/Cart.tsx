'use client'
import { useAppSelector } from '@/shared/models/reduxHooks';
import { BuyingPopup } from '@/widgets/BuyingPopup';
import Image from 'next/image';
import React, { useMemo, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Cart = () => {
    const orders = useAppSelector(state => state.cartSlice.orders)
    const ordersCounter = useMemo( () => {
        return orders[0].counter + orders[1].counter
    } , [orders] )

    const popupRef = useRef(null)

    const [isBuyingPopupOpened, setBuyingPopupOpened] = useState<boolean>(false)

    const openBuyingPopup = () => {
        setBuyingPopupOpened(true)
    }
    
    return (
        <>
            {ordersCounter &&  <div className='bg-[white]  cursor-pointer fixed right-[40px] top-[110px] z-40 rounded-[50%] white-shadow w-[100px] h-[100px]'>
                <div onClick={openBuyingPopup} className='relative w-[100%] h-[100%] flex items-center justify-center'>
                    <Image alt='#' src={"/images/cart.svg"} width={50} height={50} />
                    <div className="w-[34px] h-[34px] right-[3%] bottom-[0%] rounded-[50%] absolute lef flex justify-center items-center bg-red-500">
                        <p className='p text-white font-semibold'>
                            {ordersCounter}
                        </p>
                    </div>
                </div>
            </div>}
            <CSSTransition classNames={"zoom"} timeout={{enter : 50, exit : 400}} mountOnEnter unmountOnExit in = {isBuyingPopupOpened} nodeRef={popupRef}>
                <BuyingPopup ref = {popupRef} setState={setBuyingPopupOpened}  />
            </CSSTransition>
        </>
    );
};

export default Cart;