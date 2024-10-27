import "./App.css";

import Weather from "./components/Weather";
import WeatherDataContextProvider from "./store/weather-store";

function App() {
  return (
    <WeatherDataContextProvider>
      <div className="p_container">
        <Weather></Weather>
      </div>
    </WeatherDataContextProvider>
  );
}
export default App;
