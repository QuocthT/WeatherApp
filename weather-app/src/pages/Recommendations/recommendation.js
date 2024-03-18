import React, { useState, useEffect } from "react";
import axios from "axios";
import "./recomStyl.css";
import Map from "./Map";
import CurrentWeather from "../Home/CurrentWeather2.js";
import recData from "./recData.json";

const Recommendation = ({ city }) => {
  const [alertDescription, setAlertDescription] = useState("");
  const [alertFinishingTime, setAlertFinishingTime] = useState("");
  const [alertsList, setAlertsList] = useState([]);
  const [currentData, setCurrentData] = useState(null);

  const fetchData = async () => {
    try {
      const [currentRes] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9dd77ed418cc13a9dea204f8b91aaf61&units=metric`
        )
      ]);
      setCurrentData(currentRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  // Function to filter and get tips based on the current weather condition
  const getTipsByWeather = () => {
    if (currentData && currentData.weather && currentData.weather.length > 0) {
      const weatherMain = currentData.weather[0].main.toLowerCase();
      return recData.tips[weatherMain] || recData.tips.default;
    }
    return recData.tips.default;
  };

  // Function to add alert
  const addAlert = () => {
    if (alertDescription && alertFinishingTime) {
      setAlertsList([
        ...alertsList,
        { description: alertDescription, finishingTime: alertFinishingTime },
      ]);
      setAlertDescription(""); // Clear input fields after adding
      setAlertFinishingTime("");
    }
  };

  // State variables for crop information
  const [cropType, setCropType] = useState("");
  const [cropQuantity, setCropQuantity] = useState("");
  const [cropList, setCropList] = useState([]);

  // Function to add crop information
  const addCrop = () => {
    if (cropType && cropQuantity) {
      setCropList([...cropList, { type: cropType, quantity: cropQuantity }]);
      setCropType(""); // Clear input fields after adding
      setCropQuantity("");
    }
  };

  return (
    <div id="container">
      <div className="recom-container">
        <h2>Recommendations</h2>
        {/* Display weather-based recommendations */}
        <ul>
          {getTipsByWeather().map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      {/* Alerts Section */}
      <div className="alert-container">
        <h2>Alerts</h2>
        {/* Input fields for new alert */}
        <input
          type="text"
          value={alertDescription}
          onChange={(e) => setAlertDescription(e.target.value)}
          placeholder="Enter alert description"
        />
        <input
          type="text"
          value={alertFinishingTime}
          onChange={(e) => setAlertFinishingTime(e.target.value)}
          placeholder="Enter finishing time"
        />
        <button onClick={addAlert}>Add Alert</button>

        {/* Display list of alerts */}
        <ul className="alert-list">
          {alertsList.map((alert, index) => (
            <li key={index} className="alert-list-item">
              <strong>{alert.description}</strong> - Finishing Time:{" "}
              {alert.finishingTime}
            </li>
          ))}
        </ul>
      </div>

      {/* Crop Storage Section */}
      <div className="crop-container">
        <h2>Crop Storage</h2>
        {/* Input fields for new crop information */}
        <input
          type="text"
          value={cropType}
          onChange={(e) => setCropType(e.target.value)}
          placeholder="Enter crop type"
        />
        <input
          type="text"
          value={cropQuantity}
          onChange={(e) => setCropQuantity(e.target.value)}
          placeholder="Enter crop quantity"
        />
        <button onClick={addCrop}>Add Crop</button>

        {/* Display list of crop information */}
        <ul className="crop-list">
          {cropList.map((crop, index) => (
            <li key={index} className="crop-list-item">
              <strong>{crop.type}</strong> - Quantity: {crop.quantity}
            </li>
          ))}
        </ul>
      </div>

      {/* Include the Map component */}
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
};

export default Recommendation;
