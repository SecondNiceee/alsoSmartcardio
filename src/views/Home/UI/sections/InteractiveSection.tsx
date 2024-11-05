
import Image from 'next/image';
import React from 'react';
import InteractivePhoneBlock from '../components/InteractivePhoneBlock';
import InteractiveCardioBlock from '../components/InteractiveCardioBlock';
import InteractiveCircle from '../components/InteractiveCircle';
import InteractiveLinerBlock from '../components/InteractiveLinerBlock';
import InteractiveMobile from '../components/InteractiveMobile';


const InteractiveSection = () => {
    return (
        <section className='interactive'>
            <div className="desktop">
                <div className="container">
                    <div className="interactive-wrapper">

                        <Image className='interactive__image' width={500} height={490} alt='#' src={"/images/interactive.png"} />

                        <InteractivePhoneBlock />

                        <InteractiveCardioBlock />

                        <InteractiveLinerBlock />

                    </div>
                </div>
                <InteractiveCircle />
            </div>

            <InteractiveMobile />

        </section>
    );
};

export default InteractiveSection;