import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HourlyForecast.css";

const HourlyForecast = () => {
  const [hourlyData, setHourlyData] = useState([]);
  const [error, setError] = useState(null);

  const openWeatherKey = "24ce0a767ad303d9567854bce1d17ff5";

  const extractHourFromTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
    const hours = date.getHours();
    return hours < 10 ? `0${hours}:00` : `${hours}:00`; // Add leading zero if needed
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchHourlyData = async (location) => {
    setError(null);
    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchHourlyDataWithCoords(latitude, longitude);
        },
        (error) => {
          setError(error); // Handle geolocation error
        }
      );
    } catch (error) {
      setError(error);
    }
  };

  const fetchHourlyDataWithCoords = async (latitude, longitude) => {
    const forecastResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${openWeatherKey}&units=metric`
    );
    setHourlyData(
      forecastResponse.data.list.slice(0, 8).map((item) => ({
        hour: extractHourFromTimestamp(item.dt_txt),
        icon: item.weather[0].icon,
        temp: item.main.temp,
      }))
    );
  };

  useEffect(() => {
    fetchHourlyData();
  }, [fetchHourlyData]);
  return (
    <div className="hourly-forecast">
      {error ? (
        <p>Error fetching hourly data</p>
      ) : hourlyData.length === 0 ? (
        <p>Loading hourly data...</p>
      ) : (
        <div className="hourly-forecast-container">
          {hourlyData.map((hourData, index) => (
            <div className="hourly-item" key={index}>
              <div>{hourData.hour}</div>
              <img
                src={`http://openweathermap.org/img/wn/${hourData.icon}@2x.png`}
                alt={hourData.description}
              />
              <div>{hourData.temp}°C</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HourlyForecast;
