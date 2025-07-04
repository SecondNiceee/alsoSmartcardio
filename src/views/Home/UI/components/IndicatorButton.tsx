'use client'
import { routes } from '@/shared/config/routes';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';

const IndicatorButton = () => {

    return (
    <OrderButton link={routes.store} className="indicators__button">
        <p>Заказать</p>
    </OrderButton>
    );
};

export default IndicatorButton;