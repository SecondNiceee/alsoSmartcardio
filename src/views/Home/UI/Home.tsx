import React from 'react';
import "./styles/_index.scss";
import Smartcardio from './sections/Smartcardio';
import Downloads from './sections/Downloads';
export const Home = () => {
    return (
        <>
            <Smartcardio />
            <Downloads />
        </>
    );
};

