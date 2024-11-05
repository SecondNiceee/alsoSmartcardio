import React, { FC, ReactNode } from 'react';
import cl from "./PhoneButton.module.scss"
import Image from 'next/image';

interface IPhoneButton{
    href : string,
    text : string,
    imageName : string,
    svgItem? : ReactNode | undefined,
    className? : string
}
const PhoneButton:FC<IPhoneButton> = ({href, text, imageName, svgItem, className = ""}) => {
    return (
        <a  className={`${cl.phoneButton} ${className}`} href={href} target="_blank" rel="noopener noreferrer">
            {!svgItem ? <Image height={31} width={31} className={cl.phoneButtonImage} alt='#' src={`images/${imageName}`}   /> : svgItem}
            <p className={cl.phoneButtonText}>{text}</p>
        </a>

    );
};

export default React.memo(PhoneButton);