import React, { FC } from 'react';
import { TypeSteps } from '../../config';
import Image from 'next/image';


interface IStep extends TypeSteps{
    index : number
}

const Step:FC<IStep> = ({imagePath, text, index}) => {
    return (
        <div className='step'>
            <Image className='step__image' alt='#' src={imagePath} width={200} height={200} />
            <div className="step__text-block">
                <h3 className='step__title'>Шаг {index}</h3>
                <p className='step__description'>
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Step;