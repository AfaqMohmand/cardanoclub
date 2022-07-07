import React from "react";
import "./utilities.css";
import {
  utilityImg01,
  utilityImg02,
  utilityImg03,
  utilityImg04,
  utilityImg05,
  utilityImg06,
  utilityImg07,
  utilityImg08,
  utilityImg09,
  utilityImg10,
  utilityImg11,
  utilityImg12
} from "./index";
import UtilityCard from "./UtilityCard";
const Utility = () => {
  return (
    <>
      <section className="utility">
        <h2>[Utility]</h2>
        <div className="grid04 flex">
          <div className="media-childTwo-first">
            <UtilityCard
              utilityImg={utilityImg01}
              utilityText="Premium level membership level"
            />
          </div>
          <div className="downward media-second media-childTwo-second">
            <UtilityCard
              utilityImg={utilityImg02}
              utilityText="Whitelist access to RA Crocs"
            />
          </div>
          <div className="downward media-childTwo-first">
            <UtilityCard
              utilityImg={utilityImg03}
              utilityText="One free parcel of land per OG Croc held"
            />
          </div>
          <div className="media-fourth media-childFouth-first">
            <UtilityCard
              utilityImg={utilityImg04}
              utilityText="Highest Daily $C4 Token Staking Rewards"
            />
          </div>
        </div>
        <div className="grid04 flex utility-second-container">
          <div className="media-childTwo-first">
            <UtilityCard
              utilityImg={utilityImg05}
              utilityText="Access to the Croc Arcade, Play to Earn Games"
            />
          </div>
          <div className="downward media-childTwo-second">
            <UtilityCard utilityImg={utilityImg06} utilityText="$C4 Store" />
          </div>
          <div className="downward media-childTwo-first ">
            <UtilityCard utilityImg={utilityImg07} utilityText="Metaverse" />
          </div>
          <div className="media-childFouth-first">
            <UtilityCard
              utilityImg={utilityImg08}
              utilityText="Croc Breeding Game"
            />
          </div>
        </div>
        <div className="grid04 flex utility-third-container">
          <div className="utility-09 media-childTwo-first">
            <UtilityCard
              utilityImg={utilityImg09}
              utilityText="Ability to breed Baby Crocs"
            />
          </div>
          <div className="downward media-childTwo-second">
            <UtilityCard
              utilityImg={utilityImg10}
              utilityText="Gaming Incubator"
            />
          </div>
          <div className="downward media-childTwo-first">
            <UtilityCard
              utilityImg={utilityImg11}
              utilityText="OG Croc only merch drops"
            />
          </div>
          <div className="media-childFouth-first">
            <UtilityCard
              utilityImg={utilityImg12}
              utilityText="Voting on Croc Community Chest"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Utility;
