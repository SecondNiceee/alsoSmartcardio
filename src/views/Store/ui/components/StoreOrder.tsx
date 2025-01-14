import { routes } from '@/shared/config/routes';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

type IStoreOrder = {
    image : string,
    name : string,
    price : number,
    description : string,
    hoverImage : string,
    id : number
}

const StoreOrder:FC<IStoreOrder> = ({description, name, price, image, hoverImage, id}) => {
    return (
        <Link href={routes.store + `/${id}`} className='flex hover:scale-105 transition-transform duration-300 white-shadow border-solid border-black border-1 rounded-lg flex-col gap-2 items-center cursor-pointer'>
            <div className='relative w-[100%]'>
                <Image className='aspect-square transition-opacity duration-300 rounded-md object-cover w-[100%] relative z-30 hover:opacity-0' width={1600} height={1600} alt='#' src={image}  />
                <Image className='aspect-square rounded-md object-cover w-[100%] absolute left-0 top-0 h-[100%] z-20' width={1600} height={1600} alt='#' src={hoverImage}  />
            </div>
            <div className='flex flex-col gap-2 items-center p-4 pt-0'>
                <p className='big-p font-bold'>{name}</p>
                <p className='p'>{description}</p>
                <p className='big-p font-bold'>{price} p</p>
            </div>
        </Link>
    );
};

export default React.memo(StoreOrder);