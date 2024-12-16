import React from 'react';

const BlackThemeCircles = () => {
    return (
        <>
            <div className="absolute left-[10%] opacity-50 md:opacity-70 lg:opacity-100 z-20 top-[5%] bg-purple-500 w-[200px] h-[200px] blur-[200px]"></div>
            <div className="absolute right-[10%] opacity-50 md:opacity-70 lg:opacity-100 z-20 bottom-[5%] bg-purple-500 w-[200px] h-[200px] blur-[200px]"></div>
            <div className="absolute left-[0%] z-20 bottom-[-20%] bg-purple-500 w-[200px] h-[200px] blur-[200px]"></div>
            <div className="absolute right-[0%] z-20 top-[-20%] bg-purple-500 w-[200px] h-[200px] blur-[200px]"></div>
        </>
    );
};

export default React.memo(BlackThemeCircles);