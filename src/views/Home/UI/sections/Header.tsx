"use client";
import React, { useState } from "react";
import HeaderBurger from "../components/HeaderBurger";
import BurgerLinks from "../components/BurgerLinks";
import Link from "next/link";
import { headerNavs } from "../../config";
import HeaderOrderButton from "../components/HeaderOrderButton";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  return (

    <>
    <header className="header">
      <div className="header-wrapper">
        <div className="container">
          <h2 className="header__logo">SmartCardio</h2>

          <nav className="header__nav">
            {headerNavs.map( (headerNav, i) => {
              return (
                <React.Fragment key={i}>
                  {
                    headerNav.path ? <Link href={headerNav.path} className="header__nav-li cursor-pointer">{headerNav.value}</Link>
                    :  <li onClick={headerNav.function} className="header__nav-li cursor-pointer">{headerNav.value}</li>
                  }
                </React.Fragment>
              )
            } )}
          </nav>

          <HeaderBurger isOpen={isMenuOpen} setOpen={setMenuOpen} />
           
          <HeaderOrderButton />
          
        </div>
        
      </div>

      <BurgerLinks setMenuOpen={setMenuOpen} isActive={isMenuOpen} />
      
    </header>
    </>
  );
};

export default React.memo(Header);
