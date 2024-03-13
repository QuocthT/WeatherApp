import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "./HourlyForecast.css";

const HourlyForecast = ({ currentLocation }) => {
  const [hourlyData, setHourlyData] = useState([]);
  const [error, setError] = useState(null);

  const openWeatherKey = "24ce0a767ad303d9567854bce1d17ff5";

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

    // Filter for the next 24 hours with 3-hour intervals
    const futureForecast = forecastResponse.data.list.filter((item, index) => {
      const forecastTime = moment.unix(item.dt);
      const now = moment();
      const twentyFourHoursFromNow = moment().add(24, "hours");

      return (
        forecastTime.isAfter(now) &&
        forecastTime.isBefore(twentyFourHoursFromNow) &&
        index % 3 === 0
      );
    });

    // Update hourly data
    setHourlyData(
      futureForecast.map((item) => ({
        timePeriod: moment.unix(item.dt).format("h a - "), // Example: 3 PM -
        icon: item.weather[0].icon,
        temp: item.main.temp,
      }))
    );
  };

  useEffect(() => {
    console.log("City in HourlyForecast:", currentLocation);
    fetchHourlyData(currentLocation);
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
              <div>{hourData.timePeriod}</div>
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
