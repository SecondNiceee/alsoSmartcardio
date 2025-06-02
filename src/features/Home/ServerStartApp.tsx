
import React from 'react';
import StartApp from './StartApp';
import authorize from '@/shared/api/authorize';
import { saveAccessToken } from '@/shared/utils/saveAccesToken';
const ServerStartApp = async () => {
    const token = await authorize()
    // if (token)
    //     saveAccessToken(token)
    return (
        <StartApp token={token} />
    );
};

export default ServerStartApp;