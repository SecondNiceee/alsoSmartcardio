import { setRegistrationPopup } from '@/entities/auth/model/authSlice';
import { useAppDispatch } from '@/shared/models/reduxHooks';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';

const HeaderOrderButton = () => {

    const dispatch = useAppDispatch();
    return (

          <OrderButton
            onClick={() => {
              dispatch(setRegistrationPopup(true))
            }}
            className={"header__order-button !bg-liner !sticky top-[20px] right-[20px]"}
          >
            <p>Личный кабинет</p>
          </OrderButton>
    );
};

export default React.memo(HeaderOrderButton);