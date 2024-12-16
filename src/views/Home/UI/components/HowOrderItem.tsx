import React, { FC, useMemo } from 'react';
import { TypeOrder } from '../../config/howOrderItems';
import Image from 'next/image';
import Reveal, { CHARACTER } from '@/shared/UI/Reveal/Reveal';

type indexType = {
    index : number
}
const HowOrderItem:FC<TypeOrder & indexType> = ({h, imageSrc, p, index}) => {
    const revealCase = useMemo( () => {
        switch (index){
            case 0:{
                return CHARACTER.LEFT
            }
            case 1:{
                return CHARACTER.DOWNUP
            }
            case 2:{
                return CHARACTER.RIGHT
            }
            default :
                return CHARACTER.DOWNUP
        }
    } , [index])
    return (
        <Reveal character={revealCase} className="how-order__item bg-white black-shadow">
            <Image className='how-order__item-img' src={imageSrc} alt='#' width={100} height={100} />
            <div className="how-order__tblock">
                <h4 className='how-order__item-h !sub-title'>{h}</h4>
                <p className='how-order__item-p'>{p}</p>
            </div>
        </Reveal>
    );
};

export default HowOrderItem;