import React from 'react';
import "./styles/_index.scss";
import Smartcardio from './sections/Smartcardio';
import Downloads from './sections/Downloads';
import InteractiveSection from './sections/InteractiveSection';
import Indicators from './sections/Indicators';
export const Home = () => {
    return (
        <>
            <Smartcardio />
            <Downloads />
            <InteractiveSection />
            <Indicators />
        </>
    );
};

