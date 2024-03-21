import React from 'react';
import moment from 'moment';
import './HourlyWeather.css';

const HourlyWeather = ({ data }) => {

  // Display loading message if data is not available
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hourly-weather">
      
      <div className="hourly-scroll"> 
        {data.list.map((hour, index) => (
          <div className="hourly-entry" key={index}>
            <p>{moment(hour.dt * 1000).format('h a')}</p> 
            <img 
              src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt={hour.weather[0].description}
            />
            <p>{Math.round(hour.main.temp)}°C</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyWeather;
