import { setOrdersFromCookie } from '@/entities/cart/model/cartSlice';
import { useAppDispatch } from '@/shared/models/reduxHooks';
import  { useEffect } from 'react';

const ClientStartApp = () => {
    const dispatch = useAppDispatch()
    useEffect( () => {
        dispatch(setOrdersFromCookie())
    } )
    return (
        null
    );
};

export default ClientStartApp;