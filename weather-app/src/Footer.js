import React from "react";
import "./Footer.css";
import { ReactComponent as HomeButton } from "./images/HomeButton.svg";
import { ReactComponent as Plant } from "./images/plant.svg";
import { ReactComponent as BurgerMenu } from "./images/BurgerMenu.svg";

function Footer(props) {
  // Add props parameter

  return (
    <footer className="app-footer">
      <button
        className={`footer-button`}
        onClick={() => props.onPageChange("recommendation")} // Pass intent to parent
      >
        <Plant />
      </button>
      <button
        className={`footer-button`}
        onClick={() => props.onPageChange("home")}
      >
        <HomeButton />
      </button>
      <button
        className={`footer-button`}
        onClick={() => props.onPageChange("detailed_forecast")}
      >
        <BurgerMenu />
      </button>
    </footer>
  );
}

export default Footer;
