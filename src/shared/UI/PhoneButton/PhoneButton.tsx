import React, { FC } from 'react';
import cl from "./PhoneButton.module.scss"
import Image from 'next/image';

interface IPhoneButton{
    href : string,
    text : string,
    imageName : string
}
const PhoneButton:FC<IPhoneButton> = ({href, text, imageName}) => {
    return (
        <a className={cl.phoneButton} href={href} target="_blank" rel="noopener noreferrer">
            <Image height={43} width={32} className={cl.phoneButtonImage} alt='#' src={`images/${imageName}`}   />
            <p className={cl.phoneButtonText}>{text}</p>
        </a>

    );
};

export default React.memo(PhoneButton);