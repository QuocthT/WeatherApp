import React from "react";

const CurrentWeather = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const weatherIconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="current-weather">
      <h2>{data.name}</h2>
      <div className="current-main">
        <img src={weatherIconUrl} alt={data.weather[0].description} />
        <div className="current-temp">
          {Math.round(data.main.temp)}°C
          <span className="description">{data.weather[0].description}</span>
        </div>
      </div>
      <div className="current-minmax">
        <span>Min: {Math.round(data.main.temp_min)}°C</span>
        <span>Max: {Math.round(data.main.temp_max)}°C</span>
      </div>
    </div>
  );
};

export default CurrentWeather;
