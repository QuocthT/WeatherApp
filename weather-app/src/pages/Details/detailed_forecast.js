import React, { useEffect, useState } from "react";
import axios from "axios";
import "./detailed_forecast.css";
import sunrise from  "./sunrise.svg";
import wind from "./wind.svg";
import cloud from "./cloudiness.svg";

function Detailed_Forecast({ city }) {
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
          <div id="details" className="bigBox common-section">
            <div id="outer">
              <div className="title">Details</div>
              <div>
                <img
                  src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                  alt="Weather"
                />
              </div>
              <div className="location">{city}</div>
            </div>
            <div id="inner">
              <div id="feel" className="box1">
                Feels Like: <span className="value"> {weatherData.main.feels_like}°C</span>
              </div>
              <div id="humidity" className="box1">
                Humidity: <span className="value">{weatherData.main.humidity}% </span>
              </div>
              <div id="visibility" className="box1">
                Visibility: <span className="value">{weatherData.visibility}m </span>
              </div>
              <div id="pressure" className="box1">
                Atmospheric <div>Pressure:</div> <span className="value">{weatherData.main.pressure} hPa </span>
              </div>
              <div id="speed" className="box1">
                Wind Speed: <span className="value">{weatherData.wind.speed}m/s </span>
              </div>
            </div>
          </div>
          <div id="section1" className="common-section">
            <div id="cloudiness" className="box">
              <div className="title">Cloudiness </div>
              <div>
                <img src={cloud} alt="cloud" />
              </div>
              <div className="data">{weatherData.clouds.all}%</div>
            </div>
            <div id="line">
            </div>
            <div id="wind" className="box">
              <div className="title">Wind Direction</div>
              <div>
                <img src={wind} alt="cloud" />
              </div>
              <div className="data">{weatherData.wind.deg}°</div>
            </div>
          </div>
          <div className="common-section riseAndSet">
            <div className="title">Sunrise and Sunset</div>
          <div id="section2" >
            <div id="sunrise">
              
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
            <div id="image" >
                <img src={sunrise} alt="sunrise"  />
            </div>
            <div id="sunset">
              
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
          </div>
        </>
      ) : (
        <div id="loading">Enter City Name</div>
      )}
    </div>
  );
}

export default Detailed_Forecast;
