import React from "react";
import "./rewards.css";
import rewardsFirstImg from "../../assets/rewards-01.png";
const Rewards = () => {
  return (
    <>
      <section className="rewards">
        <div className="grid flex">
          <div className="rewards-container-one rewards-flex-column">
            <h6 className="container-two__first-h6">[ Special Rewards ]</h6>
            <h6 className="container-two__second-h6">
              $C4:CCC's <br /> Utility Coin
            </h6>
            {/* <h6 className="container-two__third-h6">
              {" "}
              Cardano Crocs Club started as a collection of 10,000 NFTs. But
              then something interesting happened: The Burn.
            </h6> */}
            <h6 className="container-two__fourth-h6">
              Cardano Crocs Club was the first NFT collection to introduce NFT
              staking! Stake your Croc and earn $C4 tokens. $C4 tokens fuel the
              CCC Swamp ecosystem. $C4’s are the key to every part of the Croc
              Swamp Ecosystem like the Croc Arcade, the CCC Poker Game, and Baby
              Croc breeding. They’re also how we give back to you with passive
              rewards.
            </h6>
          </div>
          <div className="rewards-container-two">
            <img src={rewardsFirstImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Rewards;
