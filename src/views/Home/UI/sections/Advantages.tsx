import React from 'react';
import { advantagesConfig } from '../../config/advantagesConfig';
import Advantage from '../components/Advantage';
import BlackThemeCircles from '@/shared/UI/BlackThemeCircles/BlackThemeCircles';
import Reveal, { CHARACTER } from '@/shared/UI/Reveal/Reveal';

const Advantages = () => {
    return (
        <section className='section bg-black relative overflow-y-hidden'>
            <BlackThemeCircles />
            <div className="container p-container gap-containerGap flex flex-col">
                <Reveal character={CHARACTER.UPDOWN}>
                    <h2 className='h2 text-white'>Наши преимущества</h2>
                </Reveal>
                <div className="gap-[10px] flex  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {advantagesConfig.map( ({header, img, p}, key) => {
                        return (
                            <Advantage key={key} {...{header, img, p} } id={key} />
                        )
                    }  )}
                </div>
            </div>
        </section>
    );
};

export default Advantages;