import React, { FC } from 'react';
import { TypeOrder } from '../../config/howOrderItems';
import Image from 'next/image';

const HowOrderItem:FC<TypeOrder> = ({h, imageSrc, p}) => {
    return (
        <div className="how-order__item">
            <Image className='how-order__item-img' src={imageSrc} alt='#' width={100} height={100} />
            <div className="how-order__tblock">
                <h4 className='how-order__item-h'>{h}</h4>
                <p className='how-order__item-p'>{p}</p>
            </div>
        </div>
    );
};

export default HowOrderItem;