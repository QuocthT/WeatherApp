import React, { useState, useEffect } from "react";
import axios from "axios";
import "./recomStyl.css"; // Styling of the page
import Map from "./Map"; // Section that displays a map
import recData from "./recData.json"; // Data of recommendations based on the weather (rain, clouds, snow, default)

const Recommendation = ({ city }) => {
  // Declares the state variables and its setter functions
  // These are state variables for alerts
  const [alertDescription, setAlertDescription] = useState("");
  const [alertFinishingTime, setAlertFinishingTime] = useState("");
  const [alertsList, setAlertsList] = useState([]);

  // These are state variables for crop info
  const [cropType, setCropType] = useState("");
  const [cropQuantity, setCropQuantity] = useState("");
  const [cropList, setCropList] = useState([]);

  // This is state variable for city's current weather data
  const [currentData, setCurrentData] = useState(null);

  // This gets weather data from a particular city
  const fetchData = async () => {
    try {
      const [currentRes] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9dd77ed418cc13a9dea204f8b91aaf61&units=metric`
        ),
      ]);
      setCurrentData(currentRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  // It filters and gets tips based on the current weather
  const getTipsByWeather = () => {
    if (currentData && currentData.weather && currentData.weather.length > 0) {
      const weatherMain = currentData.weather[0].main.toLowerCase();
      return recData.tips[weatherMain] || recData.tips.default;
    }
    return recData.tips.default;
  };

  // This is a function to add alert
  const addAlert = () => {
    if (alertDescription && alertFinishingTime) {
      setAlertsList([
        ...alertsList,
        { description: alertDescription, finishingTime: alertFinishingTime },
      ]);
      // Input fields, where user writes description and end time of an alert
      setAlertDescription("");
      setAlertFinishingTime("");
    }
  };

  // This is a function to add alert info
  const addCrop = () => {
    if (cropType && cropQuantity) {
      setCropList([...cropList, { type: cropType, quantity: cropQuantity }]);
      // Input fields, where user writes crop type and its quantity
      setCropType("");
      setCropQuantity("");
    }
  };

  return (
    
    <div id="container">
      {/* Recommendations Section */}
      <div className="recom-container">
        <h2>Recommendations</h2>
        {/* It display recommendations based on the city's current weather*/}
        <ul>
          {getTipsByWeather().map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      {/* Alerts Section */}
      <div className="alert-container">
        <h2>Alerts</h2>
        {/* It displays an alert section and its inputs (description and end time), which a user can manipulate*/}
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

        {/* After user inputs data, it is added to the alert list, which is displayed below alerts' inputs*/}
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
        {/* It displays a crop section and its inputs (crop type and quantity), which a user can manipulate*/}
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

        {/* After user inputs data, it is added to the crops list, which is displayed below crops' inputs*/}
        <ul className="crop-list">
          {cropList.map((crop, index) => (
            <li key={index} className="crop-list-item">
              <strong>{crop.type}</strong> - Quantity: {crop.quantity}
            </li>
          ))}
        </ul>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
};

export default Recommendation;

