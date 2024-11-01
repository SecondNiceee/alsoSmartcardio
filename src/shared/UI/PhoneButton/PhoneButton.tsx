import React, { FC } from 'react';
import cl from "./PhoneButton.module.scss"
import Image from 'next/image';

interface IPhoneButton{
    href : string,
    imageName : string,
    text : string,
    imagePlaceholder : string
}
const PhoneButton:FC<IPhoneButton> = ({href, imageName, text, imagePlaceholder}) => {
    return (
        <a className={cl.phoneButton} href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            <Image alt='#' src={href}   />
            <p className={cl.phoneButtonText}>{imageName}</p>
        </a>

    );
};

export default PhoneButton;