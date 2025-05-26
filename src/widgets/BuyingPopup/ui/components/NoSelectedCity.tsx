import React from 'react';

const NoSelectedCity = () => {
    return (
        <div className='p'>Выберете город, чтобы узнать способы доставки</div>
    );
};

export default React.memo(NoSelectedCity);