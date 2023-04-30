import React from "react";
import "./WeatherByDays.css";

export default function WeatherByDays() {
  return (
    <div classNameName="weather-by-days-container">
      <div className="row">
        <div className="col">
          <div className="rectangle">
            <div className="weather-by-day">Mon</div>
            <div>🌤</div>
            <div>14°</div>
          </div>
        </div>
        <div className="col">
          <div className="rectangle">
            <div className="weather-by-day">Tue</div>
            <div>🌧</div>
            <div>14°</div>
          </div>
        </div>
        <div className="col">
          <div className="rectangle">
            <div className="weather-by-day">Wed</div>
            <div>🌥</div>
            <div>18°</div>
          </div>
        </div>
        <div className="col">
          <div className="rectangle">
            <div className="weather-by-day">Thu</div>
            <div>🌤</div>
            <div>16°</div>
          </div>
        </div>
        <div className="col">
          <div className="rectangle">
            <div className="weather-by-day">Fri</div>
            <div>🌤</div>
            <div>14°</div>
          </div>
        </div>
        <div className="col">
          <div className="rectangle">
            <div className="weather-by-day">Sat</div>
            <div>🌩</div>
            <div>13°</div>
          </div>
        </div>
        <div className="col">
          <div className="rectangle">
            <div className="weather-by-day">Sun</div>
            <div>🌤</div>
            <div>10°</div>
          </div>
        </div>
      </div>
    </div>
  );
}
