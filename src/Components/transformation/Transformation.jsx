import React from "react";
import "./transformation.css";
import transformationOne from "../../assets/transformation-01.png";
const Transformation = () => {
  return (
    <>
      <section className="transformation">
        <div className="grid flex">
          <div className="trans-container-one">
            <img src={transformationOne} alt="" />
          </div>
          <div className="trans-container-two trans-flex-column">
            <h4 className="container-two__first-h1">[ Transformation ]</h4>
            <h4 className="container-two__second-h2">The Burn</h4>
            <h4 className="container-two__first-p">
              {" "}
              Cardano Crocs Club started as a collection of 10,000 NFTs. But
              then something interesting happened: The Burn.
            </h4>
            <h4>
              The Burn is known as the largest NFT burn in Cardano history. Over
              5,000+ <br></br>Crocs were sent to be burned, disappearing forever
              from the blockchain. This occurred in phase 2 of our roadmap,
              where owners were given the choice to burn 2 Crocs in exchange for
              1 new Croc. The odds were 50/50 chance you got a rare Croc or
              common Croc. To make things even more interesting, you also had
              the chance to pull a Special Edition Croc. The burn introduced new
              Croc traits to the original collection and reduced total croc
              supply in circulation. The burning phase is over and rarity
              rankings are now final. All 7,700 Crocs are part of the OG Crocs
              Collection.
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Transformation;
