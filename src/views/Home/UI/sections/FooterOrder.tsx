import React from 'react';
import FooterOrderButton from '../components/FooterOrderButton';


const FooterOrder = () => {


    
    return (

        <section className='section relative bg-cover bg-center md:bg-fixed md:bg-bottom md:bg-auto
            bg-[url("/images/footerBg-576px.webp")] 
            sm:bg-[url("/images/footerBg-768px.webp")] 
            md:bg-[url("/images/footerBg-1024px.webp")] 
            lg:bg-[url("/images/footerBg-1440px.webp")]'>
            <div className="w-[100%] h-[100%] absolute left-0 top-0 bg-black z-10 opacity-70"></div>
            <div className="container p-container gap-containerGap relative flex flex-col z-20">
                <h2 className='h2 text-white'>Закажите СмартКардио® уже сегодня</h2>
                <div className="!mid-title  text-white">
                    <span className='italic'>«Врачи лечат болезни, а здоровье и долголетие нужно добывать самому.» - </span>
                    Врач, учёный, сердечно-сосудистый хирург Николай Михайлович Амосов.
                </div>

                <div className="button-wrapper mx-auto w-[100%] max-w-[70%] md:max-w-[500px] relative">
                    
                <svg className='hidden md:block absolute left-[-20%] top-[-60%]' width="75" height="82" viewBox="0 0 75 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M74.5527 71.5607C75.1385 70.9749 75.1385 70.0251 74.5527 69.4393L65.0068 59.8934C64.421 59.3076 63.4712 59.3076 62.8855 59.8934C62.2997 60.4792 62.2997 61.4289 62.8855 62.0147L71.3707 70.5L62.8855 78.9853C62.2997 79.5711 62.2997 80.5208 62.8855 81.1066C63.4712 81.6924 64.421 81.6924 65.0068 81.1066L74.5527 71.5607ZM3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5H3ZM73.4921 69C42.803 69 25.3163 59.8563 15.4355 47.0822C5.49476 34.2308 3 17.3946 3 1.5H0C0 17.6054 2.50524 35.2692 13.0625 48.9178C23.6797 62.6437 42.1891 72 73.4921 72V69Z" fill="white" />
                </svg>

                <FooterOrderButton />

                </div>  
            </div>
            
        </section>
    );
};

export default FooterOrder;