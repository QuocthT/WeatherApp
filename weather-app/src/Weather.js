import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather.js";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    try {
      // Only fetch if city is not empty
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
  }, []);
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData ? (
        <>
          <CurrentWeather weatherData={weatherData} /> {/* Pass the data */}
          {/* ... (Remove the individual <p> tags you had earlier)*/}
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};
export default Weather;
