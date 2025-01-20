
import React from 'react';
import "../styles/_index.scss";
import { Home } from '@/views/Home';
import ServerStartApp from '@/features/Home/ServerStartApp';


const Page = () => {
    return (
        <>
            <ServerStartApp />
            <Home />
        </>
    );
};

export default Page;