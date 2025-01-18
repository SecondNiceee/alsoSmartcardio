
import React, { FC, SetStateAction } from 'react';
import { headerNavs } from '../../config';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import Link from 'next/link';
import { useAppDispatch } from '@/shared/models/reduxHooks';
import { setCartPopup } from '@/entities/cart/model/cartSlice';

interface IBurgerLinks{
    isActive : boolean,
    setMenuOpen : React.Dispatch<SetStateAction<boolean>>
}
const BurgerLinks:FC<IBurgerLinks> = ({isActive, setMenuOpen}) => {
    const dispatch = useAppDispatch()
    const openBuyingPopup = () => {
        dispatch(setCartPopup(true))
        setMenuOpen(false)
    }
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
            <OrderButton className='burgerMenu__order-button' onClick={openBuyingPopup}>
                <p className='burgerMenu__order-text'>Заказать</p>
            </OrderButton>
        </nav>
    );
};

export default React.memo(BurgerLinks);