import React from 'react';
import { indicators } from '../../config';
import Indicator from '../components/Indicator';
import IndicatorsButton from '../components/IndicatorsButton';

const Indicators = () => {
    return (
        <section className='indicators'>
            <div className="container">
                <header className='indicators__header'>Какие показатели регистрирует СмартКардио®?</header>
                <div className="indicators__main">
                    {indicators.map( (e, i) => {
                        return (
                            <Indicator description={e.description} imageSrc={e.imageSrc} key={i} />
                        )
                    } )}
                </div>
                <IndicatorsButton />
            </div>
        </section>
    );
};

export default Indicators;