'use client'
import React from 'react';
import "../styles/_index.scss";
import { Home } from '@/views/Home';
import authorize from '@/shared/api/authorize';


const Page = () => {

    authorize()

    return (
        <>
            {/* <StartApp /> */}
            <Home />
        </>
    );
};

export default Page;