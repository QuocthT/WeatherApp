import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HourlyForecast.css";

const HourlyForecast = ({ currentLocation }) => {
  const [hourlyData, setHourlyData] = useState([]);
  const [error, setError] = useState(null);

  const openWeatherKey = "24ce0a767ad303d9567854bce1d17ff5";

  const extractHourFromTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    return hours < 10 ? `0${hours}:00` : `${hours}:00`;
  };

  // Function to filter only today's forecast data
  const filterTodaysData = (forecastData) => {
    const today = new Date();
    const todayStr = today.toISOString().slice(0, 10);

    return forecastData.list.filter((item) => {
      const forecastDateStr = item.dt_txt.slice(0, 10);
      return forecastDateStr === todayStr;
    });
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

    // Filter for today's data
    const todaysForecast = filterTodaysData(forecastResponse.data);

    // Update hourly data with 3-hourly intervals
    setHourlyData(
      todaysForecast.map((item) => ({
        hour: extractHourFromTimestamp(item.dt),
        icon: item.weather[0].icon,
        temp: item.main.temp,
      }))
    );
  };

  useEffect(() => {
    fetchHourlyData();
  }, [fetchHourlyData, currentLocation]);

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
