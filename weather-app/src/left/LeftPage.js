// LeftPage.js
import React from "react";
import "./LeftPage.css";
import Map from "./Map.js";
import Recommendations from "./Recom.js";
import Alerts from "./Alerts.js";
import Sprays from "./Sprays.js";

const LeftPage = () => {
  return (
    <div className="left-page-container">
      <Map />
      <Recommendations/>
      <Alerts/>
      <Sprays/>
    </div>
  );
};

export default LeftPage;
