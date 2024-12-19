import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  // const { coordinates } = props;

  function maxTemperature() {
    let temperature = Math.round(props.data.temp_max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp_min);
    return `${temperature}°`;
  }

  function day() {
    let day = props.data.date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      WEATEHR FORECAST DAY
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
