
'use client'
import { useTelegramPopup } from '@/shared/providers/TelegramProvider/TelegramProvider';
import Popup from '@/shared/UI/Popup/Popup';
import React, { useCallback, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import TelegramForm from './TelegramForm';

const TelegramPopup = () => {
    const popupRef = useRef(null);
    const {isTelegramPopup, setTelegramPopup} = useTelegramPopup();
    const closePopup = useCallback(() => {
        setTelegramPopup(false);
    },[setTelegramPopup])
    return (
        <CSSTransition nodeRef={popupRef} in = {isTelegramPopup} classNames={"zoom"} unmountOnExit mountOnEnter  timeout={{
            enter : 50,
            exit : 400
        }}>
            <Popup ref={popupRef} closePopup={closePopup}>
                <TelegramForm />
            </Popup>
        </CSSTransition>
    );
};

export default TelegramPopup;