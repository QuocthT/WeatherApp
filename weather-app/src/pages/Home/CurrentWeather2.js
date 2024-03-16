import React from "react";
import "./CurrentWeather2.css";

const CurrentWeather2 = ({ data, updateBackground }) => {
  /* useEffect(() => {
    if (data && data.weather && data.weather.length > 0) {
      const weatherMain = data.weather[0].main.toLowerCase();
      updateBackground(weatherMain); // Pass the weather main to the parent component
    }
  }, [data, updateBackground]); */

  if (!data) return null;

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
        <span>{main.temp.toFixed()}°</span>
      </div>
      <div className="weather-info">
        <div>
          <div className="weather-description">
            <span>{weather[0].description}</span>
          </div>
          <div>
            <span className="max-mini">Min : {main.temp_min.toFixed()}°</span>
            <span className="max-mini">Max : {main.temp_max.toFixed()}°</span>
          </div>

          <div className="location">
            <span>{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather2;
