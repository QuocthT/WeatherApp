import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./HourlyForecast.css";

const HourlyForecast = ({ currentLocation }) => {
  const [hourlyData, setHourlyData] = useState([]);
  const [error, setError] = useState(null);
  const prevLocation = useRef(currentLocation);
  const openWeatherKey = "24ce0a767ad303d9567854bce1d17ff5";

  const fetchHourlyData = async (location) => {
    console.log("fetchHourlyData called with location:", location);
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

    console.log("API Response:", forecastResponse.data);
    // Filter for the next 24 hours with 3-hour intervals
    const futureForecast = forecastResponse.data.list.filter((item, index) => {
      const forecastDate = new Date(item.dt * 1000); // Convert Unix timestamp
      const now = new Date();
      const threeHoursFromNow = new Date(now.getTime() + 3 * 60 * 60 * 1000);

      return (
        forecastDate >= now &&
        forecastDate <= threeHoursFromNow &&
        index % 3 === 0
      );
    });

    // Update hourly data
    setHourlyData(
      futureForecast.map((item) => ({
        timePeriod: new Date(item.dt * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        icon: item.weather[0].icon,
        temp: item.main.temp,
      }))
    );
  };

  useEffect(() => {
    console.log(
      "useEffect triggered, City in HourlyForecast:",
      currentLocation
    );
    if (prevLocation.current !== currentLocation) {
      fetchHourlyData();
      prevLocation.current = currentLocation;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

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
