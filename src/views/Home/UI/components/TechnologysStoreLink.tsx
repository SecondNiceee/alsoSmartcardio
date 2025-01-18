'use client'
import { routes } from '@/shared/config/routes';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import React from 'react';

const TechnologysStoreLink = () => {

    return (
            <OrderButton
                className="technologys__blog-button black-border"
                link={routes.store}
            >
                <p className="technologys_blog-text black">Магазин</p>
            </OrderButton>
);
};

export default React.memo(TechnologysStoreLink);