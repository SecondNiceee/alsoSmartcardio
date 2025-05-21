'use client'
import { setLoginPopup, setRegistrationPopup } from '@/entities/auth/model/authSlice';
import CSSTransitionLoginForm from '@/features/Auth/ui/CSSTransitionLoginForm';
import CSSTransitionRegistrationForm from '@/features/Auth/ui/CSSTransitionRegistrationForm';
import { useAppDispatch, useAppSelector } from '@/shared/models/reduxHooks';
import React from 'react';

const LayoutAuthPopup = () => {
    const dispatch = useAppDispatch();
    const isRegistration = useAppSelector(state => state.authSlice.isRegistrationPopupOpened)
    const isLogin = useAppSelector(state => state.authSlice.isLoginPopupOpened)
    const setLogin = (value : boolean) => {
        dispatch(setLoginPopup(value))
    }
    const setRegistration = (value : boolean) => {
        dispatch(setRegistrationPopup(value))
    }
    return (
        <>
        {
            isRegistration ? 
            <CSSTransitionRegistrationForm isOpened = {isRegistration} setOpened={setRegistration} />
            :
            <CSSTransitionLoginForm isOpened = {isLogin} setOpened={setLogin} />
        }
        </>
    );
};

export default LayoutAuthPopup;