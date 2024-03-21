import React, { useEffect } from "react";
import "./CurrentWeather2.css";

const CurrentWeather2 = ({ data, updateBackground }) => {
  useEffect(() => {
    if (data && data.weather && data.weather.length > 0) {

      // Extract the main weather condition
      const weatherMain = data.weather[0].main.toLowerCase();

      // Initialize a variable to store the CSS class name for the background
      let bgClass = "";

      // Set the background class based on the weather condition
      switch (weatherMain) {
        case "rain":
          bgClass = "rainy";
          break;
        case "clouds":
          bgClass = "cloudy";
          break;
        case "snow":
          bgClass = "snowy";
          break;
        default:
          bgClass = "sunny";
      }

      // Apply the background class to the "app-container" element
      document.getElementById("app-container").classList = bgClass;
    }
  }, [data]); // Re-run the effect when the data changes

  // Return null if weather data is not yet available
  if (!data) return null;

  // Destructure weather data for easier access
  const { main, weather, name } = data;

  return (
    <div className="current-weather">
      <div className="weather-icon">
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt="Weather Icon"
        />
      </div>

      <div className="temperature">
        <span>{Math.round(main.temp)}°</span> {/* Display main temperature */}
      </div>
      <div className="weather-info">
        <div>
          <div className="weather-description">
            <span>{weather[0].description}</span> {/* Display weather description */}
          </div>
          <div>
            <span className="max-mini">Min : {main.temp_min.toFixed()}°</span>
            <span className="max-mini">Max : {main.temp_max.toFixed()}°</span>
            {/* Display min and max temperatures */}
          </div>

          <div className="location">
            <span>{name}</span> {/* Display location name */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather2;
