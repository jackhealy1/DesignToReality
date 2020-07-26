import React from "react";
import "./App.scss";
import Layout from "./components/layout";

export default class Buttons extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="login">
          <Layout />
        </div>
      </div>
    );
  }
}
