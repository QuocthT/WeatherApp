import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ weatherData }) => {
  // Receive weatherData as props

  //Helper function to construct icon URL
  const getIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="current-weather">
      {weatherData && ( // Display only if weatherData exists
        <>
          <img
            src={getIconUrl(weatherData.weather[0].icon)}
            alt={weatherData.weather[0].description}
            className="weather-icon"
          />
          <p className="weather-description">
            {weatherData.weather[0].description}
          </p>
          {/* Add elements for temperature, min/max, etc. later */}
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
