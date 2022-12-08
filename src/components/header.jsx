import React from "react";
import "../App.scss";
import logo from "../durham_logo.png";

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
          <a href="https://www.durham.ac.uk/homepage/">
            <img src={logo}/>
          </a>
        </div>
        <div className="greeting">Good {greeting}, welcome to Durham University.</div>
        <p className="message">Please sign in below.</p>
      </div>
    );
  }
}
