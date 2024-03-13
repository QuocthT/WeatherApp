import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather.js";
import HourlyForecast from "./HourlyForecast.js";
const Weather = () => {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState(null);
  const [geocodingData, setGeocodingData] = useState(null);

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
        // Step 1: Geocode the location
        const geocodingResponse = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=24ce0a767ad303d9567854bce1d17ff5`
        );
        setGeocodingData(geocodingResponse.data[0]);

        // Step 2: Fetch weather data
        const { lat, lon } = geocodingResponse.data[0];
        const forecastResponse = await axios.get(
          `https://pro.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=24ce0a767ad303d9567854bce1d17ff5`
        );
        setWeatherData(forecastResponse.data);
      }
    } catch (error) {
      console.error("Error fetching weather or geocoding data:", error);
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
            showForm={showForm}
            toggleForm={toggleForm}
          />
          <HourlyForecast
            currentLocation={city}
            geocodingData={geocodingData}
          />
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};
export default Weather;
