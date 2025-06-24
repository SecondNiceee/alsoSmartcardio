import React from 'react';
import Image from 'next/image';

const RecognitionImages = () => {
    return (
        <div className='flex mx-auto  max-w-[800px] w-[100%] md:w-[90%] items-center rounded-2xl justify-center'>
            <div className='flex w-[100%] md:w-[unset] justify-center my-auto ml-auto mr-auto'>
                {/* <Image width={400} height={800} alt='recognition-phone-image' src={"/images/phone-1.png"} className='md:w-[40%] w-[25%]' /> 
                <Image width={400} height={800} alt='recognition-phone-image' src={"/images/phone-2.png"} className='md:w-[40%] w-[25%] translate-x-[-25%]' /> 
                <Image width={400} height={800} alt='recognition-phone-image' src={"/images/phone-3.png"} className='md:w-[40%] w-[25%] translate-x-[-50%]' />  */}
                <Image alt='#' src={'/images/phones.png'} width={900} height={1000} className='sm:w-[60%] w-[100%] md:w-[90%]' />
            </div>
        </div>
    );
};

export default RecognitionImages;