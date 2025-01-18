import React from 'react';
import "../styles/_index.scss";
import { Home } from '@/views/Home';
import StartApp from '@/features/Home/StartApp';


const Page = () => {

    return (
        <>
            <StartApp/>
            <Home />
        </>
    );
};

export default Page;