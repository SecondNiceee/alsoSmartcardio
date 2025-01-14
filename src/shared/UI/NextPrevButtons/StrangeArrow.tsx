import React, { FC } from 'react';
import cl from "./styles.module.scss"
interface IStrangeArrow{
    className? : string,
    color? : string
}
const StrangeArrow:FC<IStrangeArrow> = ({className, color = "black"}) => {
    return (
        <svg className={`${cl.arrow} ${className}`} width="800px" height="800px" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path fill={color} stroke={color} className={`${cl.arrowPath}`} d="M6 12H18M18 12L13 7M18 12L13 17"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default React.memo(StrangeArrow);