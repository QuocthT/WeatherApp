// Footer.js
import React from "react";
import "./Footer.css"; // Create this file next
import { ReactComponent as HomeButton } from "./HomeButton.svg";
import { ReactComponent as Plant } from "./plant.svg";
import { ReactComponent as BurgerMenu } from "./BurgerMenu.svg";

function Footer() {
  return (
    <footer className="app-footer">
      {
        <>
          <button className="footer-button">
            <Plant />
          </button>
          <button className="footer-button">
            <HomeButton />
          </button>
          <button className="footer-button">
            <BurgerMenu />
          </button>
        </>
      }
    </footer>
  );
}

export default Footer;
