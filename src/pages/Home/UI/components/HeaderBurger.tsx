import React, { FC, SetStateAction } from 'react';
// import { Squash as Hamburger } from 'hamburger-react'

interface IHeaderBurger{
    isOpen : boolean,
    setOpen :  React.Dispatch<SetStateAction<boolean>>
}
const HeaderBurger:FC<IHeaderBurger> = ({isOpen, setOpen}) => {
    return (
        <div className="burger-icon">
            <div>
                
            </div>
            {/* <Hamburger color='white' toggled={isOpen} toggle={setOpen} /> */}
        </div>
    );
};

export default HeaderBurger;