
import dynamic from 'next/dynamic';
import React from 'react';


const Store = dynamic( () => (import("@/views/Store").then( (mod) => mod.Store )), {ssr: false} )
const page = () => {
    return (
        <Store />
    );
};

export default page;