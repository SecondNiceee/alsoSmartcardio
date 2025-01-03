"use client";
import React, { useState } from "react";
import HeaderBurger from "../components/HeaderBurger";
import BurgerLinks from "../components/BurgerLinks";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const clickHandler = () => {
    alert("Это заказ!!");
  };
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="container">
          <h2 className="header__logo">SmartCardio</h2>
          <nav className="header__nav">
            <li className="header__nav-li">О нас</li>
            <li className="header__nav-li">Устройство</li>
            <li className="header__nav-li">Контакты</li>
            <li className="header__nav-li">Как сделать заказ</li>
          </nav>
          <HeaderBurger isOpen={isMenuOpen} setOpen={setMenuOpen} />
          <OrderButton
            className={"header__order-button"}
            onClick={clickHandler}
          >
            <p>Заказать</p>
          </OrderButton>
        </div>
        
      </div>

      <BurgerLinks isActive={isMenuOpen} />
    </header>
  );
};

export default React.memo(Header);
