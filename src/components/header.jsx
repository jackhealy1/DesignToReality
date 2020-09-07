import React from "react";
import "../App.scss";
import logo from "../logo.svg";

export default class Header extends React.Component {
  render() {
    //change greeting depending on time of day.
    const date = new Date();
    const currentTime = date.getHours();

    let greeting;

    if (currentTime < 12) {
      greeting = "morning";
    } else if (currentTime < 18) {
      greeting = "afternoon";
    } else {
      greeting = "evening";
    }

    return (
      <div className="header">
        <div className="image">
          <a href="https://www.homegroup.org.uk/">
            <img src={logo} />
          </a>
        </div>
        <div className="greeting">Good {greeting}, welcome to Home Group.</div>
        <p className="message">Please sign in below.</p>
      </div>
    );
  }
}
