import React from "react";
import ProgressButton from "react-progress-button";
import "./style.scss";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonState: "" };
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    this.setState({ buttonState: "loading" });
    // make asynchronous call
    if (
      this.props.emailError ||
      this.props.pwordError ||
      !this.props.emailValue ||
      !this.props.pwordValue
    ) {
      setTimeout(() => {
        this.setState({ buttonState: "error" });
      }, 3000);
    } else {
      setTimeout(() => {
        this.setState({ buttonState: "success" });
      }, 3000);
    }
  }
}
