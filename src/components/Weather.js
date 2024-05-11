import React, { useState } from "react";
import "./Weather.css";

function Weather() {

const [weather,setWeather] =useState({
    humidity : "20",
    temp:"37",
    city:"paris",
    speed:"120"
})
    return (
    <div className="container my-5">
      <div
        className="mx-auto text-center border rounded text-white p-4 "
        style={{ width: "400px", background: "#3B5FAB" }}
      >
        <h1 style={{ color: "red", backgroundColor: "black" }}>
          Weather Forecast
        </h1>

        <form className="d-flex my-3">
          <input
            className="form-control me-2"
            name="city"
            type="search"
            placeholder="City"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
        <h1 className="my-3">
          <i class="bi bi-cloud-drizzle-fill my-5"></i>
        </h1>
        <h1 className="my-2">{weather.temp}</h1>
        <h1 className="my-2">{weather.city}</h1>
        <div className="lastLine d-flex jc-sb justify-content-between my-5">
          <div
            className="humidity text-center "
            style={{ color: "white", }}
          >
            <i class="bi bi-water"></i> Humidity <br />
            {weather.humidity}
          </div>
          <div
            className="windSpeed text-center"
            style={{ color: "white", }}
          >
            <i class="bi bi-lightning-fill"></i> Wind Speed
            <br />
            {weather.speed}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
