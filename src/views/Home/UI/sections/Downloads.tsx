
import React from "react";
import { downloadsButtons } from "../../config";
import PhoneButton from "@/shared/UI/PhoneButton/PhoneButton";
import Reveal from "@/shared/UI/Reveal/Reveal";
import AppleSvg from "../components/AppleSvg";
import DownloadsButtons from "../components/DownloadsButtons";
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum";

const Downloads = () => {
  return (
    <section id="downloads" className="downloads">
      <div className="container">
        <header dangerouslySetInnerHTML={{__html : "Скачайте приложение СмартКардио® <br> для работы с прибором"}} className="downloads__header">
          
        </header>
        <Reveal character={CHARACTER.RIGHT} className="downloads__buttons">
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
        </Reveal>
        <DownloadsButtons />
      </div>
    </section>
  );
};

export default Downloads;
