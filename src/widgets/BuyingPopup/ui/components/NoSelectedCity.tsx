import React from 'react';

const NoSelectedCity = () => {
    return (
        <div className='p'>Выберете город <span className='font-semibold'>из предложенного списка</span>, чтобы узнать способы доставки</div>
    );
};

export default React.memo(NoSelectedCity);