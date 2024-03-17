// Recommendation.js
import React, { useState } from 'react';
import "./recomStyl.css";

const Recommendation = () => {
  // State variables for alerts
  const [alertDescription, setAlertDescription] = useState('');
  const [alertFinishingTime, setAlertFinishingTime] = useState('');
  const [alertsList, setAlertsList] = useState([]);

  // Function to add alert
  const addAlert = () => {
    if (alertDescription && alertFinishingTime) {
      setAlertsList([...alertsList, { description: alertDescription, finishingTime: alertFinishingTime }]);
      setAlertDescription(''); // Clear input fields after adding
      setAlertFinishingTime('');
    }
  };

  // State variables for crop information
  const [cropType, setCropType] = useState('');
  const [cropQuantity, setCropQuantity] = useState('');
  const [cropList, setCropList] = useState([]);

  // Function to add crop information
  const addCrop = () => {
    if (cropType && cropQuantity) {
      setCropList([...cropList, { type: cropType, quantity: cropQuantity }]);
      setCropType(''); // Clear input fields after adding
      setCropQuantity('');
    }
  };

  return (
    <div id="container">
      <div className="recom-container">
        <h2>Recommendations</h2>
        <ul>
          <li>Plant crops that are suitable for the current season.</li>
          <li>Use organic fertilizers to improve soil health.</li>
          <li>Implement crop rotation to prevent soil diseases.</li>
          <li>Check weather forecasts regularly for upcoming conditions.</li>
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
              <strong>{alert.description}</strong> - Finishing Time: {alert.finishingTime}
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
    </div>
  );
}

export default Recommendation;
