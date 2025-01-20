import authorize from '@/shared/api/authorize';
import React from 'react';
import dynamic from 'next/dynamic';
const StartApp = dynamic( () => import("./StartApp"), {ssr : false} )
const ServerStartApp = async () => {
    const response = await authorize()
    return (
        <StartApp acessToken={response} />
    );
};

export default ServerStartApp;