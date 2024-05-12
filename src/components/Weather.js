import React, { useState } from "react";
import "./Weather.css";

function Weather() {
  let APIKey = "f115ed622ab54e12295c4e72acf491b2";

  const [weather, setWeather] = useState({
    icon: "https://openweathermap.org/img/wn/10d@2x.png",
    humidity: "20",
    temp: "37",
    city: "London",
    speed: "120",
  });

  function operateSubmit(event) {
    event.preventDefault();

    let city = event.target.city.value;

    if (!city) {
      alert("Please provide city name");
      return;
    }
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+APIKey
    )
      .then((response) => {
       
        return response.json();
      })
      .then((data) => {
        setWeather({
          icon:
            "https://openweathermap.org/img/wn/" +data.weather[0].icon+"@2x.png",
          humidity: data.main.humidity,
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          speed: data.wind.speed,
        });
      })
      .catch((error) => {
        alert("Unable to fetch API");
      });
  }

  return (
    <div className="container my-5">
      <div
        className="mx-auto text-center border rounded text-white p-4 "
        style={{ width: "400px", background: "#3B5FAB" }}
      >
        <h1 style={{ color: "red", backgroundColor: "black" }}>
          Weather Forecast
        </h1>

        <form className="d-flex my-3" onSubmit={operateSubmit}>
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
          <img src={weather.icon}  />
        </h1>
        <h1 className="my-2">{weather.temp}</h1>
        <h1 className="my-2">{weather.city}</h1>
        <div className="lastLine d-flex jc-sb justify-content-between my-5">
          <div className="humidity text-center " style={{ color: "white" }}>
            <i className="bi bi-water"></i> Humidity <br />
            {weather.humidity}
          </div>
          <div className="windSpeed text-center" style={{ color: "white" }}>
            <i className="bi bi-lightning-fill"></i> Wind Speed
            <br />
            {weather.speed}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
