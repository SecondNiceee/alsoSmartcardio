import Image from 'next/image';
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
const Advantage:FC<IAdvantage> = ({header, img, p, id}) => {
    return (
        <div className={`flex w-[100%] gap-[15px] md:gap-[35px] flex-col items-center relative z-30 ${isBlack(id) ? "bg-black black-shadow" : "bg-white white-shadow"}  p-[20px] rounded-[20px]`}>
            <Image className='h-[150px] w-auto' width={400} height={400} alt='#' src={img}    />
            <div className='flex flex-col items-center'>
                <header className={`sub-title ${isBlack(id) ? "text-white !font-extrabold" : "text-black"} font-semibold`}>{header}</header>
                <p className={`p ${isBlack(id) ? "text-white" : "text-black"}`}>{p}</p>
            </div>
        </div>
    );
};

export default React.memo(Advantage);