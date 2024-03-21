import React from "react";
import moment from "moment";
import "./WeeklyWeather.css";

const WeeklyWeather = ({ data }) => {

  //Handle loading state
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weekly-weather">
      <div className="weekly-list">
        {data.list.map((day, index) => (
          <div className="weekly-entry" key={index}>
            <div className="daily-temp text-middle">
              <span>{moment(day.dt * 1000).format("dddd")}</span>
            </div>
            <div className="daily-temp">
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt="Weather Icon"
              />
            </div>
            <div className="daily-temp text-middle">
              <span className="min">{Math.round(day.temp.min)}°C</span>
              <span className="separator"></span>
              <span className="max">{Math.round(day.temp.max)}°C</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyWeather;
