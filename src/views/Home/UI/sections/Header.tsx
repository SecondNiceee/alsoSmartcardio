"use client";
import React, { useState } from "react";
import HeaderBurger from "../components/HeaderBurger";
import BurgerLinks from "../components/BurgerLinks";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import { scrollToDevice } from "@/views/Home/utils/scrollToDevice";
import Link from "next/link";
import { routes } from "@/shared/config/routes";
import { openInstruction } from "../../utils/openInstruction";
import { scrollToContacts } from "../../utils/scrollToContacts";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const clickHandler = () => {
    alert("Это заказ!!");
  };

  
  return (

    <>
    <header className="header">
      <div className="header-wrapper">
        <div className="container">
          <h2 className="header__logo">SmartCardio</h2>

          <nav className="header__nav">
            <li onClick={scrollToDevice} className="header__nav-li cursor-pointer">Устройство</li>
            <Link href={routes.store} className="header__nav-li cursor-pointer">Магазин</Link>
            <li onClick={openInstruction} className="header__nav-li cursor-pointer">Инструкция</li>
            <li onClick={scrollToContacts} className="header__nav-li cursor-pointer">Контакты</li>
          </nav>

          <HeaderBurger isOpen={isMenuOpen} setOpen={setMenuOpen} />

          <OrderButton
            className={"header__order-button !sticky top-[20px] right-[20px]"}
            onClick={clickHandler}
          >
            <p>Заказать</p>
          </OrderButton>
          
        </div>
        
      </div>

      <BurgerLinks isActive={isMenuOpen} />
      
    </header>
    </>
  );
};

export default React.memo(Header);
