import { Product } from '@/views/Product';
import React, { Suspense } from 'react'


const page = () => {

    return (
        <Suspense fallback={<>Loading...</>}>
            <Product />
        </Suspense>
    );
};


export default page;