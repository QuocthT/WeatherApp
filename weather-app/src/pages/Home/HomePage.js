import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./searchBar";
import CurrentWeather from "./CurrentWeather2";
import HourlyWeather from "./HourlyWeather";
import WeeklyWeather from "./WeeklyWeather";
import "./HomePage.css";

const HomePage = ({ city, setCity }) => {
  const [currentData, setCurrentData] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);
  const [weeklyData, setWeeklyData] = useState(null);

  const fetchData = async () => {
    try {
      const [currentRes, hourlyRes, weeklyRes] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a44d3dff57de62f60c1d1a9793f439d5&units=metric`
        ),
        axios.get(
          `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=a44d3dff57de62f60c1d1a9793f439d5&cnt=24&units=metric`
        ),
        axios.get(
          `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=a44d3dff57de62f60c1d1a9793f439d5&units=metric`
        ),
      ]);
      setCurrentData(currentRes.data);
      setHourlyData(hourlyRes.data);
      setWeeklyData(weeklyRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    localStorage.setItem("city", city);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <div className="home-page">
      <div className="section common-section">
        <SearchBar onCityChange={setCity} />
      </div>
      <div className="section current-section">
        {currentData && <CurrentWeather data={currentData} />}
      </div>
      <div className="section common-section">
        {hourlyData && <HourlyWeather data={hourlyData} />}
      </div>
      <div className="section common-section">
        {weeklyData && <WeeklyWeather data={weeklyData} />}
      </div>
    </div>
  );
};

export default HomePage;
