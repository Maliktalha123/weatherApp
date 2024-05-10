import React from "react";

function Weather() {
  return (
    <div>
      <div classNameName="container">
        <h1 style={{ color: "red", backgroundColor: "black" }}>
          Weather Forecast
        </h1>

        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readonly
              className="form-control-plaintext"
              id="staticEmail"
              value="email@example.com"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
