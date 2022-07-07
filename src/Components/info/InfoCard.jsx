import React from "react";
import "./info.css";
const InfoCard = ({ infoImg, infoText }) => {
  return (
    <>
      <section className="info-card">
        {console.log(infoImg)}
        <img src={infoImg} alt="" />
        <h5>{infoText}</h5>
      </section>
    </>
  );
};

export default InfoCard;
