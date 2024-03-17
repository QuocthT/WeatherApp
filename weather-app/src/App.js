import React, { useState } from "react";
import Home from "./pages/Home/HomePage.js";
import Forecast from "./pages/Details/detailed_forecast.js";
import Recommendation from "./pages/Recommendations/recommendation.js";
import "./App.css";
import CurrentWeather2 from "./pages/Home/CurrentWeather2.js";
import Footer from "./Footer.js";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const [city, setCity] = useState(() => {
    const storedCity = localStorage.getItem("city");
    return storedCity ?? "london";
  });

  const [currentData] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div id="app-container" className="App">
      <div>
        <div className="content">
          {currentPage === "home" && <Home city={city} setCity={setCity} />}
          {currentPage === "detailed_forecast" && <Forecast city={city} />}
          {currentPage === "recommendation" && <Recommendation />}
        </div>
        <CurrentWeather2 data={currentData} />
        <Footer onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default App;
