import dynamic from 'next/dynamic';
import React from 'react';
const Congradulation = dynamic(() => import("../../views/Congradulation/Congradulation"));
const Page = () => {
    return (
        <Congradulation />
    );
};

export default Page;