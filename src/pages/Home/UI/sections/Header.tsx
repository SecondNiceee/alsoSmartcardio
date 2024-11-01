"use client"
import React, { useState } from 'react';
import Navigation from './Navigation';
import HeaderButton from '../components/HeaderButton';
import HeaderBurger from '../components/HeaderBurger';
import BurgerLinks from '../components/BurgerLinks';

const Header = () => {
    const [isMenuOpen , setMenuOpen] = useState<boolean>(false)
    return (
        <header className="header">

            <div className='header-wrapper'>
                <div className="container">
                    <h2 className='header__logo'>SmartCardio</h2>
                    <Navigation />
                    <HeaderBurger isOpen = {isMenuOpen} setOpen={setMenuOpen} />
                    <HeaderButton />
                </div>
            </div>

            <BurgerLinks isActive = {isMenuOpen} />
    
        </header>
    );
};

export default Header;