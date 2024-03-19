import React, { useEffect, useState } from "react";
import axios from "axios";
import "./detailed_forecast.css";

function Main({ city }) {
  // Receive city as a prop
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a44d3dff57de62f60c1d1a9793f439d5`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (city) {
      // Check if city exists before fetching
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <div id="container">
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
              <div className="location">{city}</div>
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
              Cloudiness:
              <div className="data">{weatherData.clouds.all}%</div>
            </div>
            <div id="direction" className="box">
              <div id="words">Wind Direction:</div>
              <div className="data">{weatherData.wind.deg}°</div>
            </div>
          </div>
          <div id="section2">
            <div id="sunrise" className="box">
              Sunrise:
              <div className="data">
                {" "}
                {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                  [],
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}
              </div>
            </div>
            <div id="sunset" className="box">
              Sunset:
              <div className="data">
                {" "}
                {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                  [],
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div id="loading">Enter City Name</div>
      )}
    </div>
  );
}

export default Main;
