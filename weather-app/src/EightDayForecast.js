import React from "react";
import "./EightDayForecast.css";

const EightDayForecast = () => {
  return (
    <div className="eight-day-forecast">
      <div className="forecast-day">
        <p className="day">Mon</p>
        <img src={require("./sun.svg")} alt="Sunny" className="weather-icon" />
        {""}
        <p className="temp-min">18°</p>
        <div className="temp-divider"></div>
        <p className="temp-max">25°</p>
      </div>
      {/* Add more forecast-day divs for other days */}
    </div>
  );
};

export default EightDayForecast;
