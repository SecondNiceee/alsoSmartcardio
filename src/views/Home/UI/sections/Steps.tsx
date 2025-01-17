import React from 'react';
import { steps } from '../../config';
import Step from '../components/Step';
import Image from 'next/image';
import Reveal, { CHARACTER } from '@/shared/UI/Reveal/Reveal';

const Steps = () => {
    return (
        <section className='steps'>
            <div className="container">
                <Reveal character={CHARACTER.UPDOWN} className="steps__header">
                    Три шага для оценки <span className='text-[#6cff01] font-bold'>Вашего здоровья</span>
                </Reveal>
                <Reveal character={CHARACTER.DOWNUP} className="steps__main">
                    <Image className='steps__arrows' width={921} height={152} alt='#' src={"/images/stepsArrow.svg"} />
                    <div className="steps__steps">
                        {steps.map( (e, i) => {
                            return (
                                <Step imagePath={e.imagePath} index={i + 1} text={e.text} key={i} />
                            )
                        } )}
                    </div>
                    
                </Reveal>
            </div>
        </section>
    );
};

export default Steps;