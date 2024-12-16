import Image from 'next/image';
import React from 'react';
import InteractiveButtons from './InteractiveButtons';


const InteractiveMobile = () => {
    const onClick = () => {
        
    }
    return (
        <div className="mobile">
        <div className="container">
            <header className='interactive__m-header'>
                СмартКардио - полностью беспроводной карманный прибор для мониторинга вашего здоровья
            </header>
            <div className="interactive__m-main relative z-30 bg-white">
                <InteractiveButtons />
                <Image className='interactive__m-image' alt='#' width={400} height={400} src={"/images/interactive.png"} />
            </div>
        </div>
        
    </div>
    );
};

export default React.memo(InteractiveMobile);