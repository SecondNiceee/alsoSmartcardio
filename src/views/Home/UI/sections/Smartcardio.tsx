import React from "react";
import Header from "./Header";
import SmartcardioButtons from "../components/SmartcardioButtons";
import SmartcardioScrollArrow from "../components/SmartcardioScrollArrow";



const Smartcardio: React.FC = () => {
  return (

    <>

    <div className="smartcardio-wrapper">

      
      {/* <Video controlsList="nodownload" playsInline = {true} autoPlay = {true} muted = {true} loop = {true} darkOpacity = {0.5} className={"smartcardio__video hidden md:block"} poster={"/images/smartcardioStart.png"}  videoName={"smartcardio.mp4"} /> */}
      <Header />
      <section className="smartcardio">
        <div className="container">
          
          <div style={{alignItems : "center", display : "flex", flexDirection : "column"}}>
            <h1 className="smarcardio__header">
              Дашенька
            </h1>
            <h3 dangerouslySetInnerHTML={{__html : `Прости меня ♥`}} className="smartcardio__description">
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
 