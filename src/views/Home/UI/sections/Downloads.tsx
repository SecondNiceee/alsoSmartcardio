'use client'
import React from "react";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import { downloadsButtons } from "../../config";
import PhoneButton from "@/shared/UI/PhoneButton/PhoneButton";
import Image from "next/image";

const Downloads = () => {
  return (
    <section id="downloads" className="downloads">
      <div className="container">
        <header className="downloads__header">
          Скачайте приложение СмартКардио® для работы с прибором
        </header>
        <div className="downloads__buttons">
          {downloadsButtons.map((e, i) => {
            return (
              <PhoneButton
                className="downloads__button"
                svgItem={e.imageName === "apple.svg" ? <Image alt="#" width={32} height={39} src={"/images/apple.svg"} /> : undefined}
                key={i}
                href={e.href}
                imageName={e.imageName}
                text={e.text}
              />
            );
          })}
        </div>
        <div className="downloads__instructions">
          <OrderButton onClick={() => {}} className="instruction-apple">
            <p>Инструкция для пользователей Apple</p>
          </OrderButton>
          <OrderButton onClick={() => {}} className="instruction-assistance">
            <p>Служба поддержки</p>
          </OrderButton>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
