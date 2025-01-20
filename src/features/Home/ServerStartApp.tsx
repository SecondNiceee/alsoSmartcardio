
'use client'
import React from 'react';
import dynamic from 'next/dynamic';
const StartApp = dynamic( () => import("./StartApp"), {ssr : false} )
const ServerStartApp = () => {
    return (
        <StartApp />
    );
};

export default ServerStartApp;