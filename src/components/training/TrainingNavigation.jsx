import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class TrainingNavigation extends Component {
  state = {
    buttonValue: "START",
    timerIsOn: false,
    time: 0,
    start: 0
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
    this.state.start === 0
      ? this.setState({ start: Date.now() })
      : console.log("started before");

    this.timer = setInterval(
      () =>
        this.setState({
          time: this.state.time + 1
        }),
      1
    );
    console.log("counter started");
  }

  stopTimer() {
    clearInterval(this.timer);
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
        <Grid item xs={1} />
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.changeTimerButtonValue}
          >
            {buttonValue}
          </Button>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={2}>
          {this.state.time}
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary">
            SAVE
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="secondary">
            CHANCEL
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default TrainingNavigation;
