'use client'
import React from 'react';
import "./styles/_index.scss";
import dynamic from 'next/dynamic';
import Smartcardio from './sections/Smartcardio';
import ForWhomTwo from './sections/ForWhomTwo';

const Recognition = dynamic( () => import("./sections/Recognition"), {ssr: false}  )
const Downloads = dynamic( () => import("./sections/Downloads"), {ssr: false}  )
const Generation = dynamic( () => import("./sections/Generation"), {ssr: false}  )
const InteractiveSection = dynamic(() => import("./sections/InteractiveSection"), {ssr: false}  );
const Indicators = dynamic( () => import('./sections/Indicators'), {ssr: false}  )
const Technologys = dynamic( () => import('./sections/Technologys'), {ssr: false}  )
const HowItWorks = dynamic( () => import("./sections/HowItWorks"), {ssr: false}  )
const Steps = dynamic( () => import("./sections/Steps"), {ssr: false}  )
const HowOrder = dynamic( () => import("./sections/HowOrder"), {ssr: false}  )
const SmartcardioSlider = dynamic( () => import("./sections/SmartcardioSlider"), {ssr: false}  ) 
const RecorderExamples = dynamic( () => import("./sections/RecorderExamples"), {ssr: false}  ) 
const Feedbacks = dynamic( () => import("./sections/Feedbacks"), {ssr: false}  ) 
const Recomendation = dynamic( () => import("./sections/Recomendation"), {ssr: false}  )
const Advantages = dynamic( () => import("./sections/Advantages"), {ssr: false}  )
const Sertifications = dynamic( () => import("./sections/Sertifications"), {ssr: false}  ) 
const FooterOrder = dynamic( () => import("./sections/FooterOrder"), {ssr : false} )
const Contacts = dynamic( () => import("./sections/Contacts"), {ssr: false}  )
const Footer = dynamic( () => import("./sections/Footer"), {ssr: false}  )
const LayoutCookiePopup = dynamic( () => import("../../../widgets/CookiePopup/LayoutCookiePopup"), {ssr: false}  )


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
                <Feedbacks />
                <Recomendation />
                <Generation />
                <Advantages />
                <Sertifications />
                <FooterOrder />
                <Contacts />
            </main>
            <Footer />
            <LayoutCookiePopup />
        </>
    );
};