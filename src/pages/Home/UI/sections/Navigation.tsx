import React from 'react';

const Navigation = () => {
    return (
    <nav className='header__nav'>
        <li className='header__nav-li'>О нас</li>
        <li className='header__nav-li'>Устройство</li>
        <li className='header__nav-li'>Контакты</li>
        <li className='header__nav-li'>Как сделать заказ</li>
    </nav>
    );
};

export default React.memo(Navigation);