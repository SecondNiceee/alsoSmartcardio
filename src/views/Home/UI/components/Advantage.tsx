import { CHARACTER } from '@/shared/UI/Reveal/models/CharacterEnum';
import Reveal from '@/shared/UI/Reveal/Reveal';
import React, { FC } from 'react';

interface IAdvantage{
    img : string,
    header : string,
    p : string,
    id : number
}
function isBlack(id : number){
    return [0,2,4].includes(id)
}
const revealProperty = (id : number ) => {
    switch (id){
        case 0:
            return CHARACTER.LEFT
        case 1:
            return CHARACTER.UPDOWN
        case 2:
            return CHARACTER.RIGHT
        case 3:
            return CHARACTER.LEFT
        case 4: 
            return CHARACTER.DOWNUP
        case 5:
            return CHARACTER.RIGHT
        default:
            return CHARACTER.UPDOWN
}
}
const Advantage:FC<IAdvantage> = ({header, img, p, id}) => {
    return (
        <Reveal character={revealProperty(id)} className={`flex w-[100%] gap-[15px] md:gap-[35px] flex-col items-center relative z-30 ${isBlack(id) ? "bg-black black-shadow" : "bg-white white-shadow"}  p-[20px] rounded-[20px]`}>
            <img className='!icon-height w-auto' alt='Смарткардио прибор для ЭКГ' src={img}    />
            <div className='flex flex-col items-center'>
                <header className={`sub-title ${isBlack(id) ? "text-white !font-extrabold" : "text-black"} font-semibold`}>{header}</header>
                <p dangerouslySetInnerHTML={{ __html: p }} className={`p ${isBlack(id) ? "text-white" : "text-black"}`}></p>
            </div>
        </Reveal>
    );
};

export default React.memo(Advantage);