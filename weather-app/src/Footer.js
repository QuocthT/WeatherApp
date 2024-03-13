// Footer.js
import React, { useState } from "react";
import "./Footer.css";
import { ReactComponent as HomeButton } from "./HomeButton.svg";
import { ReactComponent as Plant } from "./plant.svg";
import { ReactComponent as BurgerMenu } from "./BurgerMenu.svg";
import ReactDOM from 'react-dom/client';
import Main from './Right'
import App from './App';
import Left from './left/LeftPage'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Footer() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonIndex) => {
    if(buttonIndex === 2){
      root.render(
        <React.StrictMode>
          <Main />
        </React.StrictMode>
      );
    }else if(buttonIndex === 1){ 
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    }
    else if(buttonIndex === 0){ 
      root.render(
        <React.StrictMode>
          <Left />
        </React.StrictMode>
      );
    }
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
