import dynamic from 'next/dynamic';
import React from 'react';
const Congratulation = dynamic(() => import("../../views/Congratulation/Congratulation"), {ssr: false});
const Page = () => {
    return (
        <Congratulation />
    );
};

export default Page;