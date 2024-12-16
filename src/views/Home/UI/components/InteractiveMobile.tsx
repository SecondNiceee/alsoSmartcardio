import Image from 'next/image';
import React, { FC } from 'react';
import InteractiveButtons from './InteractiveButtons';


export interface IInteractiveMobile{
    openZoom : () => void,
    openPopup : () => void
}
const InteractiveMobile:FC<IInteractiveMobile> = ({openZoom, openPopup}) => {
    return (
        <div className="mobile">
        <div className="container">
            <header className='interactive__m-header'>
                СмартКардио - полностью беспроводной карманный прибор для мониторинга вашего здоровья
            </header>
            <div className="interactive__m-main relative z-30 bg-white">
                <InteractiveButtons openPopup={openPopup} openZoom={openZoom} />
                <Image className='interactive__m-image' alt='#' width={400} height={400} src={"/images/interactive.png"} />
            </div>
        </div>
        
    </div>
    );
};

export default React.memo(InteractiveMobile);