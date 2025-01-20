import authorize from '@/shared/api/authorize';
import React from 'react';
import StartApp from './StartApp';

const ServerStartApp = async () => {
    const response = await authorize()
    return (
        <StartApp acessToken={response} />
    );
};

export default ServerStartApp;