import "./App.css";
import Footer from "./Footer.js";
import Weather from "./Weather.js";
import HourlyForecast from "./HourlyForecast.js";

function App() {
  return (
    <div className="App">
      <Weather />
      <Footer />
      <HourlyForecast />
    </div>
  );
}
export default App;
