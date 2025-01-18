'use client'
import { openPdfInNewTab } from '@/shared/utils/openPdfInNewTab';
import React from 'react';

const PoliticBlock = () => {
    const openPdf = (pdfPath : string) => () => {
        openPdfInNewTab(pdfPath)
    }
    return (
        <div className="flex cursor-pointer gap-[20px] w-[100%] mx-auto justify-center max-w-[600px]">
          <div onClick={openPdf("/pdf/oferta.pdf")} className="flex w-[100%] justify-center items-center">
            <p className="p !text-white">Договор оферты</p>
          </div>
          <div onClick={openPdf("/pdf/confidential.pdf")} className="flex cursor-pointer w-[100%] justify-center items-center">
            <p className="p !text-white">Политика конфидециальности</p>
          </div>
        </div>
    );
};

export default PoliticBlock;