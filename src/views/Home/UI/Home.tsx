'use client'
import React from 'react';
import "./styles/_index.scss";
import Smartcardio from './sections/Smartcardio';
import Downloads from './sections/Downloads';
import InteractiveSection from './sections/InteractiveSection';
import Indicators from './sections/Indicators';
import Technologys from './sections/Technologys';
import HowItWorks from './sections/HowItWorks';
import Steps from './sections/Steps';
import HowOrder from './sections/HowOrder';
import SmartcardioSlider from './sections/SmartcardioSlider';
import RecorderExamples from './sections/RecorderExamples';
import Feedbacks from './sections/Feedbacks';
import Recomendation from './sections/Recomendation';
import Advantages from './sections/Advantages';
import Sertifications from './sections/Sertifications';
import FooterOrder from './sections/FooterOrder';

export const Home = () => {
    return (

        <>
        
            <Smartcardio />
            <Downloads />
            <InteractiveSection />
            <Indicators />
            <Technologys />
            <HowItWorks />
            <Steps />
            <HowOrder />
            <SmartcardioSlider />   
            <RecorderExamples />
            <Feedbacks />
            <Recomendation />
            <Advantages />
            <Sertifications />
            <FooterOrder />
        
        </>
        
    );
};

