import React, { useState, useEffect } from 'react';
import './Map.css';

const Map = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9dd77ed418cc13a9dea204f8b91aaf61`
      );
      const data = await response.json();
      setWeatherData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="weather-map-container">
      {weatherData && (
        <div className="weather-info">
          <h2>Weather in London, UK</h2>
          <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Weather: {weatherData.weather[0].main}</p>
        </div>
      )}
      <div className="map-container">
        <img
          src="https://i.pinimg.com/736x/14/af/4b/14af4b1680f5651f6b75b1f765260ac4.jpg"
          alt="Map of England"
          className="map-image"
        />
      </div>
    </div>
  );
};

export default Map;
