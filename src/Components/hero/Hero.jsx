import React from "react";
import "./hero.css";
import {
  HeroImg01,
  HeroImg02,
  HeroImg03,
  HeroImg04,
  HeroImg05,
  HeroImg06,
  HeroImg07,
  HeroImg08,
  HeroImg09
} from "./index";
const Hero = () => {
  return (
    <>
      <section className="hero container grid">
        <div className="hero-content-section flex">
          <div>
            <h1 className="first-heading font-vg">WELCOME TO</h1>
            <h1 className="second-heading font-vg">
              THE <span>SWAMP</span>
            </h1>
            <p className="first-child">
              The web3 social swamp where your NFT doubles as your membership
              token to the Cardano Crocs Club.
            </p>
            <p className="second-child">
              The CCC ecosystem is ever-expanding and new experiences are only
              available to CCC members. As the ecosystem grows, members will
              gain access to the Croc Arcade, gaming incubator, online poker
              game, exclusive merch drops, and Swamp-only digital & real-world
              experiences.
            </p>
            <div className="policy">
              <p>$C4 policy ID:</p>
              <p>a00fdf4fb9ab6c8c2bd1533a2f14855edf12aed5ecbf96d4b5f5b939</p>
            </div>
          </div>
        </div>
        <div className="hero-image-section flex grid02">
          <div className="hero-image-section__first">
            <img src={HeroImg01} alt="" className="combine-img" />
            <img src={HeroImg02} alt="" className="combine-img" />
            <img src={HeroImg03} alt="" className="combine-img" />
          </div>
          <div className="flex-02">
            <img src={HeroImg04} alt="" className="hero-image-section_second" />
            <img src={HeroImg05} alt="" className="hero-image-section_second" />
            <img src={HeroImg06} alt="" className="hero-image-section_second" />
          </div>
          <div>
            <img src={HeroImg07} alt="" />
            <img src={HeroImg08} alt="" />
            <img src={HeroImg09} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
