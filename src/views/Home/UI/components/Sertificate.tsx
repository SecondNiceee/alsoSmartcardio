import Image from 'next/image';
import React, { FC, SetStateAction, useCallback } from 'react';

interface ISertificate{
    imagePath : string,
    id : number,
    setInitialSlide : React.Dispatch<SetStateAction<number>>,
    openZoom : () => void
}
const Sertificate:FC<ISertificate> = ({imagePath, id, setInitialSlide, openZoom}) => {
    const changeSlide = useCallback((id:number) => () => {
        setInitialSlide(id)
        openZoom()
    }, [])
    return (
        <div onClick={changeSlide(id)} className='w-[100%]'>
            <Image className='w-[100%] border-2 border-solid border-black rounded-md' alt='#' src={imagePath} width={583} height={827}  />
        </div>
    );
};

export default React.memo(Sertificate);