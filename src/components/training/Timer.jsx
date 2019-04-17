import React, { Component } from "react";

class Timer extends Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOn: false
  };

  getNicelyPrintedTimeComponent(timeComponent) {
    let stringTimeComponent = timeComponent.toString();
    if (stringTimeComponent.length === 1) {
      return "0" + stringTimeComponent;
    }
    return stringTimeComponent;
  }
  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <React.Fragment>
        {this.getNicelyPrintedTimeComponent(hours)}:
        {this.getNicelyPrintedTimeComponent(minutes)}:
        {this.getNicelyPrintedTimeComponent(seconds)}
      </React.Fragment>
    );
  }
}

export default Timer;
