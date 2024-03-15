// Home.js
import React from 'react';
import "./recomStyl.css";
import Map from "./Map.js";
import Recommendations from "./Recom.js";
import Alerts from "./Alerts.js";
import Sprays from "./Sprays.js";

const Right = () => {
  return (
    <div>
      <h1>Detailed Forecast</h1>
      {/* Add content for the home page */}
      <Recommendations />
    </div>
  );
}

export default Right;