'use client'
import Image from 'next/image';
import React from 'react';
import InteractivePhoneBlock from '../components/InteractivePhoneBlock';
import InteractiveCardioBlock from '../components/InteractiveCardioBlock';
import InteractiveMobile from '../components/InteractiveMobile';
import Reveal, { CHARACTER } from '@/shared/UI/Reveal/Reveal';


const InteractiveSection = () => {


    return (
        <section className='interactive'>
            <Reveal character={CHARACTER.RIGHT} className="desktop">
                <div className="container">
                    <div className="interactive-wrapper">

                        <Image className='interactive__image' width={800} height={800} alt='#' src={"/images/interactive.png"} />

                        <InteractivePhoneBlock />

                        <InteractiveCardioBlock />

                        <Image className='interactive__liner-block' width={910} height={927} alt='#' src={"/image/interactiveLinerBlock.svg"} />

                    </div>
                </div>
                <Image className='interactive__circle' width={540} height={517} alt='#' src={"images/interactiveCircle.svg"} />
            </Reveal>

            <InteractiveMobile />

        </section>
    );
};

export default InteractiveSection;