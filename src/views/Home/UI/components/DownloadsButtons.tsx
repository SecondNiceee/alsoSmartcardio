'use client'
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import ResponsePopup from '@/widgets/ResponsePopup/ResponsePopup';
import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const DownloadsButtons = () => {
  const [responsePopup, setResponsePopup] = useState<boolean>(false)
  const popupRef = useRef<HTMLFormElement>(null)
    return (
      <>
      
        <div className="downloads__instructions">
          <OrderButton externalLink="/videos/iphone_manual.mp4" externalProps={{"download" : true}} className="instruction-apple cursor-pointer">
              <p>Инструкция для пользователей Apple</p>
            </OrderButton>
          <OrderButton onClick={() => setResponsePopup(true)} className="instruction-assistance cursor-pointer">
            <p>Служба поддержки / отзыв</p>
          </OrderButton>
        </div>
      <CSSTransition nodeRef={popupRef} in = {responsePopup} timeout={{ enter:300, exit : 0}} unmountOnExit mountOnEnter>
          <ResponsePopup setPopup={setResponsePopup} ref={popupRef} />
      </CSSTransition>
      </>  
    );
};

export default DownloadsButtons;