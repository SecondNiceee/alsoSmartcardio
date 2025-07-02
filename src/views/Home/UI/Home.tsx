'use client'
import React from 'react';
import "./styles/_index.scss";
import dynamic from 'next/dynamic';

import Smartcardio from './sections/Smartcardio';
import Downloads from './sections/Downloads';
import Recognition from './sections/Recognition';
// import ForWhom from './sections/ForWhom';
import ForWhomTwo from './sections/ForWhomTwo';
import Generation from './sections/Generation';
import TelegramBotSection from './sections/TelegramBotSection';
import InteractiveSection from './sections/InteractiveSection';
import Indicators from './sections/Indicators';
import Technologys from './sections/Technologys';
import HowItWorks from './sections/HowItWorks';
import Steps from './sections/Steps';
import RecorderExamples from './sections/RecorderExamples';
import LayoutCookiePopup from '@/widgets/CookiePopup/LayoutCookiePopup';
import Advantages from './sections/Advantages';
import Contacts from './sections/Contacts';
import Feedbacks from './sections/Feedbacks';
import Footer from './sections/Footer';
import FooterOrder from './sections/FooterOrder';
import HowOrder from './sections/HowOrder';
import Recomendation from './sections/Recomendation';
import Sertifications from './sections/Sertifications';
import SmartcardioSlider from './sections/SmartcardioSlider';
// import LayoutCookiePopup from '@/widgets/CookiePopup/LayoutCookiePopup';
export const Home = () => {
    return (
        <>
            <Smartcardio />
            <main>
                <ForWhomTwo />
                <Downloads />
                <InteractiveSection />
                <Indicators />
                <Technologys />
                <HowItWorks />
                <Steps />
                <RecorderExamples />
                <Recognition />
                <HowOrder />
                <SmartcardioSlider />   
                <Advantages />
                <Feedbacks />
                <Recomendation />
                <Generation />
                <TelegramBotSection />
                {/* <Advantages /> */}
                <Sertifications />
                <FooterOrder />
                <Contacts />
            </main>
            <Footer />
            <LayoutCookiePopup />
        
        </>
        
    );
};

