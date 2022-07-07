import React from "react";
import "./crossClub.css";
import {
  HeroImg01,
  HeroImg02,
  HeroImg03,
  HeroImg04,
  HeroImg05,
  HeroImg06
} from "../hero";
const CrossClub = () => {
  return (
    <section className="crocs-club">
      <div className="images flex">
        <span>
          <img src={HeroImg01} alt="" className="combineStyle" />
          <h2>#d944()</h2>
        </span>
        <span>
          <img src={HeroImg02} alt="" className="combineStyle" />
          <h2>#3392</h2>
        </span>
        <span>
          <img src={HeroImg03} alt="" className="combineStyle" />
          <h2>#6886</h2>
        </span>
        <span>
          <img src={HeroImg04} alt="" className="combineStyle" />
          <h2>#4304</h2>
        </span>
        <span>
          <img src={HeroImg05} alt="" className="combineStyle" />
          <h2>#9368k</h2>
        </span>
        <span>
          <img src={HeroImg03} alt="" className="combineStyle" />
          <h2>#6886</h2>
        </span>
      </div>
    </section>
  );
};

export default CrossClub;
