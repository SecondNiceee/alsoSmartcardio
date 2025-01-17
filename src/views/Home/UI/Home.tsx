import React from 'react';
import "./styles/_index.scss";
import dynamic from 'next/dynamic';

import Smartcardio from './sections/Smartcardio';
const InteractiveSection = dynamic(() => import("./sections/InteractiveSection"),{ ssr: false });
const Downloads = dynamic( () => import('./sections/Downloads') )
const Indicators = dynamic( () => import('./sections/Indicators') )
const Technologys = dynamic( () => import('./sections/Technologys') )
const HowItWorks = dynamic( () => import("./sections/HowItWorks"), {ssr : false} )
const Steps = dynamic( () => import("./sections/Steps"))
const HowOrder = dynamic( () => import("./sections/HowOrder") )
const SmartcardioSlider = dynamic( () => import("./sections/SmartcardioSlider") , {ssr : false} ) 
const RecorderExamples = dynamic( () => import("./sections/RecorderExamples") , {ssr : false} ) 
const Feedbacks = dynamic( () => import("./sections/Feedbacks") , {ssr : false} ) 
const Recomendation = dynamic( () => import("./sections/Recomendation") )
const Advantages = dynamic( () => import("./sections/Advantages") )
const Sertifications = dynamic( () => import("./sections/Sertifications") , {ssr : false} ) 
const FooterOrder = dynamic( () => import("./sections/FooterOrder") )
const Contacts = dynamic( () => import("./sections/Contacts") )
const Footer = dynamic( () => import("./sections/Footer") )

export const Home = () => {
    return (

        <>
        
            <Smartcardio />

            <main>
                
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
                <Contacts />

            </main>
            
            <Footer />
        
        </>
        
    );
};

