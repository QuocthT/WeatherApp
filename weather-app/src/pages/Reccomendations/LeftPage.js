// LeftPage.js
import React from "react";
import Footer from "../Footer.js";
import "./LeftPage.css";
import Map from "./Map.js";
import Recommendations from "./Recom.js";
import Alerts from "./Alerts.js";
import Sprays from "./Sprays.js";

function LeftPage() {
  return (
    <div className="main">
      <header className="App-header"></header>
      <Footer />
      <Recommendations />
    </div>
  );
}

export default LeftPage;
