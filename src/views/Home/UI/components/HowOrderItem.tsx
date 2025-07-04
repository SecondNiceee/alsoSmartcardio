import React, { FC, useMemo } from 'react';
import { TypeOrder } from '../../config/howOrderItems';
import Reveal from '@/shared/UI/Reveal/Reveal';
import { CHARACTER } from '@/shared/UI/Reveal/models/CharacterEnum';

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
            <img className='how-order__item-img !icon-height !w-auto' src={imageSrc} alt='Смарткардио прибор для ЭКГ'  />
            <div className="how-order__tblock">
                <h4 className='how-order__item-h !sub-title'>{h}</h4>
                <p dangerouslySetInnerHTML={{__html : p}} className='how-order__item-p'></p>
            </div>
        </Reveal>
    );
};

export default HowOrderItem;