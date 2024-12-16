import React from 'react';
import { advantagesConfig } from '../../config/advantagesConfig';
import Advantage from '../components/Advantage';
import BlackThemeCircles from '@/shared/UI/BlackThemeCircles/BlackThemeCircles';

const Advantages = () => {
    return (
        <section className='section bg-black relative'>
            <BlackThemeCircles />
            <div className="container p-container gap-containerGap flex flex-col">
                <h2 className='h2 text-white'>Наши преимущества</h2>
                <div className="gap-[10px] !grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {advantagesConfig.map( ({header, img, p}, key) => {
                        return (
                            <Advantage {...{header, img, p, key} } id={key} />
                        )
                    }  )}
                </div>
            </div>
        </section>
    );
};

export default Advantages;