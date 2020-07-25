import React from "react";
import "./style.scss";
import logo from "../logo.svg";

export default class Header extends React.Component {
  render() {
    const date = new Date();
    const currentTime = date.getHours();

    let greeting;

    if (currentTime < 12) {
      greeting = "Good morning";
    } else if (currentTime < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }

    return (
      <div>
        <div className="image">
          <img src={logo} />
        </div>
        <div className="greeting">{greeting}, welcome to Green.</div>
        <p className="message">Please sign in below.</p>
      </div>
    );
  }
}
