import React from "react";
import Header from "./header";
import Form from "./form";
import Contact from "./contact";
import "./style.scss";

export default class Login extends React.Component {
  render() {
    return (
      <div className="base-container">
        <div className="content">
          <Header />
          {/* <form onSubmit={this.SubmitForm}> */}
          <Form />
          {/* </form> */}
          <Contact />
        </div>
      </div>
    );
  }
}
