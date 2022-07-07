import React from "react";
import "./utilities.css";
const UtilityCard = ({ utilityImg, utilityText }) => {
  return (
    <>
      <section className="utility-card">
        <img src={utilityImg} alt="" />
        <p>{utilityText}</p>
      </section>
    </>
  );
};

export default UtilityCard;
