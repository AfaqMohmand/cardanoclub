import React, { useState } from "react";
import { MenuItems } from "./MenuItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import "./header.css";
import { IconsSvg } from "./SvgLogo";
import { SvgRounded } from "./SvgRounded";
const Header = () => {
  const [currentState, setState] = useState({ clicked: false });
  // const handleClick = () => {
  //   setState({ clicked: !clicked });
  // };
  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <IconsSvg />
        </h1>
        <div className="menu-icon">
          <i className={currentState ? <ImCross /> : <GiHamburgerMenu />}></i>
        </div>
        <ul className={currentState ? "nav-menu active " : "nav-menu"}>
          {MenuItems.map((indItem, index) => {
            return (
              <li key={index}>
                <a className={indItem.cName} href={indItem.url}>
                  <sup>{indItem.number}</sup> {indItem.title}
                </a>
              </li>
            );
          })}
        </ul>
        <h1 className="last-item">
          <SvgRounded />
        </h1>
      </nav>
    </>
  );
};

export default Header;
