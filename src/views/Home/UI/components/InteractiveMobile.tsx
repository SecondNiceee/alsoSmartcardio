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
                <picture>
                    <source media='(max-width:576px)' srcSet='/images/interactive-768px.webp' />
                    <source media='(max-width:1024px)' srcSet='/images/interactive-1024px.webp' />
                    <img loading='lazy' className='interactive__m-image' alt='ЭКГ' src={"/images/interactive-1440px.webp"} />
                </picture>
            </div>
        </div>
        
    </div>
    );
};

export default React.memo(InteractiveMobile);