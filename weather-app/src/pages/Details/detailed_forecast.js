import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./detailed_forecast.css";

const Search = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=46b4e1f330aeb5aa3194e803bf334549`
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div id="container">
      <form id="searchBox" onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
      </form>
      {weatherData ? (
        <>
          <div id="details" className="bigBox">
            <div id="outer">
              <div id="title">Details</div>
              <div>
                <img
                  src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                  alt="Weather"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div id="inner">
              <div id="feel" className="box">
                Feels Like: {weatherData.main.feels_like}°C
              </div>
              <div id="humidity" className="box">
                Humidity: {weatherData.main.humidity}%
              </div>
              <div id="visibility" className="box">
                Visibility: {weatherData.visibility}m
              </div>
              <div id="pressure" className="box">
                Atmospheric Pressure: {weatherData.main.pressure} hPa
              </div>
              <div id="speed" className="box">
                Wind Speed: {weatherData.wind.speed}m/s
              </div>
            </div>
          </div>
          <div id="section1">
            <div id="airQuality" className="box">
              Cloudiness: {weatherData.clouds.all}%
            </div>
            <div id="direction" className="box">
              Wind Direction: {weatherData.wind.deg}°
            </div>
          </div>
          <div id="section2">
            <div id="sunrise" className="box">
              Sunrise:{" "}
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div id="sunset" className="box">
              Sunset:{" "}
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </>
      ) : (
        <div id="loading">Enter City Name</div>
      )}
    </div>
  );
};

function Main() {
  return (
    <div className="main">
      <header className="App-header"></header>
      <Search />
    </div>
  );
}

export default Main;
