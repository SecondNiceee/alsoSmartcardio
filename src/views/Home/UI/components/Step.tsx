import React, { FC } from 'react';
import { TypeSteps } from '../../config';
import { createImageResolution } from '@/shared/utils/createImageResolution';


interface IStep extends TypeSteps{
    index : number
}

const Step:FC<IStep> = ({imagePath, text, index}) => {
    return (
        <div className='step'>
            <picture>
                <source media='(max-width:576px)' srcSet={createImageResolution(imagePath, 768)} />
                <img loading='lazy' className='step__image relative z-30' alt='Смарткардио для ЭКГ' src={createImageResolution(imagePath, 1024)} />
            </picture>
            <div className="step__text-block">
                <h3 className='step__title relative z-30 !sub-title'>Шаг {index}</h3>
                <p dangerouslySetInnerHTML={{ __html: text }} className='step__description relative z-30'>
                </p>
            </div>
        </div>
    );
};

export default Step;