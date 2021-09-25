// import weather from 'openweather-apis'
import React, { createContext, useState, useContext } from "react";
import Weather from "openweather-apis";

const latitude = "-33.7715";
const longitude = "150.8438";
const apiKey = "6f378c4499ec0aa918ffb981686ebad4";

Weather.setLang("en");
Weather.setCoordinate(latitude, longitude);
Weather.setUnits("metric");
Weather.setAPPID(apiKey);

const WeatherContext = createContext({});

// const response = {
//   coord: { lon: 150.8438, lat: -33.7715 },
//   weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
//   base: "stations",
//   main: {
//     temp: 21.39,
//     feels_like: 20.47,
//     temp_min: 16.78,
//     temp_max: 24.95,
//     pressure: 1013,
//     humidity: 34,
//   },
//   visibility: 10000,
//   wind: { speed: 5.66, deg: 160 },
//   clouds: { all: 0 },
//   dt: 1632537261,
//   sys: {
//     type: 2,
//     id: 2008571,
//     country: "AU",
//     sunrise: 1632512542,
//     sunset: 1632556468,
//   },
//   timezone: 36000,
//   id: 2151157,
//   name: "Rooty Hill",
//   cod: 200,
// };

export function WeatherProvider({ children }) {
  const [lastRequestAt, setRequestAt] = useState();
  const [currently, setCurrently] = useState();
  // const [hourly, setHourly] = useState()
  // const [daily, setDaily] = useState()
  // const [alerts, setAlerts] = useState()
  const [loading, setLoading] = useState(true);

  if (!lastRequestAt) {
    setRequestAt(new Date());
    Weather.getAllWeather((err, response) => {

    setCurrently({
      temperature: response.main.temp,
      description: response.weather[0].main,
      iconId: response.weather[0].icon,
    });
    // setHourly(res.hourly)
    // setDaily(res.daily)
    // setAlerts(res.alerts)
    setLoading(false);
    })
  }

  const value = {
    lastRequestAt,
    currently,
    loading,
  };

  if (!loading) console.log(value);

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}
