import React from "react";
import { CSSTransition } from "react-transition-group";
import logo from "../logo.svg";
import "./style.scss";

function Login() {
  return (
    <div className="base-container">
      <div className="content">
        <div className="image">
          <img src={logo} />
        </div>
        <div className="header">Good {}, welcome to Green.</div>
        <p>Please sign in below.</p>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Email Address</label>
            <input type="text" name="username" placeholder="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>
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

        <div className="footer">
          <button type="submit" className="btn">
            Sign In
          </button>
          <button type="submit" className="btn register">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
