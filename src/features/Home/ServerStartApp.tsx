
import React from 'react';
import StartApp from './StartApp';
import authorize from '@/shared/api/authorize';
const ServerStartApp = async () => {
    const token = await authorize()
    return (
        <StartApp token={token} />
    );
};

export default ServerStartApp;