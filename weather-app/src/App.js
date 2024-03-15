// App.js

import React, { useState } from "react";

import Home from "./pages/Home/HomePage.js";
import Forecast from "./pages//Home/detailed_forecast.js";
import Recommendation from "./pages//Reccomendations/recommendation.js";
import PlantImage from "./images/plant.svg";
import BurgerMenuImage from "./images/BurgerMenu.svg";
import HomeButtonImage from "./images/HomeButton.svg";
import sunny from "./images/sunny.jpg";
import rainy from "./images/rainy.jpg";
import cloudy from "./images/clouds.jpg";
import snowy from "./images/snowy.jpg";
import "./App.css";
import CurrentWeather2 from "./pages/Home/CurrentWeather2.js";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [bg, setBg] = useState(cloudy); // Initial background
  const [currentData] = useState(null);

  const updateBackground = (weatherMain) => {
    switch (weatherMain) {
      case "rain":
        setBg(rainy);
        break;
      case "clouds":
        setBg(cloudy);
        break;
      case "snow":
        setBg(snowy);
        break;
      default:
        setBg(sunny);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <div>
        <div className="content">
          {currentPage === "home" && <Home />}
          {currentPage === "detailed_forecast" && <Forecast />}
          {currentPage === "recommendation" && <Recommendation />}
        </div>
        <div className="bottom-buttons">
          <img
            src={PlantImage}
            alt="Plant"
            onClick={() => handlePageChange("recommendation")}
          />
          <img
            src={HomeButtonImage}
            alt="Home Button"
            onClick={() => handlePageChange("home")}
          />
          <img
            src={BurgerMenuImage}
            alt="Burger Menu"
            onClick={() => handlePageChange("detailed_forecast")}
          />
        </div>

        <CurrentWeather2
          data={currentData}
          updateBackground={updateBackground}
        />
      </div>
    </div>
  );
};

export default App;
