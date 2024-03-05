// Footer.js
import React, { useState } from "react";
import "./Footer.css";
import { ReactComponent as HomeButton } from "./HomeButton.svg";
import { ReactComponent as Plant } from "./plant.svg";
import { ReactComponent as BurgerMenu } from "./BurgerMenu.svg";

function Footer() {
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <footer className="app-footer">
      <button
        className={`footer-button ${activeButton === 0 ? "active" : ""}`}
        onClick={() => handleClick(0)}
      >
        <Plant />
      </button>
      <button
        className={`footer-button ${activeButton === 1 ? "active" : ""}`}
        onClick={() => handleClick(1)}
      >
        <HomeButton />
      </button>
      <button
        className={`footer-button ${activeButton === 2 ? "active" : ""}`}
        onClick={() => handleClick(2)}
      >
        <BurgerMenu />
      </button>
    </footer>
  );
}

export default Footer;
