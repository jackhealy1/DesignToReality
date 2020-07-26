import React from "react";
import Header from "./header";
import SignInForm from "./sign-in-form";
import Contact from "./contact";
import "../App.scss";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="content">
        <Header />
        {/* form tag greyed out so the page does not refresh. The submit button
        animation imitates page loading action.
        <form onSubmit={this.SubmitForm}>  */}
        <SignInForm />
        {/* </form> */}
        <Contact />
      </div>
    );
  }
}
