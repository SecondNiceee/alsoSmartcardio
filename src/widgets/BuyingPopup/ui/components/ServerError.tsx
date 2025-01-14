import React from 'react';

const ServerError = () => {
    return (
        <div className='p text-red-500'>Произошла ошибка, проверьте подключение к интернету и перезагрузите страницу, пожалуйста.</div>
    );
};

export default React.memo(ServerError);