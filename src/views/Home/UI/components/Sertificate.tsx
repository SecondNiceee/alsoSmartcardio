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
            <picture>
                <source media='(max-width:576px)' srcSet={`${imagePath}-768px.webp`} />
                <source media='(max-width:1024px)' srcSet={`${imagePath}-1024px.webp`} />
                <img loading='lazy' className='w-[100%] border-2 border-solid border-black rounded-md' alt='ЭКГ' src={`${imagePath}-1440px.webp`}  />
            </picture>
        </div>
    );
};

export default React.memo(Sertificate);