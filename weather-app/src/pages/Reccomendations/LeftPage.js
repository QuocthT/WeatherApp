// LeftPage.js
import React from "react";
import "./LeftPage.css";
import Map from "./Map.js";
import Recommendations from "./Recom.js";
import Alerts from "./Alerts.js";
import Sprays from "./Sprays.js";

function LeftPage() {
  return (
    <div className="main">
      <header className="App-header"></header>
      <Recommendations />
    </div>
  );
}

export default LeftPage;
