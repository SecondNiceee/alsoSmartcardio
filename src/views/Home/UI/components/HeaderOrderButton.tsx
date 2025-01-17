import { setCartPopup } from '@/entities/cart/model/cartSlice';
import { useAppDispatch } from '@/shared/models/reduxHooks';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';

const HeaderOrderButton = () => {

    const dispatch = useAppDispatch()

    const opeBuyingPopup = () => {
      dispatch(setCartPopup(true))
    };

    return (

          <OrderButton
            className={"header__order-button !sticky top-[20px] right-[20px]"}
            onClick={opeBuyingPopup}
          >
            <p>Заказать</p>
          </OrderButton>
    );
};

export default React.memo(HeaderOrderButton);