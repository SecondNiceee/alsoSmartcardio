import React from 'react';

const NoDeliveryMethods = () => {
    return (
    <div className='p'> В выбранный регион/город доставка не осуществляется. </div>
    );
};

export default React.memo(NoDeliveryMethods);