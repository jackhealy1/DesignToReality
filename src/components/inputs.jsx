import React from "react";
import "./style.scss";

export default class Inputs extends React.Component {
  render() {
    return (
      <div className="form">
        <div className="form-group">
          <label htmlFor="username">Email Address</label>
          <input type="text" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>

        <label className="remember">
          <input
            className="checkbox"
            type="checkbox"
            value="remember-this-device"
            id="remember-this-device"
          />
          Remember this device
        </label>
      </div>
    );
  }
}
