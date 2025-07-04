import React from "react";
import Header from "./Header";
import SmartcardioButtons from "../components/SmartcardioButtons";
import SmartcardioScrollArrow from "../components/SmartcardioScrollArrow";

import ResponsiveVideo from "@/shared/UI/ResponsiveVideo/ResponsiveVideo";


const Smartcardio: React.FC = () => {
  return (

    <>

    <div className="smartcardio-wrapper">

      <ResponsiveVideo darkOpacity={0.5}  posterSmall="/images/small-start.webp" posterMedim={'/images/smartcardioStart.webp'} videoProps={
        {
        controlsList:"nodownload",
        playsInline : true,
        autoPlay : true,
        muted : true,
        loop : true
      }
      } videoName="smartcardio.mp4"  className="smartcardio__video" />

      
      {/* <Video controlsList="nodownload" playsInline = {true} autoPlay = {true} muted = {true} loop = {true} darkOpacity = {0.5} className={"smartcardio__video hidden md:block"} poster={"/images/smartcardioStart"}  videoName={"smartcardio.mp4"} /> */}
      <Header />
      <section className="smartcardio">
        <div className="container">
          
          <div style={{alignItems : "center", display : "flex", flexDirection : "column"}}>
            <h1 className="smarcardio__header">
              СмартКардио <span>®</span>
            </h1>
            <h3 dangerouslySetInnerHTML={{__html : `<span>Первое в мире</span> устройство, регистрирующее одновременно
              ЭКГ, сатурацию и пульсовую волну <br style = {{display : "none"}}> без геля и проводов.`}} className="smartcardio__description">
            </h3>
            <div className="smartcardio__buttons">
              <SmartcardioButtons />
            </div>
              <SmartcardioScrollArrow />
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Smartcardio;
 