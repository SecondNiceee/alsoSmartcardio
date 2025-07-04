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
    }, [openZoom, setInitialSlide])
    return (
        <div onClick={changeSlide(id)} className='w-[100%] cursor-pointer hover:translate-y-[-20px] transition-transform duration-300'>
            <img className='w-[100%] border-2 border-solid border-black rounded-md' alt='#' src={imagePath}  />
        </div>
    );
};

export default React.memo(Sertificate);