import React from "react";
import ProgressButton from "react-progress-button";
import "../App.scss";

export default class SignInButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonState: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  //onClick function to call the button animation depending on the result of email and password validation. Valid entry = green tick. Invalid entry = red cross.
  handleClick() {
    this.setState({ buttonState: "loading" });
    // make asynchronous call
    if (
      this.props.emailError ||
      this.props.pwordError ||
      !this.props.emailValue ||
      !this.props.pwordValue
    ) {
      //setTimeout imitates loading network request. Not for production.
      setTimeout(() => {
        this.setState({ buttonState: "error" });
      }, 1500);
    } else {
      setTimeout(() => {
        this.setState({ buttonState: "success" });
      }, 1500);
    }
  }

  render() {
    return (
      <div className="button">
        <ProgressButton
          type="submit"
          onClick={this.handleClick}
          state={this.state.buttonState}
        >
          Sign In
        </ProgressButton>
      </div>
    );
  }
}
