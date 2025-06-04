import React from 'react';
import "./styles/_index.scss";
import dynamic from 'next/dynamic';

import Smartcardio from './sections/Smartcardio';
import ForWhomTwo from './sections/ForWhomTwo';
// import LayoutCookiePopup from '@/widgets/CookiePopup/LayoutCookiePopup';

const LayoutCookiePopup = dynamic( () => import("../../../widgets/CookiePopup/LayoutCookiePopup") )


export const Home = () => {
    return (

        <>
        
            <Smartcardio />
            <main>
                <ForWhomTwo />
                {/* <Downloads />
                <InteractiveSection />
                <Indicators />
                <Technologys />
                <HowItWorks />
                <Steps />
                <RecorderExamples />
                <Recognition />
                <HowOrder />
                <SmartcardioSlider />    */}
                {/* <Feedbacks /> */}
                {/* <Recomendation />
                <Advantages />
                <Sertifications />
                <FooterOrder />
                <Contacts /> */}
            </main>
            <LayoutCookiePopup />
        
        </>
        
    );
};

