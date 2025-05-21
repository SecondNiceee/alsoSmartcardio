'use client'
import React, { Dispatch, FC, SetStateAction, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import RegistrationForm from './RegistrationForm';
import Popup from '@/shared/UI/Popup/Popup';

interface ICSSTransitionRegistrationForm{
    isOpened : boolean,
    setOpened : Dispatch<SetStateAction<boolean>> | ((value:boolean) => void);
}
const CSSTransitionRegistrationForm:FC<ICSSTransitionRegistrationForm> = ({isOpened,setOpened}) => {
    const ref = useRef(null);
    return (
        <CSSTransition nodeRef={ref} in = {isOpened} unmountOnExit mountOnEnter timeout={0} >
            <Popup closePopup={() => {setOpened(false)}} ref={ref}>
                <RegistrationForm />
            </Popup>
        </CSSTransition>
    );
};

export default CSSTransitionRegistrationForm;