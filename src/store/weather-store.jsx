import clear from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import snow_icon from "../Assets/snow.png";
import rain_icon from "../Assets/rain.png";
import { createContext, useReducer } from "react";

export const WeatherDataContext = createContext({
  allIcons: {},
});

const allIcons = {
  "01d": clear,
  "01n": clear,
  "02d": cloud_icon,
  "02n": cloud_icon,
  "03d": cloud_icon,
  "03n": cloud_icon,
  "04d": drizzle_icon,
  "04n": drizzle_icon,
  "09d": rain_icon,
  "09n": rain_icon,
  "010d": rain_icon,
  "010n": rain_icon,
  "013d": snow_icon,
  "013n": snow_icon,
};

const weatherDataReducer = () => {

}

const WeatherDataContextProvider = ({ children }) => {

  const [weatherData , dispatchWeatherData] = useReducer(weatherDataReducer , false);
  

  return (
    <WeatherDataContext.Provider
      value={{
        allIcons,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataContextProvider;