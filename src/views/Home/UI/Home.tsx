import React from 'react';
import "./styles/_index.scss";
import dynamic from 'next/dynamic';

import Smartcardio from './sections/Smartcardio';
import Downloads from './sections/Downloads';
import Recognition from './sections/Recognition';
import ForWhom from './sections/ForWhom';
import ForWhomTwo from './sections/ForWhomTwo';
// import LayoutCookiePopup from '@/widgets/CookiePopup/LayoutCookiePopup';



const InteractiveSection = dynamic(() => import("./sections/InteractiveSection"));
const Indicators = dynamic( () => import('./sections/Indicators') )
const Technologys = dynamic( () => import('./sections/Technologys') )
const HowItWorks = dynamic( () => import("./sections/HowItWorks") )
const Steps = dynamic( () => import("./sections/Steps"))
const HowOrder = dynamic( () => import("./sections/HowOrder") )
const SmartcardioSlider = dynamic( () => import("./sections/SmartcardioSlider")  ) 
const RecorderExamples = dynamic( () => import("./sections/RecorderExamples") ) 
const Feedbacks = dynamic( () => import("./sections/Feedbacks")  ) 
const Recomendation = dynamic( () => import("./sections/Recomendation") )
const Advantages = dynamic( () => import("./sections/Advantages") )
const Sertifications = dynamic( () => import("./sections/Sertifications") ) 
const FooterOrder = dynamic( () => import("./sections/FooterOrder") )
const Contacts = dynamic( () => import("./sections/Contacts") )
const Footer = dynamic( () => import("./sections/Footer") )
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

