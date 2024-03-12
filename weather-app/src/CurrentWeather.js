import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ weatherData }) => {
  // Helper function to construct icon URL
  const getIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/wn/09d@2x.png`;
  };

  return (
    <div className="current-weather">
      {weatherData && ( // Display only if weatherData exists
        <>
          <div className="location">{weatherData.name}</div> {/* Location */}
          <div className="current-conditions">
            <img
              src={getIconUrl(weatherData.weather[0].icon)}
              alt={weatherData.weather[0].description}
              className="weather-icon"
            />
            <div className="temperature">{weatherData.main.temp}°C</div>
            <div className="weather-description">
              {weatherData.weather[0].description}
            </div>
          </div>
          <div className="min-max">
            Min: {weatherData.main.temp_min}°C / Max:{" "}
            {weatherData.main.temp_max}°C
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
