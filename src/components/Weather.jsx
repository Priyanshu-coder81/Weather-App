import clear from "../Assets/clear.png";
import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
import { useContext, useEffect, useState } from "react";
import { WeatherDataContext } from "../store/weather-store";
import Header from "./Header";

const Weather = () => {
  const { allIcons } = useContext(WeatherDataContext);

  const [weatherData, setWeatherData] = useState(false);

  const url_key = import.meta.env.VITE_API_KEY;
  const search = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${url_key}`;

    const data = await (await fetch(url)).json();
    const icon = allIcons[data.weather[0].icon] || clear;
    setWeatherData({
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      temperature: Math.floor(data.main.temp),
      location: data.name,
      icon: icon,
    });
  };

  useEffect(() => {
    search("New York");
  }, []);

  return (
    <div className="p_header-container">
      <Header />

      <img
        src={weatherData.icon}
        alt="Image of sun"
        className="p_weather-icon"
      />

      <p className="p_temp">{weatherData.temperature}</p>
      <p className="p_City">{weatherData.location}</p>

      <div className="p_other">
        <div className="p_humidity">
          <WiHumidity className="p_humid-symbol" />
          <div className="humid-values">
            <p>{weatherData.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="p_humidity">
          <LuWind className="p_humid-symbol" />
          <div className="humid-values">
            <p>{weatherData.windSpeed} Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
