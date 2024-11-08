import React from 'react';
import "./styles/_index.scss";
import Smartcardio from './sections/Smartcardio';
import Downloads from './sections/Downloads';
import InteractiveSection from './sections/InteractiveSection';
import Indicators from './sections/Indicators';
import Technologys from './sections/Technologys';
import HowItWorks from './sections/HowItWorks';
export const Home = () => {
    return (
        <>
            <Smartcardio />
            <Downloads />
            <InteractiveSection />
            <Indicators />
            <Technologys />
            <HowItWorks />
        </>
    );
};

