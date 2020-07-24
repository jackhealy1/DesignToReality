import React from "react";
import "./App.scss";
import logo from "./logo.svg";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <div className="Login">
        <div className="Container">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
