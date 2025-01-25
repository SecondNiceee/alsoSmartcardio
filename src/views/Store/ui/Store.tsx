import Image from 'next/image';
import React from 'react';
import { storeOrders } from '../config/StoreOrders';
import StoreOrder from './components/StoreOrder';
import BackToMainPage from './components/BackToMainPage';

export const Store = () => {
    return (
        <main>
            <div className='h-[80px] flex justify-center items-center bg-black w-[100%] relative'>
                <p className='mid-title md:block hidden font-semibold text-white leading-none'>Магазин</p>
                <div className='w-[100%] h-[100%] flex px-2 items-center absolute'>
                    <BackToMainPage />
                </div>
            </div>
            <div className="container flex flex-col items-center justify-center">

                <div className='md:w-[30%] sm:w-[40%] w-[50%] aspect-square relative flex-col gap-5 border-black border-2 border-solid flex justify-center items-center white-shadow rounded-[50%] mt-14 mb-14'>
                    <Image alt='#' width={1600} height={1500} className='w-[50%]' src={"/images/logo.jpg"} />
                    <div className='flex flex-col gap-2 items-center'>

                        <p className='mid-title leading-none text-gray-500'>SmartCardio</p>
                        <p className='mid-title leading-none text-gray-500'>store</p>

                    </div>
                </div>

                <div className='flex flex-col gap-4 items-center'>

                    <p className='sub-title text-black'>Наши товары: </p>

                </div>


                <div className='grid grid-cols-1 px-5 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-20'>

                    {storeOrders.map( (order, i) => 
                        <StoreOrder id={order.id} hoverImage={order.hoverImage} description={order.description} image={order.images[0]} name={order.name} price={order.price} key={i}  />
                    )}

                </div>
                
            </div>
            <div className='h-[80px] flex justify-center items-center bg-black w-[100%]'>
                <p className='mid-title font-semibold text-white'>СмартКардио®</p>
            </div>
        </main>
    );
};

