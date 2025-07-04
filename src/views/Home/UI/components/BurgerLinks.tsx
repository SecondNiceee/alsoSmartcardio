import React, { FC } from 'react';
import { headerNavs } from '../../config';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import Link from 'next/link';
import { routes } from '@/shared/config/routes';

interface IBurgerLinks{
    isActive : boolean,
}
const BurgerLinks:FC<IBurgerLinks> = ({isActive}) => {
    return (
        <nav className={`header__burger-menu ${isActive ? "active" : ""}`}>
            {headerNavs.map( (headerNav, i) => {
              return (
                <React.Fragment key={i}>
                    {headerNav.path ? <Link href={headerNav.path} className="header__nav-li cursor-pointer">{headerNav.value}</Link>
                    :  <li onClick={headerNav.function} className="header__nav-li cursor-pointer">{headerNav.value}</li>}
                </React.Fragment>
              )
            } )}
            <OrderButton className='burgerMenu__order-button' link={routes.store}>
                <p className='burgerMenu__order-text'>Заказать</p>
            </OrderButton>
        </nav>
    );
};

export default React.memo(BurgerLinks);