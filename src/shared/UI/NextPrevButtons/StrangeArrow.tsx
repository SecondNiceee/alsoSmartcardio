import React from 'react';
import cl from "./styles.module.scss"
const StrangeArrow = () => {
    return (
        <svg className={`${cl.arrow}`} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={`${cl.arrowPath}`} d="M6 12H18M18 12L13 7M18 12L13 17"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default React.memo(StrangeArrow);