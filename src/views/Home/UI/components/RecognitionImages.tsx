import React from 'react';

const RecognitionImages = () => {
    return (
        <div className='flex mx-auto  max-w-[800px] w-[100%] md:w-[90%] items-center rounded-2xl justify-center'>
            <div className='flex w-[100%] md:w-[unset] justify-center my-auto ml-auto mr-auto'>
                <img alt='#' src={'/images/phones.webp'} className='sm:w-[60%] w-[100%] md:w-[90%]' />
            </div>
        </div>
    );
};

export default RecognitionImages;