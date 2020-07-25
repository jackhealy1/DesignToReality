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
    setTimeout(() => {
      this.setState({ buttonState: "success" });
    }, 3000);
  }
}
