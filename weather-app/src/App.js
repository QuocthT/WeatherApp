import React, { useEffect, useState } from "react";
import Home from "./pages/Home/HomePage.js";
import Forecast from "./pages/Details/detailed_forecast.js";
import Recommendation from "./pages/Recommendations/recommendation.js";
import "./App.css";
import "./reset.css";
import Footer from "./Footer.js";

const App = () => {

  // State to manage current page
  const [currentPage, setCurrentPage] = useState("home");

  // State to manage the city (with initial value from localStorage)
  const [city, setCity] = useState(() => {
    const storedCity = localStorage.getItem("city");
    return storedCity ?? "london";  //default city : London
  });

  // useEffect to update localStorage when city changes
  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div id="app-container" className="App">
      <div>
        <div className="content">
          {currentPage === "home" && <Home city={city} setCity={setCity} />}
          {currentPage === "detailed_forecast" && <Forecast city={city} />}
          {currentPage === "recommendation" && <Recommendation city={city} />}
        </div>
        <Footer onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default App;
