import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./searchBar";
import CurrentWeather from "./CurrentWeather2";
import HourlyWeather from "./HourlyWeather";
import WeeklyWeather from "./WeeklyWeather";
import "./HomePage.css";

const HomePage = ({ city, setCity }) => {
  // State variables to hold fetched weather data
  const [currentData, setCurrentData] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);
  const [weeklyData, setWeeklyData] = useState(null);

  // Function to fetch all weather data
  const fetchData = async () => {
    try {
      //Fetch current, hourly, and weekly weather data using Promise.all
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

  //useEffect hook to fetch data when the 'city' prop changes
  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <div className="home-page">
      <div className="section common-section">
        <SearchBar onCityChange={setCity} />  {/*Search bar to update city*/}
      </div>
      <div className="section current-section">
        {currentData && <CurrentWeather data={currentData} />}  {/*Display current weather conditionally */}
      </div>
      <div className="section common-section">
        {hourlyData && <HourlyWeather data={hourlyData} />}   {/*Display hourly weather conditionally */}
      </div>
      <div className="section common-section">
        {weeklyData && <WeeklyWeather data={weeklyData} />}  {/*Display weekly weather conditionally */}
      </div>
    </div>
  );
};

export default HomePage;
