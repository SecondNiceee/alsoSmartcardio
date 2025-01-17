"use client";
import React, { useState } from "react";
import HeaderBurger from "../components/HeaderBurger";
import BurgerLinks from "../components/BurgerLinks";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import Link from "next/link";
import { headerNavs } from "../../config";

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
            {headerNavs.map( (headerNav) => {
              return (
                  headerNav.path ? <Link href={headerNav.path} className="header__nav-li cursor-pointer">{headerNav.value}</Link>
                  :  <li onClick={headerNav.function} className="header__nav-li cursor-pointer">{headerNav.value}</li>
              )
            } )}
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

      <BurgerLinks setMenuOpen={setMenuOpen} isActive={isMenuOpen} />
      
    </header>
    </>
  );
};

export default React.memo(Header);
