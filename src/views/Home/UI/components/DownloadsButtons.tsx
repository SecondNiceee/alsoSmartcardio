'use client'
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';

const DownloadsButtons = () => {
    return (
        <div className="downloads__instructions">
          <OrderButton externalLink="/videos/iphone_manual.mp4" externalProps={{"download" : true}} className="instruction-apple cursor-pointer">
              <p>Инструкция для пользователей Apple</p>
            </OrderButton>
          <OrderButton externalLink="mailto:someone@example.com" className="instruction-assistance cursor-pointer">
            <p>Служба поддержки</p>
          </OrderButton>
          </div>
    );
};

export default DownloadsButtons;