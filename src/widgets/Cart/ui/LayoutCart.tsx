'use client'
import React, { useEffect, useMemo, useRef } from 'react';
import {Cart} from './Cart';
import { CSSTransition } from 'react-transition-group';
import { useAppDispatch, useAppSelector } from '@/shared/models/reduxHooks';
import { setCartButton } from '@/entities/cart/model/cartSlice';

export const LayoutCart = () => {
    const isCartShowed = useAppSelector(state => state.cartSlice.isCartButtonOpened)

    const dispatch = useAppDispatch()

    const popupRef = useRef(null)

    const orders = useAppSelector(state => state.cartSlice.orders)

    const ordersCounter = useMemo( () => {
        return orders[0].counter + orders[1].counter
    } , [orders] )
    
    useEffect( () => {
        if (ordersCounter === 0){
            dispatch(setCartButton(false))
        }
        else{
            dispatch(setCartButton(true))
        }
    } , [ordersCounter, dispatch] )

    return (
        <CSSTransition
        classNames={"zoom"}
        timeout={{ enter: 50, exit: 400 }}
        mountOnEnter
        unmountOnExit
        in={isCartShowed}
        nodeRef={popupRef}
      >
        <Cart ordersCounter={ordersCounter} ref={popupRef} />
      </CSSTransition>
    );
};

