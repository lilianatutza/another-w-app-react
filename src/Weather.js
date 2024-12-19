import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecastDay";

import "./Weather.css";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log("API response:", response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      feels_like: response.data.main.feels_like,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temp_max: response.data.main.temp_max,
      temp_min: response.data.main.temp_min,
    });
    setLoading(false);
  }

  function search() {
    if (!loading) {
      setLoading(true);
      console.log(`Loading weather for ${city}`);
      const apiKey = "34ae1065362d42545661451bda2b8a1f";

      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

      axios.get(apiUrl).then(handleResponse);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  // if (weatherData.ready) {
  return (
    <div className="Weather">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
              onChange={handleCityChange}
              value={city || ""}
              disabled={loading}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
              disabled={loading}
            />
          </div>
        </div>
      </form>
      {weatherData && <WeatherInfo data={weatherData} />}
      {weatherData && <WeatherForecast data={weatherData} />}
    </div>
  );
}
