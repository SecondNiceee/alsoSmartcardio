import React, { FC } from 'react';
import InteractiveButtons from './InteractiveButtons';


export interface IInteractiveMobile{
    openZoom : () => void,
}
const InteractiveMobile:FC<IInteractiveMobile> = ({openZoom}) => {
    return (
        <div className="mobile">
        <div className="container">
            <div className="interactive__m-main relative z-30 bg-white">
                <InteractiveButtons openZoom={openZoom} />
                <img className='interactive__m-image' alt='#' src={"/images/interactive.webp"} />
            </div>
        </div>
        
    </div>
    );
};

export default React.memo(InteractiveMobile);