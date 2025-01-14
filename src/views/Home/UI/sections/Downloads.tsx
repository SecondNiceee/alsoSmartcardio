'use client'
import React from "react";
import OrderButton from "@/shared/UI/OrderButton/OrderButton";
import { downloadsButtons } from "../../config";
import PhoneButton from "@/shared/UI/PhoneButton/PhoneButton";
import Reveal, { CHARACTER } from "@/shared/UI/Reveal/Reveal";
import AppleSvg from "../components/AppleSvg";

const Downloads = () => {
  return (
    <section id="downloads" className="downloads">
      <Reveal character={CHARACTER.LEFT} className="container">
        <header className="downloads__header">
          Скачайте приложение СмартКардио® для работы с прибором
        </header>
        <div className="downloads__buttons">
          {downloadsButtons.map((e, i) => {
            return (
              <PhoneButton
                className="downloads__button"
                svgItem={e.imageName === "apple.svg" ? <AppleSvg />: undefined}
                key={i}
                href={e.href}
                imageName={e.imageName}
                text={e.text}
              />
            );
          })}
        </div>
        <div className="downloads__instructions">
          <OrderButton externalLink="/videos/iphone_manual.mp4" externalProps={{"download" : true}} className="instruction-apple cursor-pointer">
              <p>Инструкция для пользователей Apple</p>
            </OrderButton>
          <OrderButton externalLink="https://docs.google.com/forms/d/e/1FAIpQLSckBhbLZ3GKHS9o6sSJaQITfN0QE5j1xOviRrgBVbS7Q99HJA/viewform?usp=send_form" className="instruction-assistance cursor-pointer">
            <p>Служба поддержки</p>
          </OrderButton>
        </div>
      </Reveal>
    </section>
  );
};

export default Downloads;
