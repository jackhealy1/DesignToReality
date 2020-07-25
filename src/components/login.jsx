import React from "react";
import Header from "./header";
import Inputs from "./inputs";
import Button from "./button";
import { Progress } from "./button";
import "./style.scss";

export default class Login extends React.Component {
  render() {
    return (
      <div className="base-container">
        <div className="content">
          <Header />
          <Inputs />
          <Button />
        </div>
      </div>
    );
  }
}
