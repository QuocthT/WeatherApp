import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather.js";
import HourlyForecast from "./HourlyForecast.js";
const Weather = () => {
  const [city, setCity] = useState("London"); // Or any other default city
  const [weatherData, setWeatherData] = useState(null);

  const handleLocationClick = (newCity) => {
    setCity(newCity);
  };

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm); // Toggle the form visibility
  };

  const fetchData = async () => {
    try {
      if (city.trim() !== "") {
        const response = await axios.get(
          `https://pro.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=24ce0a767ad303d9567854bce1d17ff5`
        );
        setWeatherData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <div>
      {weatherData ? (
        <>
          <CurrentWeather
            weatherData={weatherData}
            onLocationClick={handleLocationClick}
            showForm={showForm} // Pass the form state
            toggleForm={toggleForm} // Pass the toggle function
          />
          <HourlyForecast onLocationUpdate={city} />
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};
export default Weather;
