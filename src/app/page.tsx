import React from 'react';
import "../styles/_index.scss";
import { Home } from '@/views/Home';
import authorize from '@/shared/api/authorize';
import StartApp from '@/features/Home/StartApp';


const Page = () => {

    authorize()

    return (
        <>
            <StartApp />
            <Home />
        </>
    );
};

export default Page;