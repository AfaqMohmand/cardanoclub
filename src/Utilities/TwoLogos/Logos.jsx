import React from "react";
import { GameIcon } from "./GameIcon";
import { TwitterIcon } from "./TwitterIcon";
import "./TwoLogos.css";
const Logos = () => {
  return (
    <section className="two-logos">
      <ul>
        <li>
          <span className="twitter-icon">
            <a href="#">
              <TwitterIcon />
            </a>
          </span>
          <span>
            <a href="#">
              <GameIcon />
            </a>
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Logos;
