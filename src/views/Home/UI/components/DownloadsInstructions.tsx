"use client"

import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import React from "react";

const DownloadsInstructions = () => {
  return (
    <div className="downloads__instructions">
      <OrderButton onClick={() => {}} className="instruction-apple">
        <p>Интструкция для пользователей Apple</p>
      </OrderButton>
      <OrderButton onClick={() => {}} className="instruction-assistance">
        <p>Служба поддержки</p>
      </OrderButton>
    </div>
  );
};

export default DownloadsInstructions;
