import React from "react";
import "./App.scss";
import Login from "./components/login";

export default class Buttons extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="login">
          <div className="container">
            <Login />
          </div>
        </div>
      </div>
    );
  }
}
