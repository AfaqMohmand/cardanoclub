import React from "react";
import "./babyCross.css";
import { TiArrowRightThick } from "react-icons/ti";
import babyCrocsImg from "../../assets/baby-crocs-01.png";
import babyCrocsImg02 from "../../assets/baby-crocs-02.svg";
const BabyCross = () => {
  return (
    <>
      <section className="baby-crocs">
        <div className="grid flex">
          <div className="first-container babycrocs-flex">
            <div className="icons-container">
              <p>[ Coming Soon ]</p>
              <h1>Baby crocs</h1>
              <div className="icons">
                <img src={babyCrocsImg02} alt="" />
                <span className="icon-text"> Breed your own Baby Croc NFT</span>
              </div>
              <div className="icons">
                <img src={babyCrocsImg02} alt="" />
                <span className="icon-text">
                  {" "}
                  Different traits produce different offspring
                </span>
              </div>
              <div className="icons">
                <img src={babyCrocsImg02} alt="" />
                <span className="icon-text">
                  {" "}
                  Watch the egg hatch and grow into your own creation
                </span>
              </div>
              <div className="icons">
                <img src={babyCrocsImg02} alt="" />
                <span className="icon-text">
                  {" "}
                  Who will breed the rarest Croc?
                </span>
              </div>
            </div>
          </div>
          <div className="second-container">
            <img src={babyCrocsImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BabyCross;
