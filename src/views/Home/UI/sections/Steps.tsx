import React from 'react';
import StepsArrow from '../components/StepsArrows';
import { steps } from '../../config';
import Step from '../components/Step';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';

const Steps = () => {
    return (
        <section className='steps'>
            <div className="container">
                <div className="steps__header">
                    Три шага для оценки Вашего здоровья
                </div>
                <div className="steps__main">
                    <StepsArrow />
                    <div className="steps__steps">
                        {steps.map( (e, i) => {
                            return (
                                <Step imagePath={e.imagePath} index={i + 1} text={e.text} key={i} />
                            )
                        } )}
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Steps;