
import React from "react";
import Header from "./Header";
import Video from "@/shared/UI/Video/Video";
import Reveal, { CHARACTER } from "@/shared/UI/Reveal/Reveal";
import SmartcardioButtons from "../components/SmartcardioButtons";
import SmartcardioScrollArrow from "../components/SmartcardioScrollArrow";



const Smartcardio: React.FC = () => {
  return (

    <>

    <div className="smartcardio-wrapper">
      <Video
        poster="images/smartcardioStart.png"
        controlsList="nodownload"
        playsInline
        autoPlay
        muted
        loop
        darkOpacity={0.5}
        videoName="smartardio.mp4"
        className="smartcardio__video"
      />
      <Header />
      <section className="smartcardio">
        <div className="container">
          <Reveal start = {true} character={CHARACTER.DOWNUP} style={{alignItems : "center", display : "flex", flexDirection : "column"}}>
            <h1 className="smarcardio__header">
              СмартКардио <span>®</span>
            </h1>
            <h3 className="smartcardio__description">
              <span>Первое в мире</span> устройство, регистрирующее одновременно
              ЭКГ, сатурацию и пульсовую волну без геля и проводов.
            </h3>
            <div className="smartcardio__buttons">
              <SmartcardioButtons />
            </div>
              <SmartcardioScrollArrow />
          </Reveal>
        </div>
      </section>
    </div>
    </>
  );
};

export default Smartcardio;
 