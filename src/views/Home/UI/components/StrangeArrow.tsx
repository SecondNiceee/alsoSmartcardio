import React from 'react';

const StrangeArrow = () => {
    return (
        <svg className='arrow' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='arrow-path' d="M6 12H18M18 12L13 7M18 12L13 17"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

export default React.memo(StrangeArrow);