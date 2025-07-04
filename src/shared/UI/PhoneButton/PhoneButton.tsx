import React, { FC, ReactNode } from 'react';
import cl from "./PhoneButton.module.scss"

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
            {!svgItem ? <img className={cl.phoneButtonImage} alt='Смарткардио - прибор для измерения Экг.' src={`images/${imageName}`}  /> : svgItem}
            <p className={cl.phoneButtonText}>{text}</p>
        </a>

    );
};

export default React.memo(PhoneButton);