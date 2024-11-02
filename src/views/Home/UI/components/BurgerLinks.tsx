import React, { FC, SetStateAction } from 'react';
import { headerNavs } from '../../config';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';

interface IBurgerLinks{
    isActive : boolean
}
const BurgerLinks:FC<IBurgerLinks> = ({isActive}) => {
    const clickHandler = () => {

    }
    return (
        <nav className={`header__burger-menu ${isActive ? "active" : ""}`}>
            {headerNavs.map( (e, i) => {
                return (
                    <li key={i} className='header__nav-li'>{e}</li>
                )
            } )}
            <OrderButton className='burgerMenu__order-button' onClick={clickHandler}>
                <p className='burgerMenu__order-text'>Заказть</p>
            </OrderButton>
        </nav>
    );
};

export default React.memo(BurgerLinks);