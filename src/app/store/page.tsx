
import dynamic from 'next/dynamic';
import React from 'react';


const Store = dynamic( () => (import("@/views/Store").then( (mod) => mod.Store )) )
const page = () => {
    return (
        <Store />
    );
};

export default page;