'use client'
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import { openPdfInNewTab } from '@/shared/utils/openPdfInNewTab';
import React from 'react';

const TechnologysInstructionButton = () => {
    const openInstruction = () => {
        openPdfInNewTab("/pdf/smartcardio.pdf")
    }
    return (
            <OrderButton
                className="technologys__blog-button black-border"
                onClick={openInstruction}
            >
                <p className="technologys_blog-text black">Инструкция использования</p>
            </OrderButton>
    );
};

export default TechnologysInstructionButton;