import Video from "@/shared/UI/Video/Video";
import React from "react";
import Reveal from "@/shared/UI/Reveal/Reveal";
import TechnologysStoreLink from "../components/TechnologysStoreLink";
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum";



const Technologys = () => {
  return (
    <section className="technologys">
      <div className="container">
        <Reveal character={CHARACTER.UPDOWN}>
          <header dangerouslySetInnerHTML={{__html : "Высокие технологии <br> в повседневной жизни"} } className="technologys__header">
            </header>
        </Reveal>

        <div className="technologys__main">


          <Reveal character={CHARACTER.LEFT} className="technologys__tblock">
            <div className="technologys__tblock-container">
              
              <div className="technologys__description">
                <p className="sub-title font-normal">Прибор СмартКардио®</p>

                <ul className="technologys__benefit text-left flex flex-col gap-7">
                  <li className="sub-title text-left !text-black !font-normal">- <span className="font-semibold">бережёт</span> Ваше время</li>
                  <li className="sub-title text-left !text-black !font-normal">
                    - <span className="font-semibold">помогает</span> снимать показатели, когда это действительно
                    информативно, например, при изменении самочувствия или
                    переменах в образе жизни
                  </li>
                  <li className="sub-title text-left !text-black !font-normal">- <span className="font-semibold">хранит</span> историю ритма Вашего сердца</li>
                </ul>


              <TechnologysStoreLink />
                
              </div>

            </div>

            <img src={"/images/videoLiner.svg"} alt="#" className="video-liner" />

          </Reveal>



          <div className="video__wrapper h-[100%]">
            <Video
              controlsList="nodownload"
              playsInline
              autoPlay
              muted
              loop
              className="video__wrapper"
              videoClassName="technologys__video"
              videoName="chuck.webm"
              type = {"video/webm"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologys;
