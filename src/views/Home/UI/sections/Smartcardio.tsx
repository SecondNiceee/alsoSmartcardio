import React from "react";
import Header from "./Header";
import Reveal from "@/shared/UI/Reveal/Reveal";
import SmartcardioButtons from "../components/SmartcardioButtons";
import SmartcardioScrollArrow from "../components/SmartcardioScrollArrow";
import ResponsiveVideo from "@/shared/UI/ResponsiveVideo/ResponsiveVideo";
import { CHARACTER } from "@/shared/UI/Reveal/models/CharacterEnum";



const Smartcardio: React.FC = () => {
  return (

    <>

    <div className="smartcardio-wrapper">

      <ResponsiveVideo imageLoading="eager" darkOpacity={0.5}  imageHeight={500} imageWidth={576} poster={'/images/smartcardioStart.png'} videoProps={
        {
        controlsList:"nodownload",
        playsInline : true,
        autoPlay : true,
        muted : true,
        loop : true
      }
      } videoName="smartcardio.mp4"  className="smartcardio__video" />
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
 