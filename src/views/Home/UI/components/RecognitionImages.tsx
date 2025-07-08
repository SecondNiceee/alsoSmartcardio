import React from 'react';

const RecognitionImages = () => {
    return (
        <div className='flex mx-auto  max-w-[800px] w-[100%] md:w-[90%] items-center rounded-2xl justify-center'>
            <div className='flex w-[100%] md:w-[unset] justify-center my-auto ml-auto mr-auto'>
                <picture>
                    <source media='(max-width:768px)' srcSet='/images/phones-768px.webp' />
                    <img loading='lazy' alt='Смарткардио для ЭКГ' src={'/images/phones-1024px.webp'} className='sm:w-[60%] w-[100%] md:w-[90%]' />
                </picture>
            </div>
        </div>
    );
};

export default RecognitionImages;