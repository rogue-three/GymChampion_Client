import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class Timer extends Component {
  state = {
    buttonValue: "START",
    timerIsOn: false,
    time: 0,
    start: 0,
    end: 0
  };

  changeTimerButtonValue = () => {
    if (!this.state.timerIsOn) {
      this.setState({ timerIsOn: true, buttonValue: "PAUSE" });
      this.startTimer();
    } else {
      this.setState({ timerIsOn: false, buttonValue: "START" });
      this.stopTimer();
    }
  };

  startTimer() {
    if (this.state.start === 0) {
      this.setState({ start: Date.now() });
    }

    this.timer = setInterval(
      () =>
        this.setState({
          time: this.state.time + 1
        }),
      1000
    );
  }

  stopTimer() {
    this.setState({ end: Date.now() });
    clearInterval(this.timer);
  }

  printDoublePlacesTimePart(timePart) {
    if (timePart < 10) return "0" + timePart;
    return timePart;
  }

  printNiceTime() {
    let hours = Math.floor(this.state.time / 3600);
    let minutes = Math.floor(this.state.time / 60);
    let seconds = this.state.time % 60;
    return `${this.printDoublePlacesTimePart(hours)}:
        ${this.printDoublePlacesTimePart(minutes)}:
        ${this.printDoublePlacesTimePart(seconds)}`;
  }

  render() {
    const { buttonValue } = this.state;
    return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={24}
      >
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.changeTimerButtonValue}
          >
            {buttonValue}
          </Button>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <h4 style={{ color: "white" }}>{this.printNiceTime()}</h4>
        </Grid>
      </Grid>
    );
  }
}

export default Timer;
