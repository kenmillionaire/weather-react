import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  let weatherData = {
    city: "Abuja",
    date: "Friday 10:30",
    dateFig: "13/02/2023",
    description: "Cloudy",
    imgUrl: "",
    pressure: "50",
    humidity: "80%",
    wind: "30km/h",
    temperature: "20",
  };
  return (
    <div className="Weather">
      <form className="search-form">
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="Enter a city"
            autofocus="on"
            autoComplete="off"
          />
          <button type="submit" value="search" className="btn btn-success">
            Search
          </button>
          <span>
            <button className="btn btn-primary w-100">Current</button>
          </span>
        </div>
      </form>

      <h1>{weatherData.city}</h1>

      <ul>
        <div className="date">
          <li>Last updated:{weatherData.date}</li>
          <li>{weatherData.dateFig}</li>
          <li>{weatherData.description}</li>
        </div>
      </ul>
      <div className="parameters">
        <div className="row">
          <div className="col-6">
            <span className="temperature">{weatherData.temperature}</span>
            <span className="units">
              <a href="/">°C</a>|
              <a href="/">
                <strong>°F</strong>
              </a>
            </span>
            <span className="weather-icon">
              <ReactAnimatedWeather
                icon="RAIN"
                color="blue"
                size={112}
                animate={true}
              />
            </span>
          </div>
          <div className="col-6">
            <ul>
              <li>Pressure:{weatherData.pressure}</li>
              <li>Humidity:{weatherData.humidity}</li>
              <li>Wind:{weatherData.wind}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
