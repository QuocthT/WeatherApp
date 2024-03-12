import React, { useState } from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({
  weatherData,
  onLocationClick,
  showForm,
  toggleForm,
}) => {
  const [locationInput, setLocationInput] = useState("");

  const getIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const handleInputChange = (e) => {
    setLocationInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLocationClick(locationInput);
    setLocationInput(""); // Clear input
    toggleForm(); // Hide form after submitting
  };

  return (
    <div className="current-weather">
      {weatherData && (
        <>
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
          <div className="location" onClick={toggleForm}>
            {weatherData.name}
          </div>

          {showForm && (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={locationInput}
                onChange={handleInputChange}
                placeholder="Enter new location"
              />
              <button type="submit">Change Location</button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
