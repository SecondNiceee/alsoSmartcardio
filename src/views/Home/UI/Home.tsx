'use client'
import React from 'react';
import "./styles/_index.scss";
import dynamic from 'next/dynamic';
import HowItWorks from './sections/HowItWorks';
import Steps from './sections/Steps';
import Smartcardio from './sections/Smartcardio';

const InteractiveSection = dynamic(() =>
    import("./sections/InteractiveSection"),
    { ssr: false }
  );
const Downloads = dynamic( () => import('./sections/Downloads') )
const Indicators = dynamic( () => import('./sections/Indicators') )
const Technologys = dynamic( () => import('./sections/Technologys') )
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
                
                {/* <HowOrdes />

                <SmartcardioSlider />   
                <RecorderExamples />

                <Feedbacks />
                <Recomendation />
                <Advantages />
                <Sertifications />
                <FooterOrder />
                <Contacts /> */}

            </main>
            
            {/* <Footer /> */}
        
        </>
        
    );
};

