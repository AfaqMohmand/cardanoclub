import React from "react";
import "./info.css";
import InfoCard from "./InfoCard";
import info01 from "../../assets/info-01.png";
const Info = () => {
  return (
    <>
      <section className="info">
        <h1>[Info]</h1>
        <div className="grid04 flex">
          <div className="media-childTwo-first">
            <InfoCard infoImg={info01} infoText="CNFT.io" />
          </div>
          <div className="second-child media-childTwo-second">
            <InfoCard infoImg={info01} infoText="JPEG.STORE" />
          </div>
          <div className="second-child media-childTwo-first">
            <InfoCard infoImg={info01} infoText="CNFT.Tools" />
          </div>
          <div className="media-childFouth-first">
            <InfoCard infoImg={info01} infoText="OpenCnft.io" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
